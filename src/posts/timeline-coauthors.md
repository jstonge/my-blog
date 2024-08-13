---
title: Timeline coauthors
description: Coauthorship-papers coevolution
date: '2023-06-14'
categories:
  - measuringGroups
  - phd
published: true
pinned: true
coverImage: measuring.webp
live: https://jstonge.observablehq.cloud/hello-research-groups/results/timeline
source: https://raw.githubusercontent.com/jstonge/hello-research-groups/main/docs/results/timeline.md
---

What is the relationship between coauthors and scientific productivity?  It depends. On a lot of things. In this notebook, lets try to represent the wide variability of patterns of coauthorships and productivity, that we know are closely related. 

In addition to the dodge dot plots, there is a timeseries of number of coauthors, with dots colored by relative academic age of coauthors. The line is the output of a bayesian switchpoint that looks for two different poisson rates.  It works well in some cases, but not others.

p.s. This project is part of a larger project of quantifying research groups in science. The source code can be found [here](https://raw.githubusercontent.com/jstonge/hello-research-groups/main/docs/results/timeline.md).

<style type="text/css">

.container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 600px;
  width: 800px;
  max-width: 1200px;
  margin: auto;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transform: translateX(-10%);
  box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
}


</style>
