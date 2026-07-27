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
    design:
      avatar:
        size: large
        shape: rounded
      biography:
        style: "max-width: 72ch;"
      css_class: "bg-white dark:bg-slate-950"
      spacing:
        padding: ["5rem", 0, "4rem", 0]

  - block: features
    content:
      subtitle: Research Interests
      title: Efficient and adaptable reasoning systems
      text: My work connects large language model post-training with low-dimensional and evolutionary search.
      items:
        - name: Efficient LLM Post-Training
          icon: bolt
          description: Gradient-free optimization, reasoning-trajectory diversity, and pass@k-oriented evaluation.
        - name: Parameter-Efficient Adaptation
          icon: adjustments-horizontal
          description: LoRA, SVD-based compression, and low-dimensional parameter-space search.
        - name: Automated Algorithm Design
          icon: cpu-chip
          description: LLM-driven agents, evolutionary optimization, and extensible heuristic-design workflows.
    design:
      layout: bento
      css_class: "bg-slate-50 dark:bg-slate-900/40"
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: markdown
    content:
      title: Education
      text: |
        ### Harbin Institute of Technology, Weihai

        **Bachelor of Engineering in Software Engineering** - Expected 2027
    design:
      spacing:
        padding: ["3rem", 0, "3rem", 0]

  - block: markdown
    id: research
    content:
      title: Selected Research
      text: |
        ### Gradient-Free LLM Post-Training

        Comparing Evolution Strategies with Group Relative Policy Optimization for large language model post-training, with a focus on reasoning-trajectory diversity and pass@k performance. A related manuscript has been submitted to AAAI 2027.

        ### Compressed Parameter-Space Search

        Studying LoRA- and SVD-based compression for efficient LLM adaptation, including performance-compression trade-offs and the contributions of different singular subspaces.

        ### LLM4AD-NEXT

        Contributing extensible end-to-end workflows to an open-source platform for LLM-driven automated algorithm design and evolutionary optimization.

        [View publications](/publications/) · [Explore projects](/projects/) · [Open LLM4AD-NEXT on GitHub](https://github.com/Optima-CityU/LLM4AD_Next)
    design:
      css_class: "bg-slate-50 dark:bg-slate-900/40"
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: markdown
    id: news
    content:
      title: Recent News
      text: |
        **May 2026** - Joined **Huawei Noah's Ark Lab** as a Research Intern and began contributing to LLM4AD-NEXT.

        **2026** - Submitted a manuscript on gradient-free post-training for large language models to **AAAI 2027**.

        **December 2025** - Started working as a **Research Assistant** at the Southern University of Science and Technology under the supervision of Prof. Zhenkun Wang.

        [View all news](/news/)
    design:
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: markdown
    id: experience
    content:
      title: Research Experience
      text: |
        ### Research Intern - Huawei Noah's Ark Lab

        **May 2026 - Present**

        Developing and refining extensible workflows for LLM4AD-NEXT, with emphasis on configurability, evaluation, comparability, and integration across automated heuristic-design methods.

        ### Research Assistant - Southern University of Science and Technology

        **December 2025 - Present**

        Investigating gradient-free LLM post-training and efficient low-dimensional parameter-space search under the supervision of Prof. Zhenkun Wang.

        [Read more about my internship](/internship/)
    design:
      css_class: "bg-slate-50 dark:bg-slate-900/40"
      spacing:
        padding: ["4rem", 0, "4rem", 0]

  - block: cta-card
    content:
      title: Let's discuss research
      text: I welcome conversations about efficient LLM adaptation, evolutionary optimization, and automated algorithm design.
      button:
        text: Email me
        url: mailto:2023210914@stu.hit.edu.cn
    design:
      card:
        css_class: "bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 text-white shadow-2xl"
---
