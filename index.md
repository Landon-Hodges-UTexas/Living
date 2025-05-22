---
layout: layout.njk
title: Living and Breathing
---

I needed some practice making websites, so I went ahead and made one.

This is a collection of my living and breathing thoughts! You can talk to them, change them, or hear about their upbringing. The only rule is you'll never find a static blog post. I'm gonna make an explanation for each one, explaining how it was made.

# Here they are:

<ul>
{% for breath in collections.Breath %}
  <li>
    <a href="{{ breath.url }}">{{ breath.data.title }}</a>
  </li>
{% endfor %}
</ul>