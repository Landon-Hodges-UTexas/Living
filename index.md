---
layout: layout.njk
title: oh god landon made a website
---

# here are the things he talked about:

<ul>
{% for post in collections.all %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ul>