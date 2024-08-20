---
title: Grontology
description: How do different fields of study understand social groups?
date: '2024-07-12'
categories:
  - litReview
  - phd
published: false
pinned: false
coverImage: grontology.webp
live: https://jstonge.observablehq.cloud/hello-research-groups/grontology
source: https://raw.githubusercontent.com/jstonge/hello-research-groups/main/docs/results/timeline.md
---

<script>
  import Leviathan from '$lib/assets/Leviathan_by_Thomas_Hobbes.jpg?enhanced';
	import phi from '$lib/assets/phi.webp';
	import phys from '$lib/assets/phys.webp';
	import pgg from '$lib/assets/pgg.webp';
	import sacred from '$lib/assets/sacred.webp';
	import bio from '$lib/assets/bio.webp';
	import cgs from '$lib/assets/cgs.webp';
	import socsci from '$lib/assets/socsci.webp';

  // Define the images and their captions
  let images = [
    { src: phi, alt: 'phi', caption: 'Collective intentionality' },
    { src: cgs, alt: 'cgs', caption: 'Cultural group selection' },
    { src: phys, alt: 'phys', caption: 'Physics of higher-order networks' },
    { src: bio, alt: 'bio', caption: 'Group selection in biology' },
    { src: pgg, alt: 'pgg', caption: 'Public good games' },
    { src: socsci, alt: 'socsci', caption: 'Classical social science' },
  ];
  
  // Selected image index
  let selectedImageIndex = 0;
</script>

<div class="margin-note-image">
  <enhanced:img src={Leviathan} alt="Leviathan"/>
</div>

In my thesis, I review how in many scientific communities there is always a group of people arguing in favor of non-reducible group-level behaviors. In complex systems parlance, we would say group-level behaviors _emerge_ from their constituents, here the individuals. Think of how cortical regions in the brain are non-reducible to individual neurons, but we are the neurons. 

This argument takes different forms at different times, but is always somewhat controversial. Perhaps the most well-know controversy is that of [group selection in biology](https://en.wikipedia.org/wiki/Group_selection). But many more followed, with more or less formalized ways to frame the idea. For instance, more recently people talked about collectives in team science summoning the idea of synergy. Instead of having a Leviathan, you have synergestic teams of perhaps lesser individuals who might beat all-star teams (similar idea to the [diversity bonus](https://press.princeton.edu/books/paperback/9780691191539/the-diversity-bonus?srsltid=AfmBOoo-EoLHR-t83bzxKx38XjW4M1bmX5pab_aCVHCVM56WZQEt-R-H) in science and businesses). In both cases, there is something more than the sum of individual behaviors. 

Since I believe in the power of visualization, even for literature review, I put together an [interactive timeline](https://jstonge.observablehq.cloud/hello-research-groups/grontology) that showcase my literature review. Here are the reviewed literature, as shown on the [entry](https://jstonge.observablehq.cloud/hello-research-groups/grontology):

<select bind:value={selectedImageIndex}>
  {#each images as image, index}
    <option value={index}>{image.caption}</option>
  {/each}
</select>

<figure class="image-container">
  <img src={images[selectedImageIndex].src} alt={images[selectedImageIndex].alt} />
  <figcaption>{images[selectedImageIndex].caption}</figcaption>
</figure>

I won't go into the details here, but i'll say that each perspective is unique in what they mean by group-level behaviors. 

Philosophers and social scientists tend to make verbal arguments about the existence of group-level behaviors, which are rooted in their intellectual traditions. 
They identify a wide diversity of group features that characterize group behaviors. 
Some features, like group size, group memberships, and the degree of institutionalization, help distinguishing field of studies that belong to different field of studies.

Smaller groups, composed of related individuals will be studied by anthropologists, while larger groups of unrelated individuals are studied by sociologists and organization scientists.Organizational scientists are more interested in how individuals internalized organizational norms in modern firms, while sociologists take a broader perspective on the myriad of ways of how individuals being shaped by societies. 


In some cases, social scientists have sought to quantify social groups in some way.
Social psychologists seek to explain the underpinnings of social identity by doing experiments on the pain of being excluded from a group, or how perception is shaped by cultures.
Other researchers like Donald Campbell offered a quantitative perspective on group existence.
He argued that groups can be distinguish from aggregated by looking at how people share a common faith, who follow principled from psychophysics.s
But as far as I know, the social science mostly lack mechanistic models of group behaviors.

From a methodological perspective, we focus on two main, but intimately related, group-based formalism.

The first is about multilevel selection and cultural group selection. In most cases, the formalism stems from population biology, but is applied to culture. Representatives include Boyd and Richerson, Bowles, D.S. Wilson and Sober, and all their descendants. We introduce cultural group selection in this [entry](https://jstonge.vercel.app/cgs).

The second stems from physcists explaining public good games in terms of higher-order networks. Representatives include Yamir Moreno, Perc, Gómez-Gardeñes, and many others [entry](https://jstonge.vercel.app/cgs).

Interestingly enough, both perspective are rooted in the idea of collective action theory, as argued by 

<style>
  /* Style for margin note */
  .margin-note-image {
    font-size: 12px;
    width: 200px;  /* Set the width of the image */
    float: right;  /* Align the image to the right */
    margin-left: 20px; /* Space between the text and the image */
    margin-right: -300px; /* Pull the image into the right margin */
    position: relative; /* Position relative to its normal position */
  }


  .image-container {
    text-align: center;
  }

  img {
    margin-top: 2rem;
    max-width: 100%;
    height: auto;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.15) 2px 3px 8px;
  }

  figcaption {
    margin-top: 5px;
    font-size: 14px;
    color: #555;
  }

  select {
    margin-top: 15px;
    width: 100%;
    padding: 12px 16px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 8px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    box-sizing: border-box;
  }

  select:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  .select-arrow {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: 16px;
    color: #777;
  }

  @media (max-width: 768px) {
    .margin-note-image {
        font-size: 12px;
        width: 70%;  /* Set the width of the image */
        margin: 0 auto; /* Center the image horizontally */
        display: block; /* Ensure the image behaves as a block-level element */
        float: none; /* Align image with text */
        border-radius: 15%; /* Make the image round in the corner */
      }
  }
</style>
