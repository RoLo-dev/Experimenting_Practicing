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

<section id="special">  <!-- This is for announcements -->
	<div class="wrapper specialTxt">
		<div class="special-topRow">
			<div class="store-info">
				<h2>BAKERY INFO</h2>

				<!-- <h4 style="color: red;">BAKERY IS TEMPORARILY CLOSED</h4>
				<h4 style="color: red;">WILL RE-OPEN JANUARY 8, 2024</h4> -->

				<h3 id="current-storeHours"></h3>

				<a style="display: block;margin-bottom: 1rem;width: 350px;" href="https://goo.gl/maps/XsePsz1xZJ2xge2i8">7561 Center Ave #7,<br />Huntington Beach, CA 92647</a>

				<p>Phone: <a href="tel:7142495911">(714) 249 - 5911</a></p>
				<p>Email: <a href="mailto:banibakery@gmail.com">banibakery@gmail.com</a></p>

				<h4 style="margin: 1.5rem 0 8px 0;">BAKERY HOURS</h4>
				<h4 style="margin-bottom: 5px;">Appointment Only - No Walk-Ins</h4>
				<ul>
					<li class="sunday"><span>Sunday:</span><span> 9am - 4pm</span></li>
					<li class="monday"><span>Monday:</span><span> CLOSED</span></li>
					<li class="tuesday"><span>Tuesday:</span><span> CLOSED</span></li>
					<li class="wednesday"><span>Wednesday:</span><span> 10am - 6pm</span></li>
					<li class="thursday"><span>Thursday:</span><span> 10am - 6pm</span></li>
					<li class="friday"><span>Friday:</span><span> 10am - 6pm</span></li>
					<li class="saturday"><span>Saturday:</span><span> 9am - 4pm</span></li>
				</ul>
				<!-- <p>Phone: <a href="tel:6572316211">(657) 231 - 6211</a></p> -->
				<!-- <p>* Email and phone call responses are slow on weekends due to fulfilling orders. Responses will get returned until Monday or Tuesday.</p>
				<p>* If no email response after 3 days, please reach out to again as we may have missed your email by accident.</p>
				<p>We appreciate your patience.</p> -->

			</div>
			<div class="map-one">
				<img src="https://banibakery.com/images/oldworld_map.png" alt="Map" class="pics">
			</div>
		</div>
	</div>
