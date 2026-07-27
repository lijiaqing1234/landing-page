---
title: "News"
description: "Recent academic and research updates from Jiaqing Li."
type: landing

sections:
  - block: hero
    content:
      eyebrow: Updates
      title: News
      text: Research milestones, new roles, and project updates.
    design:
      css_class: "dark"
      background:
        color: "#07172f"
        gradient:
          type: radial
          start: "rgba(34,211,238,0.24)"
          end: "transparent"
          position: "45% 0%"
          shape: ellipse
          size: "70% 90%"

  - block: collection
    content:
      title: Recent Updates
      text: Research milestones, new roles, and project updates, published as individual posts.
      count: 0
      sort_by: Date
      sort_ascending: false
      filters:
        folders:
          - news
    design:
      view: date-title-summary
      columns: 1
      show_date: true
      show_read_time: false
      show_read_more: true
---
