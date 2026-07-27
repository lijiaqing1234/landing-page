---
title: "About"
description: "Academic profile of Jiaqing Li, an undergraduate researcher working on large language models and evolutionary optimization."
type: landing

sections:
  - block: resume-biography
    content:
      username: me
      text: |
        I am an undergraduate student in Software Engineering at Harbin Institute of Technology, Weihai. I work on efficient and reliable ways to adapt and improve large language models, with a particular interest in gradient-free optimization and reasoning.
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      avatar:
        size: large
        shape: rounded
      biography:
        style: "max-width: 68ch;"
      background:
        color: "#07172f"
        gradient:
          type: radial
          start: "rgba(34,211,238,0.22)"
          end: "transparent"
          position: "75% 15%"
          shape: ellipse
          size: "75% 80%"
      css_class: "dark"

  - block: features
    content:
      subtitle: Research Interests
      title: Building efficient, adaptable reasoning systems
      text: My current interests connect large language model post-training with evolutionary and automated search.
      items:
        - name: Efficient LLM Post-Training
          icon: bolt
          description: Gradient-free optimization, reasoning-trajectory diversity, and pass@k-oriented evaluation.
        - name: Parameter-Efficient Adaptation
          icon: adjustments-horizontal
          description: LoRA, SVD-based compression, and low-dimensional search spaces for model adaptation.
        - name: Automated Algorithm Design
          icon: cpu-chip
          description: LLM-driven agents, evolutionary optimization, and extensible heuristic-design workflows.
    design:
      layout: bento
      css_class: "bg-slate-50 dark:bg-slate-900/40"

  - block: markdown
    content:
      title: Education & Honors
      text: |
        ### Harbin Institute of Technology, Weihai

        **Bachelor of Engineering in Software Engineering** · Expected 2027<br>
        Average grade: **82.31/100**

        ### Honors

        - People's Scholarship for academic excellence
        - Outstanding Student Award

  - block: markdown
    content:
      title: Current Research
      text: |
        Since December 2025, I have worked as a Research Assistant at the Southern University of Science and Technology under the supervision of **Prof. Zhenkun Wang**. My current work investigates:

        - Evolution Strategies versus Group Relative Policy Optimization for LLM post-training
        - Reasoning-trajectory diversity and pass@k performance
        - LoRA- and SVD-based parameter-space compression
        - The contribution of singular subspaces to low-dimensional optimization

  - block: cta-card
    content:
      title: Interested in research collaboration?
      text: I am happy to discuss efficient LLM adaptation, evolutionary optimization, and automated algorithm design.
      button:
        text: Email me
        url: mailto:2023210914@stu.hit.edu.cn
    design:
      card:
        css_class: "bg-gradient-to-br from-cyan-600 via-blue-700 to-slate-900 text-white shadow-2xl"
---
