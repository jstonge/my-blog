---
title: UVM course offering by department
description: Number of courses offered by department at University of Vermont
date: 2023-12-12
categories:
  - EDA
  - duckDB
published: true
pinned: false
coverImage: uvm_offering.webp
live: https://observablehq.com/@jstonge/uvm-course-offering-by-department
---

<script>
	import uvm from '$lib/assets/uvm_offering.webp';
	import uvm2 from '$lib/assets/uvm_offering2.webp';
</script>

This is a small [observable notebook](https://observablehq.com/@jstonge/uvm-course-offering-by-department) for visualizing the number of courses offered by department at University of Vermont. We are interested in course offerings for a number of reasons. 

First, the change in course offerings reflect where UVM puts its money. The first two lines are the number of CHEMistry and Natural Resources class offered at UVM. 

<img alt="uvm-offering" class="image" src={uvm} />

One should be careful about interpreting those numbers at face values. Here, when we are talking about courses, we make no distinctions between course types; in Chemistry, many labs are considered class, from the registrar point of view. By focusing on subset of courses that we know have homogenous class types, it is easier to ask specific questions. Below, we were interested in how the English major and the social sciences are doing compared to field of studies such as Computer Science and Business and Administration

<img alt="uvm-offering2" class="image" src={uvm2} />

Once again, this is all exploratory. But here are a few things we think we know about higher-education in the US. The humanities, epitomized by the English major, is thought to be suffering the most from current economic status and shift in values. Whereas the English major used to be the gatekeeping of American intellectualism, valued by most, this is now a bit ridiculed because the major cannot get you a job. That is, (part of) society went from intrinsic valuation of the humanities to a more pragmatic focus, entangled with consideration of productivity. 

Once again, take the following with a grain of salt. But there is an irony  that the 2008 economic crisis brought down raw number of course offering in English, but at the same time Business and Administration went up by quite a margin. The irony lies in that the 2008 crisis was partly caused by a narrow focus on creating fast algorithms in finance that can sell and buy shares at unprecedented timescales. It feels that having more diversified course offering could help protecting ourselves from narrow focus, but perhaps the opposite might be happening.     

There is much more to be said about all of that. I love that topic because I bring myself to think about how society and academia are deeply entangled. Although I love science, academia is the institution driving knowledge discovery. It is fundamentally subject to how society feels about it; how future generations perceive it.

Here, we briefly looked at course offering. But what if those courses were empty? To really dig into more serious questions, it would be nice to know how many students are enrolled in those classes. To UVM's credit, they share that data in a nice way. 

<style>

  .image {
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
</style>