</section>
<section id="intro">
	<div class="wrapper">
		<div id="lessSugar" class="introSections-styles">  <!-- Section One -->
			<div class="lessSugar-leftCol col">
				<img src="https://banibakery.com/images/image-one.jpg" alt="tropical cake" class="pics imgHeight-50">
			</div>
			<div class="lessSugar-rightCol col">
				<div class="text-content introTxtStyle">
					<h3 class="introTitle">Less sugar, healthy you</h3>
					<p>Our cakes, pastries and creams contain a low amount of sugar and we always provide fresh fruit</p>
				</div>
				<img src="https://banibakery.com/images/image-two.jpg" alt="mini cupcakes" class="introPic-gone pics imgHeight-50">
			</div>
			<div class="secOneTxt introTxtStyle">
				<h3 class="introTitle">Less sugar, healthy you</h3>
				<p>Our cakes, pastries and creams contain a low amount of sugar and we always provide fresh fruit</p>
			</div>
		</div>

		<div id="themeCakes" class="introSections-styles">  <!-- Section Two -->
			<div class="theme-leftCol col">
				<img loading="lazy" id="portrait-img" src="https://banibakery.com/images/banner_10.21.2022.jpg" alt="Princess theme cake" class="pics">
			</div>
			<div class="theme-rightCol col">
				<div class="secTwoTxt introTxtStyle">
					<h3 class="introTitle">Customize your cake</h3>
					<p>Get creative with your cake, make it unique, provide a big surprise so you can leave behind a big impression and create memorable moments</p>
				</div>
				<div class="three-images">
					<div class="cake-samples">
						<a loading="lazy" href="https://banibakery.com/images/charac1.jpg" data-lightbox="introduction">
							<img src="https://banibakery.com/images/charac1.jpg" alt="custom cake" class="pics">
						</a>
					</div>
					<div class="cake-samples">
						<a loading="lazy" href="https://banibakery.com/images/charac2.jpg" data-lightbox="introduction">
							<img src="https://banibakery.com/images/charac2.jpg" alt="custom cake" class="pics">
						</a>
					</div>
					<div class="cake-samples">
						<a loading="lazy" href="https://banibakery.com/images/charac3.jpg" data-lightbox="introduction">
							<img src="https://banibakery.com/images/charac3.jpg" alt="custom cake" class="pics">
						</a>
					</div>
				</div>
			</div>
		</div>

		<div id="sweetTable" class="introSections-styles">  <!-- Section Three -->
			<div class="sweet-leftCol col">
				<div class="text-content introTxtStyle">
					<h3 class="introTitle">Need a sweet table?</h3>
					<p>We have a wide variety of pastries that you can also custom design for your event. Stands and platters are available for rent.</p>
					<button id="swtBtn-mobile" class="swtBtn">Check our Pastries</button>
				</div>
				<img loading="lazy" src="https://banibakery.com/images/sweet_table02.jpg" alt="Snow theme sweet table" class="pics imgHeight-50">
			</div>
			<div class="sweet-rightCol col">
				<img loading="lazy" src="https://banibakery.com/images/16.jpg" alt="Sea theme cake pops" class="pics imgHeight-50">
			</div>
			<div class="secThreeTxt introTxtStyle">
				<h3 class="introTitle">Need a sweet table?</h3>
				<p>We have a wide variety of pastries that you can also custom design for your event. Stands and platters are available for rent.</p>
				<button id="swtBtn-desktop" class="swtBtn swtBtn-desktop">Check our Pastries</button>
			</div>

			<div id="modal">
				<div id="modal-content">
					<ul>
						<li><h3>Sweet Table Items</h3></li>
						<li>Mini Cupcakes</li>
						<li>Cupcakes</li>
						<li>Cake Pops</li>
						<li>Oreo Pops</li>
						<li>Cake ball</li>
						<li>Lemon Tart</li>
						<li>Key lime Tart</li>
						<li>Strawberry Tart</li>
						<li>Macarons</li>
						<li>Brownie Bites</li>
						<li>Rice Krispy Treats</li>
						<li>Canolli</li>
						<li>Choux Small</li>
						<li>Pretzel Sticks</li>
						<li>Pina Colada Shooters</li>
						<li>Tiramisu Cups</li>
						<li>Creme Brulee</li>
						<li>Mini Fruitarts</li>
						<li>Cookie Cream Shooters</li>
						<li>Strawberry Shooters</li>
						<li>Banana Cream Pie</li>
						<li>Red Forest Cup</li>
						<li>Key lime Parfait</li>
						<li>Tropical Cups</li>
						<li>Mini Cheesecake</li>
						<li>Mexican Wedding Cookies</li>
						<li>Mini Mexican Wedding Cookies</li>
						<li>Oatmeal Raisin Cookies</li>
						<li>Peanut Butter Cookies</li>
						<li>Chocolate Chip Cookies</li>
						<li>Chocolate Dipped Strawberries</li>
						<li class="boldTxt">Additional charge of $0.50 each item for bags and bows</li>
						<li class="boldTxt">Minimum 1 dozen per item</li>
						<li class="boldTxt">Orders have to be placed 3 days in advance</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="howItWorks">
	<div class="smaller-wrapper steps">
		<h2>GET STARTED</h2>
		<h5>No Walk-Ins</h5>
		<p>Please call or email us to schedule an appointment/availability for in person inquiries.</p>
		<br />
		<h5>Placing your Order</h5>
		<p>Everything is made to order so we ask to place your orders <span class="boldTxt">7 days in advance</span>. We also ask to provide images of the cake design you'd like and the amount of servings/guests to determine the size of the cake and price.</p>
		<br>
		<h5>Pricing</h5>
		<p>Pricing is based on the design of the cake and if any specialty fillings selected.</p>
		<br>
		<h5>Deposit</h5>
		<p>We require a 50% deposit of the total amount of the order for all orders. Any order that has no deposit will be put on hold, no deposit no cake. Deposits can be placed using Venmo or Zelle.</p>
		<br>
		<h5>Last Minute Orders</h5>
		<p>A rush fee will be added and the order will only be accepted if we are able to squeeze it in our schedule and if the cake design is not complex to meet the quick turnaround time.</p>
		<br>
		<h5>Cake Tastings</h5>
		<p>Tastings are by appointment only, it's a one hour session with our head decorator and it's $28 for two people.</p>
	</div>

