---
layout: layout.njk
title: Explanations
---

<ul>
{% for post in collections.Explanation %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ul>