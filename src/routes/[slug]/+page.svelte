<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
		{#if data.meta.live}
				<p>View live: <a href={data.meta.live}>{data.meta.live.split("/").at(-1)}</a></p>
		{/if}
		{#if data.meta.source}
				<p>Source: <a href={data.meta.source}>{data.meta.source.split("/").at(-1)}</a></p>
		{/if}
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}

	/* Existing CSS */

@media screen and (max-width: 767px) {

    .tags {
        display: flex;
        flex-wrap: wrap; /* Allow tags to wrap to a new line */
        justify-content: left; /* Center the tags */
        gap: 0.5rem; /* Adjust gap between tags */
    }

    .tags > * {
        white-space: nowrap; /* Prevent tags from breaking onto multiple lines */
    	}
	}

</style>
