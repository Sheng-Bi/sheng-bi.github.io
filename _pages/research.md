---
permalink: /research/
title: "Research projects"
author_profile: true
---

## Developing AI Methods for Computational Chemistry

*This research is supported by the National Science and Technology Major Project on New Generation Artificial Intelligence (新一代人工智能国家科技重大专项).*

### Developing science agents for computational chemistry（计算化学科学智能体开发）
We develop LLM-based agents for autonomous computational chemistry research—agents that can plan simulation campaigns, set up and run calculations, analyze results, and iterate toward a scientific goal with minimal human intervention. In parallel, we rebuild classical computational chemistry algorithms on modern machine learning frameworks such as PyTorch and JAX, turning them into differentiable, GPU-native, composable tools that these agents can reliably orchestrate.

### Differentiable molecular dynamics: development and implementation（可微分分子动力学的开发与实现）
We build end-to-end differentiable molecular dynamics engines in which gradients can be propagated through the entire simulation trajectory. This allows force-field parameters, simulation protocols, and even material design variables to be optimized directly against experimental or quantum-mechanical targets. We focus on numerically stable backpropagation through long trajectories, differentiable implementations of thermostats and constant-potential electrodes, and applications to inverse design of electrolytes and interfaces.

### Machine learning force field development and acceleration（机器学习力场的开发与加速）
We develop machine learning force fields (MLFFs) that learn potential energy surfaces from ab initio data, achieving near-quantum accuracy at a fraction of the cost of first-principles methods. Our work covers training-set construction, active learning strategies, and the acceleration of MLFF inference on modern GPU architectures, enabling long-timescale, large-scale simulations of complex materials and electrolytes that were previously out of reach for classical or ab initio molecular dynamics.

## Microscopic Modeling of Energy Storage Materials

*This research is supported by the National Natural Science Foundation of China (国家自然科学基金), including the Excellent Young Scientists Fund (Overseas) (海外优青) and the Young Scientists Fund C (青年项目C).*

### Ion storage mechanism in porous materials（多孔材料中的离子存储机制）
We use molecular simulations to reveal how ions are stored in nanoporous electrodes such as porous carbons, conductive metal–organic frameworks, and two-dimensional materials. By resolving ion confinement, desolvation, and charging dynamics at the sub-nanometer scale, we identify the microscopic mechanisms—counter-ion adsorption, co-ion desorption, and ion exchange—that govern capacitance and power density in supercapacitors and related devices.

### Structure and dynamics of electrochemical interfaces（电化学界面的结构与动力学）
We investigate the electrical double layer at electrode–electrolyte interfaces using constant-potential molecular dynamics, which keeps the electrode at a realistic applied voltage rather than a fixed charge. We study how electrode material, electrolyte composition, and humidity shape interfacial ion arrangement, capacitance, and interfacial reactions such as SEI formation, providing molecular-level design rules for supercapacitors, batteries, and iontronic devices.

### Ion transport and diffusion in condensed electrolytes（凝聚态电解质中的离子输运与扩散）
We study how ions move through concentrated electrolytes such as ionic liquids and water-in-salt systems, where strong ion–ion correlations break the dilute-solution picture. Using graph-theory-based cluster analysis, we map ion aggregation and percolating networks onto measurable transport properties, quantifying free versus bound ions and explaining phenomena such as the underscreening paradox—insights that guide the design of electrolytes with higher conductivity and wider electrochemical windows.
