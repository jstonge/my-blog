<script>
	import * as config from '$lib/config'
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
</footer>

<style>
	
	footer {
		margin-top: 3rem;
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
		margin-inline: var(--size-7);
	}

	p {
		color: var(--text-2);
	}
</style>
