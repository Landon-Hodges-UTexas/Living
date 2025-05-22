---
title: the void?
tags: 
  - Explanation
layout: layout.njk
---

# what is it?

It takes a while to say anything. And even when it does say something other than "silence", it's not the most coherent companion. It doesn't quite seem human, but it also doesn't seem nearly as intelligent as an ai should be. Well actually, it kind of **IS** human! It's everything it's ever heard and nothing more.

# how does it work?

When you enter the void, you're implored to speak. When you do, your request is anonymized and sent to a backend server that compares your response to every other response ever spoken to it. At the time of writing, that's about 100 possible responses. It finds the response "closest" to yours (we'll talk about what that means in a bit), and returns it to you. It could be something you've told it before, or maybe it's something I told it in training, or maybe it's something someone wanted to get off their chest. The funny thing is, nobody–not even I–can read what is in the void. Only it can. The only way to see something that was spoken into it is to say something similar.

# closest?

The fun math part! Vector embeddings! When your response is sent to the server, it is embedded into a vector, or a numerical representation of it's meaning and structure, by an open source model small enough to run on my own personal computer. That vector is then compared to all the other stored vectors for the one that is the most mathematically similar. Then, the entry corresponding to that embedding is sent to you, where you can read something similar someone said sometime before you. These embeddings and entries are stored as private data on the backend, such that even I can't see them, and if the server were ever to shut down, there would be no way to retreive them. They are truly in the void.

# why the silence?

If the void responds with silence, it's because you've told it nothing new. Be a bit more creative next time, and maybe it'll give you something back