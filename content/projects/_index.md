---
title: "Projects"
description: "Research and open-source projects by Jiaqing Li."
type: landing

sections:
  - block: hero
    content:
      eyebrow: Selected Work
      title: Projects
      text: Research projects spanning LLM adaptation, evolutionary optimization, and automated algorithm design.
    design:
      css_class: "dark"
      background:
        color: "#07172f"
        gradient:
          type: radial
          start: "rgba(59,130,246,0.28)"
          end: "transparent"
          position: "50% 0%"
          shape: ellipse
          size: "75% 90%"

  - block: collection
    content:
      title: Project Notes
      text: Research projects presented as individual articles, with room for future progress updates and technical notes.
      count: 0
      sort_by: Date
      sort_ascending: false
      filters:
        folders:
          - projects
    design:
      view: article-grid
      columns: 2
      fill_image: false
      show_date: true
      show_read_time: false
      show_read_more: true
---