</section>
<section id="flavorFill">
	<div class="wrapper list-container">
		<div id="flavorFill-desktop" class="secTitle">
			<h2>FLAVORS FILLINGS</h2>
		</div>
		<div id="flavorFill-mobile">
			<h2>FLAVORS & FILLINGS</h2>
		</div>

		<div id="listBox" class="list">
			<div id="flavor-title" class="listTitle-btn">
				<h3>CAKE FLAVORS</h3>
			</div>
			<ul id="flavor-list">
				<li>
					<h3 class="listTitle">Cake</h3>
				</li>
				<li>Vanilla</li>
				<li>Chocolate</li>
				<li>Marble</li>
				<li>Strawberry</li>
				<li>Lemon</li>
				<li>Peanut Butter (contains tree nuts)</li>
				<li>Lemon Blueberry (contains real fruits)</li>
				<li>Almond (contains tree nuts)</li>
				<li>Funfetti</li>
				<li>Cookies & Cream</li>
				<li>Yellow chocolate chips</li>
				<li>Hazelnut swirls (contains tree nuts)</li>
				<li>Matcha swirls</li>
				<li>Blueberry swirls (contains real fruits)</li>
				<li><span class="boldTxt">Red Velvet *</span></li>
				<li><span class="boldTxt">Coconut *</span></li>
				<li><span class="boldTxt">Banana *</span> (with banana chunks)</li>
				<li><span class="boldTxt">Carrot *</span> (with carrot shavings)</li>
				<li><span class="boldTxt">Pandan *</span></li>
			</ul>
		</div>
		<div id="listBox2" class="list">
			<div id="filling-title" class="listTitle-btn">
				<h3>FILLINGS</h3>
			</div>
			<ul id="filling-list">
				<li>
					<h3 class="listTitle">Fillings</h3>
				</li>
				<!-- <li>Buttercream</li> -->
				<li>Lemon mousse</li>
				<li>Whipped cream <span class="boldTxt">***</span></li>
				<li>Pineapple cream (contains real fruit)</li>
				<li>Chocolate buttercream <span class="boldTxt">**</span></li>
				<li>Tiramisu cream</li>
				<li>Strawberry mousse</li>
				<li>Raspberry mousse</li>
				<li>Mango mousse</li>
				<li>Bailey's buttercream</li>
				<li>Cappuccino mousse</li>
				<li>Chocolate mousse</li>
				<!-- <li>Yogurt mousse</li> -->
				<li>Coconut cream</li>
				<li>Cookies & Cream</li>
				<li>Mocha buttercream <span class="boldTxt">**</span></li>
				<li>Passion fruit cream</li>
				<li>Green tea cream</li>
				<li>Peanut butter cream (contains tree nuts)</li>
				<li>Hazelnut buttercream (contains tree nuts) <span class="boldTxt">**</span></li>
				<li>Banana cream (contains real fruit)</li>
				<li><span class="boldTxt">Fresh fruit *</span> (contains real fruit)</li>
				<li><span class="boldTxt">Cream cheese *</span></li>
				<li><span class="boldTxt">Chocolate ganache *</span></li>
				<li><span class="boldTxt">Durian cream *</span> (contains real fruit)</li>
				<li><span class="boldTxt">Guava cream *</span> (contains real fruit)</li>
			</ul>
		</div>
		<div class="warning">
			<p><span class="boldTxt">*</span> Additional charge for special flavor or filling.</p>
			<p><span class="boldTxt">**</span> Italian buttercream made with real butter and less sugar, not so sweet</p>
			<p><span class="boldTxt">***</span> Non-dairy, airy cream, very light, and sweet</p>
			<p><span class="boldTxt">**</span> Heavily colored buttercream like Black, Red & Navy Blue, stain your teeth and flavor gets changed <span class="boldTxt">**</span></p>
		</div>
	</div>
