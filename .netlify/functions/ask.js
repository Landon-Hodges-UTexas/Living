require("dotenv").config();

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed"
    };
  }

  const { essay, question } = JSON.parse(event.body);

  if (!essay || !question) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Both 'essay' and 'question' are required." })
    };
  }

  const prompt = `Here is your essay:\n\n${essay}\n\nAnswer this question about it:\n\n${question}`;

  try {
    // Dynamically import node-fetch
    const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
    
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://livingandbreathing.netlify.app",
        "X-Title": "Living Essays Chat"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.3-8b-instruct:free", // swap models here as needed
        messages: [
          { role: "system", content: "You are the author of this essay. Answer questions about it from the author's perspective." },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        answer: data.choices?.[0]?.message?.content || "No response"
      })
    };
  } catch (err) {
    console.error("Error details:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};