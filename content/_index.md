---
title: "About"
description: "Academic profile of Jiaqing Li, an undergraduate researcher working on large language models and evolutionary optimization."
type: landing

sections:
  - block: resume-biography
    content:
      username: me
      text: |
        I am an undergraduate student in Software Engineering at **Harbin Institute of Technology, Weihai**. My research focuses on large language models, efficient post-training, parameter-efficient adaptation, LLM reasoning, evolutionary optimization, and automated algorithm design.

        I am currently a **Research Assistant at the Southern University of Science and Technology**, advised by **Prof. Zhenkun Wang**, where I study gradient-free LLM post-training and compressed parameter-space search. I am also a **Research Intern at Huawei Noah's Ark Lab**, contributing to the LLM4AD-NEXT platform for LLM-driven automated algorithm design.

        I am always happy to discuss research ideas and potential collaborations.

        I am currently seeking **PhD opportunities starting in Fall 2027**.
    design:
      avatar:
        size: large
        shape: rounded
      biography:
        style: "max-width: 72ch;"
      css_class: "researcher-playground bg-white dark:bg-slate-950"
      spacing:
        padding: ["5rem", 0, "4rem", 0]

  - block: markdown
    content:
      title: Research Interests
      text: |
        - Large Language Models
        - Efficient Post-Training
        - Parameter-Efficient Adaptation
        - LLM Reasoning
        - Evolutionary Optimization
        - Automated Algorithm Design
    design:
      css_class: "bg-slate-50 dark:bg-slate-900/40"
      spacing:
        padding: ["3rem", 0, "3rem", 0]

  - block: markdown
    content:
      title: Education
      text: |
        - **B.E. in Software Engineering**, Harbin Institute of Technology, Weihai - Expected 2027
    design:
      spacing:
        padding: ["3rem", 0, "3rem", 0]

  - block: collection
    id: research
    content:
      title: Selected Projects
      text: Research on efficient LLM adaptation, evolutionary optimization, and automated algorithm design.
      count: 3
      sort_by: Date
      sort_ascending: false
      filters:
        folders:
          - projects
      archive:
        enable: true
        text: View all projects
        link: projects/
    design:
      view: article-grid
      columns: 3
      fill_image: false
      show_date: true
      show_read_time: false
      show_read_more: true
      css_class: "bg-slate-50 dark:bg-slate-900/40"
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: collection
    id: news
    content:
      title: Recent News
      count: 3
      sort_by: Date
      sort_ascending: false
      filters:
        folders:
          - news
      archive:
        enable: true
        text: View all news
        link: news/
    design:
      view: date-title-summary
      columns: 1
      show_date: true
      show_read_time: false
      show_read_more: true
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: markdown
    id: experiences
    content:
      title: Experiences
      text: |
        ### Research Intern - Huawei Noah's Ark Lab

        **May 2026 - Present**

        Developing and refining extensible workflows for LLM4AD-NEXT, with emphasis on configurability, evaluation, comparability, and integration across automated heuristic-design methods.

        ### Research Assistant - Southern University of Science and Technology

        **December 2025 - Present**

        Investigating gradient-free LLM post-training and efficient low-dimensional parameter-space search under the supervision of Prof. Zhenkun Wang.

        [View all experiences](experiences/)
    design:
      css_class: "bg-slate-50 dark:bg-slate-900/40"
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: cta-card
    content:
      title: Let's discuss research
      text: Stay curious, keep exploring.
      button:
        text: Email me
        url: mailto:2023210914@stu.hit.edu.cn
    design:
      card:
        css_class: "bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 text-white shadow-2xl"
---
