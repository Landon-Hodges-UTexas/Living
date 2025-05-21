---
layout: layout.njk
title: Living and Breathing
---

This is a collection of my living an breathing thoughts! I've compiled a list of breaths. Some of them are inhales, some of them are exhales, but all of them are alive. You can talk to them, change them, or hear about their upbringing. The only rule is you'll never find a static blog post. These are living breaths.

# Check some of them out:

<ul>
{% for post in collections.Breath %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ul>