---
title: PDF-zoo
description: Leaderboard for text-extraction tools.
date: '2024-10-10'
live: https://computational-ethics-lab.observablehq.cloud/pdf-zoo/pdf-zoo
source: https://github.com/jstonge/pdf-zoo
categories:
  - text-extraction
  - ocr
published: true
pinned: true
coverImage: pdf-zoo.webp
---

<script>
	import mtl from '$lib/assets/pdf-zoo.webp';
	import mtl2 from '$lib/assets/pdf-zoo2.webp';
</script>

How do you know when you have decent text extraction from PDFs anyway, since it depends on the problem at hand? In my experience, you know when you know. As with Large Language Models (LLMs), one of the best ways to assess the quality of text extraction tools is to have people vote on them (see [Chatbot Arena LLM Leaderboard](https://lmarena.ai/?leaderboard)). I built a little data app that, for now, doesn't let you vote but at least lets you compare various outputs of popular text extraction tools.

<img alt="pdf-zoo2" class="image" src={mtl} />

On the left, you see what the tool sees. In the last few years, a key realization of the community was that to convert PDFs to text, you need to understand the spatial organization of the documents; you need to understand how the parts of the text come together. On the right, you see the extracted text and the quality of the extraction. Some tools now output markdown, which is more than just the text; it also reflects the role of the text within the document.

<img alt="pdf-zoo2" class="image" src={mtl2} />

If you compare the two outputs above, you will realize that the second tool does something more; it removes boilerplate text. This is a bold move, but I like it. In this particular instance, I agree that I wouldn't want that text.

Overall, the project is still in its early phase, but I already find it useful to easily compare the outputs of different tools on challenging documents I want to use.

<style>

  .image {
    margin-top: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
  }
</style>