</section>

<section id="about" class="wrapper">
	<div class="baniImg">
		<img src="https://banibakery.com/images/portrait_two.jpg" loading="lazy" alt="Bani Dao picture" class="pics">
	</div>
	<div class="aboutTxt">
		<h2>ABOUT</h2>
		<p>My name is Bani Dao, I started cake decorating in 2009, searching on YouTube for tutorials. After 2 years of being a home baker making cakes for family and friends, I decided to take it further by turning it to a profession. In 2011, I graduated from Le Cordon Bleu in Baking and Patisserie. Since then, I've been working in several bakeries as a pastry cook and cake decorator to gain real-life experience and knowledge about my field. From hobby to business, I continue baking cakes, pastries and now catering to the Orange County residents. Cake design has become my passion in life, so I always keep up to date with new and upcoming trends and try out new techniques to continue to improve and refine my skills.</p>
	</div>
</section>

<Footer />

<style>
	/* Holidays or Special events */
	#special{margin: 2rem 0;color: #814d3b; }
	.special-topRow{display: flex;justify-content: space-between;}
	.store-info{width: 45%;}
	.store-info h3{margin-bottom: 1.15rem;font-size: 1.25rem;font-weight: 800;}
	.specialTxt h2{ font-size:1.5rem;margin-bottom: 1rem; }
	.specialTxt ul{ margin-bottom: 1rem;}
	.specialTxt ul li{
		margin-bottom: 5px;
		display: flex;
		justify-content: space-between;
		width:350px;
	}
	.specialTxt ul li:last-child{ margin-bottom: 0; }
	.special-topRow p{margin-bottom: 10px;}
	.special-topRow p:last-of-type{margin-bottom: 0;}
	.special-topRow a{color: #814d3b;}
	.directions-link{display: block;margin-bottom: 1rem;}
	.map-one{width: 50%;height: 500px;}
	.map-one iframe{height: 100%;width: 100%;}

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
	/* CAKE & FILLINGS */
	.listTitle-btn, #flavorFill-mobile{ display: none; }
	#flavorFill{
		width: 100%;
		height: auto;
		color: #fff;
		background-color: #f7f0eb;
		/* background-color: #E1C5AC; */
	}
	.list-container{
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		padding: 3rem 0;
	}
	.list-container .list{
		width: 40%;
		height: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.list .listTitle{ margin-bottom: 1rem;text-transform: uppercase; }
	.list ul li{ margin-bottom: 7px;color: #814d3b; }
	.list-container .secTitle{ color: #814d3b;width: 100%;margin-bottom: 1rem; }
	.secTitle h2{text-align: center;}
	.list-container .warning{
		width: 100%;
		color: #814d3b;
		text-align: center;
		margin-top: 5rem;
		font-size: 1.15rem;
		font-weight: 500;
	}
	.warning p{ margin-bottom: 5px; }
	.warning p:last-child{ margin-bottom: 0; }
	/* ABOUT */
	#about{
		height: auto;
		display: flex;
		justify-content: space-between;
		padding: 2rem 0;
	}
	#about .baniImg{ width: 45%; }
	#about .aboutTxt{ width: 48%; }
	#about .baniImg{ padding: 2rem 0; }
	/* #about .baniImg img{ object-position: top; } */
	#about .baniImg img{ object-fit: contain; }
	#about .aboutTxt{
		color: #814d3b;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
	}
	#about .aboutTxt h2{ color: #814d3b;margin-bottom: 1.25rem; }
	#about .aboutTxt p{ line-height: 1.5; }
</style>