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

  - block: markdown
    content:
      title: LLM4AD-NEXT
      text: |
        **Open-source agent platform · Huawei Noah's Ark Lab**

        I contribute to the ongoing development of **LLM4AD-NEXT**, a platform for LLM-driven automated algorithm design and evolutionary optimization. My work focuses on developing and refining extensible end-to-end workflows that integrate multiple automated heuristic-design methods while improving configurability, evaluation, comparability, and extensibility.

        [View LLM4AD-NEXT on GitHub](https://github.com/Optima-CityU/LLM4AD_Next)

  - block: markdown
    content:
      title: Gradient-Free LLM Post-Training
      text: |
        A research project comparing Evolution Strategies with GRPO for large language model post-training. The project studies reasoning-trajectory diversity and pass@k behavior, with the goal of understanding when gradient-free optimization offers practical advantages.

  - block: markdown
    content:
      title: Compressed Parameter-Space Search
      text: |
        An investigation of LoRA- and SVD-based parameter-space compression for efficient LLM adaptation. The project analyzes performance-compression trade-offs and the contributions of different singular subspaces to more effective low-dimensional search spaces.
---
