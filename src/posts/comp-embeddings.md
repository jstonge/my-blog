---
title: Computational Embeddings
description: Visualizing similarity using umap+hdbscan
date: 2024-05-10
categories:
  - pan & zoom
  - D3
published: true
pinned: false
coverImage: comp-embeddings.webp
live: https://observablehq.com/@jstonge/computational-embeddings
---

<div class="caution">🚧 WIP 🚧</div>

<script>
	import compEmb from '$lib/assets/comp-embedding.webp';
</script>

As part of my PhD, I got interested in how field of studies are increasingly becoming "computational". But "computational" means different things to different communities. What I had in mind by computational is something like "scientific works that rely on computer programming". This definition was a bit naive, so I started to look at paper embeddings to see the various use of it. 

Here are all papers on the S2ORC database mentionning the 'computational' keyword:

<img alt="comp-embedding" class="image" src={compEmb} />

Here the colors represent field of studies (I annotated a few of them).  

<style>
  .image {
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
</style>
