---
layout: page
title: Portfolio
permalink: /portfolio/
description: Explore my collection of projects showcasing expertise in web development, cloud infrastructure, and innovative technology solutions.
---

<div class="project-grid">
  {% for project in site.projects %}
    <article class="project-card">
      <h3 class="project-card-title">
        <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      </h3>
      <p class="project-card-description">{{ project.description }}</p>
      
      {% if project.technologies.size > 0 %}
        <div class="project-card-tech">
          {% for tech in project.technologies %}
            <span class="tech-tag">{{ tech }}</span>
          {% endfor %}
        </div>
      {% endif %}
      
      <a href="{{ project.url | relative_url }}" class="project-card-link">Learn more →</a>
    </article>
  {% endfor %}
</div>

{% if site.projects.size == 0 %}
  <div class="text-center" style="padding: 4rem 0;">
    <h3>No projects yet</h3>
    <p style="color: var(--text-secondary);">Check back soon for exciting projects!</p>
  </div>
{% endif %}
