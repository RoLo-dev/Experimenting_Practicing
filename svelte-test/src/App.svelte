<script>
	export let name;
	import Header from "./Header.svelte";
</script>

<Header />
<main>
	<!-- <h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->

	<section class="banner">
        <div class=" banner-container">
            <div class="bannerTxt">
                <div class="text-container">
                    <h1>Custom Cakes<br />Made With Love</h1>
                    <p>We specialize in quality custom cakes and pastries, all freshly made by order. Provide us your cake design ideas and we'll help you bring your cake to life.</p>
                    <a class="banner-btn" href="#howItWorks">Get Started</a>
                </div>
            </div>
            <div class="banner-img"></div>
        </div>
    </section>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>