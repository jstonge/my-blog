---
title: Having a newborn child
description: Is she taking enough weight?
date: '2024-08-18'
source: https://github.com/jstonge/baby-log
categories:
  - babyStuff
  - ObsFramework
published: true
pinned: false
type: fun
coverImage: src/lib/assets/DashboardB.webp
---

<script>
	import dashboardA from '$lib/assets/DashboardA.webp';
	import dashboardB from '$lib/assets/DashboardB.webp';
</script>

So I had a child. She is adorable. She has a lot of hairs. But also she doesn't gain as much weight as one would expect. At first, we were keeping track of her weight gains on post-its. That was messy. Empowered by my PhD journey in complex systems and [Observable framework](https://observablehq.com/framework/), we decided that we should go for a better solution.

Before explaining the [dashboard](https://jstonge.github.io/baby-log/), I want to mention how [Observable framework](https://observablehq.com/framework/) was instrumental to the enterprise. The main constraint was, obviously, time. How could I hope to build a dashboard with so little time (and energy)? Observable framework, with [Plot](https://observablehq.com/plot/), really hit the target in terms of prototyping time. I probably went from some an idea to represent cumulative breastfeeding time (CBT), with respect to some guideline, under an hour, which is crazy. And the first gist was was good enough for my partner to be on board, without hating too much for taking the time to build a bloody dashboard. From there, we could iterate and add more information as needed without too much hassle. 

When you visit the [dashboard](https://jstonge.github.io/baby-log/) (and after waiting the page to load as I am using a free github hosting instance), this is what you should see:

<img alt="Dashboard A" class="image" src={dashboardA} />

The main pannel shows the CBT, with the official breastfeeding guideline indicated by the diagonal dashline (30minutes/3hours, or 8 times a day). The first and second dot of each link is start and end of a breastfeed. Since it is a cumulative sum, each link starts where the previous one ends. One can filter the time of interest by brushing the histograms at the top of the CBT plot.

At some point (on day 19th, I think), we witness the first real breastfeed. That is, we could see our little girl gulping like never before. We realized how most breastfeeds before that day were, to be kind, below average. We represent this newly acquired information by awarding each breastfeeding with a color, with some olympic inspiration.

The side pannel show aggregated data to get a global picture of the breastfeeding. The top plot shows the hourly aggregated activity. The hope would be that at some point some patterns, or routines, will emerge, facilitating coordination in our daily activites. The second plot is the weight. And the last plot is the average breastfeed duration, which we are interesting to see changes overtime. 

We were also interested in the daily frequency of the different activities:

<img alt="Dashboard B" class="image" src={dashboardB} />

In particular, the number of breastfeed and syringes (milk supplement) were interesting to us. 

Thats it for now, I'll add more information when I have time.

<style>
  .image {
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
  
</style>