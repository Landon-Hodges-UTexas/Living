---
layout: layout.njk
title: Living and Breathing
---

This is a collection of my living and breathing thoughts! I've collected some of my breaths. Some of them are inhales, some of them are exhales, but all of them are alive. You can talk to them, change them, or hear about their upbringing. The only rule is you'll never find a static blog post.

# Here they are:

<ul>
{% for breath in collections.Breath %}
  <li>
    <a href="{{ breath.url }}">{{ breath.data.title }}</a>
  </li>
{% endfor %}
</ul>