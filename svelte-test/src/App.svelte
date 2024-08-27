<script>
	export let name;
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
</script>

<Header />

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

<Footer />

<style>
	/* BANNER */
	.banner{
		width: 100%;
		height: 800px;
		background: #814d3b;
	}
	.banner-container{ display: flex;height: 100%; }
	.banner-img{
		width: 50%;
		background-image: url(https://banibakery.com/images/mint_cake.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.banner .bannerTxt{
		color: #fff;
		background: #814d3b;
		width: 50%;
		padding: 0 1.5rem 0 3.3rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.bannerTxt h1{
		font-size: 3.75rem;
		line-height: 1;
		font-family: 'DM Serif Text', serif;
		margin-bottom: 1rem;
	}
	.bannerTxt p{ font-size: 1.15rem; }
	.banner-btn{
		display: block;
		text-decoration: none;
		text-align: center;
		color: #FFF;
		font-weight: 700;
		font-size: 1.1rem;
		background-color: #F7ACB8;
		border: 2px solid #F7ACB8;
		border-radius: 30px;
		margin-top: 1rem;
		width: 250px;
		padding: 13px 0;
		transition: all 0.3s ease-in;
	}
	.banner-btn:hover{ background-color: transparent; }
	.banner-btn:active{ transform: scale(0.95); }
	/* INTRODUCTION */
	#intro{ color: #814d3b;margin-top: 2.5rem;margin-bottom: 2.5rem; }
	.introSections-styles{
		height: 850px;
		position: relative;
		display: flex;
		justify-content: space-between;
	}
	.col{ width: 50%; }
	#portrait-img{ object-position: left; }
	.imgHeight-50{ height: 50%; }
	.lessSugar-rightCol,
	.sweet-leftCol{ display: flex;flex-direction: column;justify-content: flex-end; }
	.secOneTxt, .secThreeTxt{
		top: 32.5%;
		left: 37.5%;
		width: 25%;
		height: 35%;
		position: absolute;
		box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2);
	}
	.secOneTxt{ background-color: #f7f0eb;color: #814d3b; }
	.theme-rightCol{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-left: 1rem;
	}
	.secTwoTxt{
		width: 60%;
		height: 35%;
		background-color: #F7ACB8;
		color: #fff;
		margin-bottom: 3rem;
	}
	.three-images{ width: 85%;display: flex;justify-content: space-between; }
	.three-images .cake-samples{ width: 30%;opacity: 1;transition: 0.5s; }
	.three-images .cake-samples:hover{ opacity: 0.6;transition: all 0.3s ease-in; }
	.secThreeTxt{ background-color: #814d3b;color: #FFF; }
	.swtBtn{
		margin: 1rem auto 0 auto;
		border-radius: 30px;
		background-color: #F7ACB8;
		color: #fff;
		font-weight: 600;
		border: 0;
		width: 80%;
		padding: 0.7rem 0;
		font-size: 0.9rem;
		transition: all 0.5s;
	}
	.swtBtn:hover{
		cursor: pointer;
		color: #814d3b;
		background-color: #E1C5AC;
		transition: all 0.2s ease-in;
	}
	.swtBtn:active{ transform: scale(0.95); }
	#modal{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
		z-index: 5;
		visibility: hidden;
		transition: all 0.5s;
		overflow-y: scroll;
		background-color: rgba(225,197,172,0.95);
	}
	#modal #modal-content{
		top: 110%;
		left: 0;
		width: 45%;
		padding: 2rem 0;
		margin: 0 auto;
		text-align: center;
		transition: all 0.3s;
	}
	#modal #modal-content ul li{ margin-bottom: 12px;color: #814d3b;font-size: 1.2rem; }
	#modal #modal-content li h3{ margin-bottom: 1rem; }
	/* GETTING STARTED */
	#howItWorks{ background-color: #814d3b; }
	.steps{ color: #fff;padding: 3rem 0; }
	.steps h2{ margin-bottom: 1.25rem; }
	.steps h5{ margin-bottom: 7px;font-size: 1.2rem; }
	.steps p{ line-height: 1.35; }
</style>