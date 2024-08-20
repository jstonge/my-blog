---
title: The geography of the internet
description: Where and when did the internet happened?
date: 2024-05-22
categories:
  - Plot
  - Geo
published: true
pinned: false
coverImage: https://raw.githubusercontent.com/jstonge/blog/main/thumbnails/stories/rise-internet.webp
type: fun
live: https://observablehq.com/@jstonge/the-geography-of-the-internet
---

<script>
	import internet from '$lib/assets/internet.webp';
</script>

When reading [Broad Band: The Untold Story of the Women Who Made the Internet](https://en.wikipedia.org/wiki/Broad_Band), I realized I didn't know as much about the origin of the internet and computing as I would like. One night, I got into the [Timeline of computing](https://en.wikipedia.org/wiki/Timeline_of_computing). As a big fan of cultural evolution theory, I thought it would be cool to look at the geographic spread of computing technologies (and perhaps augment it with all the information contained within Broadband). So I wrote a small [observable notebook](https://observablehq.com/@jstonge/the-spread-of-computational-thinking) for visualizing the evolution of computing/internet, directly extracted from the timeline. 

<img alt="internet" class="image" src={internet} />

It is still a work in progress. I find it hard to visualize the underlying patterns just from the world map. I added the emergence of the Arpanet, but the range filter is a bit clunky. The first few years of the Arpanet were easy enough to map, then it gets a little bit out of hand (obviously).

Anyway, it was a fun little project. I might come back to it at some point.

<style>
  .image {
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }

</style>
