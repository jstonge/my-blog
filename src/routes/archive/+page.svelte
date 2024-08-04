<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';
	import { writable, derived } from 'svelte/store';
  
	export let data;
  
	const sortedPosts = [...data.posts].sort((a, b) => b.date - a.date);
	const selectedTag = writable(null);
  
	const filteredPosts = derived(selectedTag, $selectedTag => {
	  if ($selectedTag) {
		return sortedPosts.filter(post => post.categories.includes($selectedTag));
	  }
	  return sortedPosts;
	});
  
	function selectTag(tag) {
	  selectedTag.set(tag);
	}
  
	function clearTag() {
	  selectedTag.set(null);
	}
  </script>
  
  <svelte:head>
	<title>{config.title}</title>
  </svelte:head>
  
  <section class="full-width-section">

	<div class="header">
		<h2>Blog entries</h2>
		{#if $selectedTag}
		  <button class="clear-tag-button" on:click={clearTag}>Clear Tag Filter</button>
		{/if}
	  </div>

	
	<div class="table-header table-layout">
	  <span>Title</span>
	  <span>Date</span>
	  <span>Description</span>
	  <span>Cover</span>
	  <span>Tags</span>
	</div>
  
	<div class="divider"></div>
  
	<ul class="posts">
	  {#each $filteredPosts as post}
		<li class="post">
		  <div class="table-layout">
			<a href={post.slug} class="title">{post.title}</a>
			<p class="date">{formatDate(post.date)}</p>
			<p class="description">{post.description}</p>
			<a href={post.slug}>
				<img src={post.coverImage} alt={post.title} class="cover-image">
			</a>
			<div class="tags">
			  {#each post.categories as category}
				<p class="surface-4" on:click={() => selectTag(category)}>&num;{category}</p>
			  {/each}
			</div>
		  </div>
		</li>
	  {/each}
	</ul>
  </section>
  
  <style>
	h2 {
	  margin: 0;
	  padding: 0;
	  font-weight: 300;
	  margin-bottom: 2vh;
	}
  
	.divider {
	  border-top: 1px solid #000;
	  padding: 1rem;
	}
  
	.full-width-section {
	  width: 90vw;
	  max-inline-size: 1440px;
	  display: grid;
	  grid-template-rows: auto 1fr auto;
	  margin-inline: auto;
	  padding-inline: var(--size-7);
	  padding: var(--size-7);
	  box-sizing: border-box;
	}
  
	.header {
	  display: grid;
	  grid-template-columns: 1fr auto;
	  align-items: center;
	  gap: var(--size-7);
	  margin-bottom: var(--size-7);
	}
  
	.clear-tag-button {
	  background-color: var(--primary-color);
	  color: black;
	  border: none;
	  border-radius: var(--radius-round);
	  padding: var(--size-2) var(--size-4);
	  cursor: pointer;
	  font-size: var(--font-size-fluid-2);
	  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}
  
	.clear-tag-button:hover {
	  background-color: var(--primary-color-dark);
	}
  
	.table-header {
	  display: grid;
	  justify-items: left;
	  grid-template-rows: auto 1fr auto;
	  margin-inline: auto;
	  font-size: var(--font-size-fluid-3);
	  font-weight: 600;
	  padding-bottom: 1rem;
	  margin-left: 2vw;
	}
  
	.table-layout {
	  width: 100%;
	  display: grid;
	  grid-template-columns: repeat(5, 1fr);
	  column-gap: 2vw;
	}
  
	.posts {
	  display: grid;
	  gap: var(--size-7);
	}
  
	.post {
	  max-inline-size: var(--size-content-7);
	}
  
	.post:not(:last-child) {
	  border-bottom: 1px solid var(--border);
	  padding-bottom: var(--size-7);
	}
  
	.title {
	  color: var(--text-3-dark);
	  font-size: var(--font-size-fluid-2);
	  text-transform: capitalize;
	}
  
	.date {
	  color: var(--text-3-dark);
	  font-size: var(--font-size-fluid-2);
	  width: 7vw;
	  white-space: nowrap;
	  padding-right: var(--size-3);
	}
  
	.description {
	  color: var(--text-3-dark);
	  font-size: var(--font-size-fluid-2);
	}
  
	.cover-image {
	  width: 250px;
	  height: 150px;
	  object-fit: contain;
	  border-radius: 0;
	  border: 1px solid var(--border);
	  margin-right: var(--size-5);
	  padding: var(--size-0) var(--size-1);
	  background-color: white;
	}
  
	.tags {
	  margin-top: 0;
	}
  
	.tags > * {
	  font-size: var(--font-size-fluid-3);
	  display: inline-block;
	  padding: var(--size-1) var(--size-3);
	  border: 1px solid var(--border);
	  border-radius: var(--radius-round);
	  margin: var(--size-1) var(--size-2);
	  cursor: pointer;
	}
  
	@media (max-width: 768px) {
		
	  .table-layout {
		grid-template-columns: 1fr;
		grid-template-areas:
		  "title date"
		  "description description"
		  "cover cover"
		  "tags tags";
		align-items: start;
		gap: var(--size-2);
	  }
  
	  .title {
		grid-area: title;
		font-size: var(--font-size-fluid-2);
	  	text-transform: capitalize;
		margin-bottom: var(--size-2);
		align-self: start;
	  }
  
	  .date {
		grid-area: date;
		font-size: var(--font-size-fluid-3);
		margin-bottom: var(--size-2);
		justify-self: end;
		align-self: start;
		white-space: nowrap;
		padding-right: 5rem;
	  }
  
	  .tags {
		grid-area: tags;
		font-size: var(--font-size-fluid-2);
	  }
  
	  .description {
		grid-area: description;
		font-size: var(--font-size-fluid-3);
		margin-bottom: var(--size-3);
	  }
  
	  .cover-image {
		grid-area: cover;
		width: 100%;
		height: auto;
		margin-bottom: var(--size-3);
	  }
  
	  .table-header {
		display: none;
	  }
  
	  .post {
		border-bottom: 1px solid var(--border);
	  }
	}
  </style>
  