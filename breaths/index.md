---
layout: layout.njk
title: Breaths
---

<ul>
{% for breath in collections.Breath %}
  <li>
    <a href="{{ breath.url }}">{{ breath.data.title }}</a>
  </li>
{% endfor %}
</ul>