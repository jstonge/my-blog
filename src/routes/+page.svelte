<script lang="ts">
    import Hero from './hero.svelte';
    import { formatDate } from '$lib/utils'
    import * as config from '$lib/config'

    export let data;
    
    const pinnedPosts = data.posts.filter(post => post.pinned);
    const projects = data.posts.filter(post => post.type === 'project');
    const funPosts = data.posts.filter(post => post.type === 'fun');
    
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<Hero />


<div class="hero">
    <h3>Recent posts</h3>
</div>

<section>
    <ul class="posts">
        {#each pinnedPosts as post, i}
            <li class="post column-wide">
                <div class="post-content">
                    <img src={post.coverImage} alt={post.title} class="cover-image">
                    <div class="content">
                        <a href={post.slug} class="title">{post.description}</a>
                        <p class="date">{formatDate(post.date)}</p>
                        {#if post.live}
                            <p class="live">View live: <a href={post.live}>{post.live}</a></p>
                        {/if}
                        <div class="tags">
                            {#each post.categories as category}
                                <p class="surface-4">&num;{category}</p>
                            {/each}
                        </div>
                    </div>
                </div>
            </li>
        {/each}
    </ul>
</section>

<div class="hero">
    <h3>Fun/Social goods</h3>
</div>

<section>
    <ul class="posts">
        {#each funPosts as post, i}
            <li class="post column-wide">
                <div class="post-content">
                    <img src={post.coverImage} alt={post.title} class="cover-image">
                    <div class="content">
                        <a href={post.slug} class="title">{post.description}</a>
                        <p class="date">{formatDate(post.date)}</p>
                        <div class="tags">
                            {#each post.categories as category}
                                <p class="surface-4">&num;{category}</p>
                            {/each}
                        </div>
                    </div>
                </div>
            </li>
        {/each}
    </ul>
</section>

<div class="hero">
    <h3>Selected Projects</h3>
    <em>Collection of entries, weaved together by a common theme.</em>
</div>

<section>
    <ul class="posts">
        {#each projects as project, i}
            <li class="post column-wide">
                <div class="project-content">
                    <h4>
                        <a class="title" href={project.slug}>{project.title}</a> <p class="status">Status: {project.status}</p>
                    </h4>
                    <img src={project.coverImage} alt="hello-research-group" class="cover-image" style="margin-top:1rem; margin-bottom:1rem">
                    <p>
                        <a href={project.source} style="text-decoration: underline; text-underline-offset: .2rem;">Source</a> 
                        {#if project.extraSource !== undefined}
                            (<a href={project.extraSource} style="text-decoration: underline; text-underline-offset: .2rem;">Source 2</a>)
                        {/if}
                        ·  {project.description}
                    </p>
                </div>
            </li>
        {/each}
        
    </ul>
</section>

<style>

    .posts {
        padding: 0;        
    }

    .post {
        padding: var(--size-5) 0;
        margin-bottom: 0.25rem;
        box-sizing: border-box;
    }

    .post:not(:last-child) {
        border-bottom: 1px solid var(--border);
        padding-bottom: var(--size-7);
    }

    .post-content {
        display: flex;
        /* max-width: 1200px; */
        /* margin-left: 10px; */
        padding: 0 var(--size-10);
    }

    .cover-image {
        width: 250px;
        height: 150px;
        object-fit: cover;
        border-radius: 0px;
        border: 1px solid var(--border);
        margin-right: var(--size-5);
    }

    .project-content {
        flex: 1;
        padding: 0 var(--size-10);
    }

    .date {
        color: var(--text-3-dark);
        font-size: var(--font-size-fluid-2);
        margin-bottom: var(--size-1);
    }
    
    .live {
        color: var(--text-3-dark);
        font-size: var(--font-size-fluid-3);
        margin-bottom: var(--size-2);
    }

    .tags {
        margin-top: var(--size-1);
    }

    .tags > * {
        font-size: var(--font-size-fluid-3);
        display: inline-block;
        padding: var(--size-1) var(--size-3);
        border: 1px solid var(--border);
        border-radius: var(--radius-round);
        margin: var(--size-1) var(--size-2);
    }

    .hero {
        display: flex;
        flex-direction: column;
        align-items: left;
        margin: 0rem 0 2rem;
        text-align: left;
    }

    .hero h3 {
        margin: 2rem 2rem 0rem;
        font-size: 1.7vw;
        font-weight: 300;
        line-height: 1;
        background: linear-gradient(90deg, #ebc7a3 0%, #87bd8b 100%);
        -webkit-background-clip: text;
        background-clip: text;
    }

    h4 {
		font-size: 1.25em;
		line-height: 1.25;
    }
    
    em {
        font-size: 1.05em;
        line-height: 1.25;
        margin: 0.3rem 2rem 0rem;
    }

    .status {
		font-size: var(--font-size-fluid-3);
		display: inline-block; /* Ensure the tag is only as wide as its content */
		padding: var(--size-1) var(--size-3);
		border: 1px solid var(--border);
		border-radius: var(--radius-round);
		margin: var(--size-2); 
	}
    

    /* On small screens, hide the nav and show the burger */
    @media screen and (max-width: 767px) {

        .post {
            margin: 0 auto;
            box-sizing: border-box;
            margin-bottom: 0.25rem;
            padding: var(--size-5) 0;
        }
        
        .hero h3 {
            margin: 2rem 0rem 0rem;
            font-size: 5.5vw;
        }

        em {
            margin: 0.3rem 0rem 0rem;
            font-size: 3vw;
        }

        .post-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 0 1rem; /* Add some padding to the post content */
            width: 100%;
        }

        .cover-image {
            width: 100%;
            margin: 0 0 20px 0;
        }

        .content {
            width: 100%; /* Ensure the content takes full width */
        }
    }
</style>
