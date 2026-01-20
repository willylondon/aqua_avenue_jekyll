---
layout: page
title: Blog
permalink: /blog/
description: Insights, tutorials, and thoughts on web development, software engineering, and technology trends.
---

<div class="post-list">
  {% for post in site.posts %}
    <article class="post-card">
      <time class="post-card-date" datetime="{{ post.date | date_to_xmlschema }}">
        {{ post.date | date: "%B %d, %Y" }}
      </time>
      
      <h3 class="post-card-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      
      {% if post.excerpt %}
        <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
      {% endif %}
      
      <a href="{{ post.url | relative_url }}" class="post-card-link">Read more →</a>
    </article>
  {% endfor %}
</div>

{% if site.posts.size == 0 %}
  <div class="text-center" style="padding: 4rem 0;">
    <h3>No posts yet</h3>
    <p style="color: var(--text-secondary);">Check back soon for new content!</p>
  </div>
{% endif %}
