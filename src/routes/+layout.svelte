
<script>
    import NavBar from "./navbar.svelte";
    import Footer from "./footer.svelte";
    import PageTransition from './transition.svelte'
    import '../app.css'
    
    import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	export let data
</script>

<div class="app">
    <NavBar />

    <main>
        <div class="content">
            <PageTransition url={data.url}>
                <slot />
            </PageTransition>
        </div>
    </main>
    
    <Footer />
</div>


<style>

    .app {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
    }
    

    /* Hero full width or with some padding */
    .content {
        flex: 1;
        /* padding: 1rem; */
    }

    @media only screen and (max-width: 767px) {
        /* Hero full width or with some padding on small screen */
        .content {
            /* padding: 1rem 1.5rem; */
        }
    }

    
</style>
