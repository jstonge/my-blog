export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	status: string,
	slug: string
	description: string
	date: string
	source: string
	extraSource: string
	categories: Categories[]
	published: boolean
	pinned: boolean
	type: string
	coverImage: string
}
