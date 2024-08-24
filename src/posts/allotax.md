---
title: ALLotaxonometry
status: Deployed
description: Bringing allotaxonometry to the masses. 
live: https://allotaxp.vercel.app
source: https://github.com/jstonge/allotaxp
date: '2024-07-05'
categories:
  - modeling
  - D3
  - csys
published: true
pinned: false
type: project
coverImage: allotax.webp
---
<script>
	import allotax from '$lib/assets/allotax.webp';
</script>

Allotaxonometry is a collection of datavisualization tools to compare two systems that have comparable (Zipfian) ranked lists of components. For instance, popularity of baby names at different in time (see Fig. 1), language use on Twitter, or forest tree species abundance. By juxtaposing pairs of heavy-tail Zipf distributions using _rank-turbulence divergence_, a tunable instrument improving on well known metrics such as the Jensen-Shannon divergence, allotaxonographs provide a flexible tools to visulize and quantify rank-rank histograms. See [Dodds et al. 2020](https://www.semanticscholar.org/reader/9afd434304a24928c3d4f13083a4a1e0df2321b5) for a deep, deep dive on allotaxonometry.

We built a a simple web interface in Svelte where user can just drop-in their datasets and obtain a publication ready visualization. This dashboard sits on top of `allotaxonometer.js`, a javascript package to calculate the different divergences.

The main plot looks as follow

<img alt="allotax" class="image" src={allotax} />

Allotaxonometry of popular US boy baby names in 1895 and 1930. When examining the most popular baby names in 18951945 and 1930 using Allotaxonometry, we observe significant growth in popularity for names like Robert and Donald. This is evident from their positions further to the right on the diamond plot, indicating their increasing popularity over time. 

<!-- The tunable histogram plot on the right provides additional insight into the magnitude of their growth, as they moved from ranks 638 and 3024 in 1945 to first and second rank in 1995, respectively. The interactive equation on the left top corner shows that we have used an $\alpha=0.92$ to determine the relative importance of rare baby names relative to common ones [DESCRIBE RTD BETTER]. Mary and Linda lost the baby name lottery during the same period. [TODO: figure out why stroke-width of cells appears so thick?! We need to improve our export of SVG more generally. Labels are too small at the moment. -->

<style>
  .image {
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
</style>