<script>
    let logoUrl = 'https://banibakery.com/images/bani_logo_hor.svg';
</script>

<header>
    <div class="main-head wrapper">
        <div class="logo">
            <a href="index.html"><img src="{logoUrl}" alt="bakery logo" class="pics"></a>
        </div>
    </div>
</header>

<div id="mobile-nav">
    <ul>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="index.html#sweetTable" class="navLink">Sweet Table</a></li>
        <li><a href="index.html#flavorFill" class="navLink">Flavors & Fillings</a></li>
        <li><a href="index.html#about" class="navLink">About</a></li>
        <li><a href="index.html#contact">Contact</a></li>
        <li><a href="reviews.html">Reviews</a></li>
        <li><a href="terms-conditions.html">Terms & Conditions</a></li>
        <li>
            <a href="https://www.facebook.com/banibakery/" target="_blank"><i class="fab fa-facebook-square"></i></a>

            <a href="https://www.instagram.com/banihouseofcakes/" target="_blank"><i class="fab fa-instagram"></i></a>

            <a href="https://www.yelp.com/biz/bani-bakery-santa-ana" target="_blank"><i class="fab fa-yelp"></i></a>
        </li>
    </ul>
</div>

<style>
    .nav, .text-content{ display: none; }
    header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 5;
        padding: 1rem 0;
    }
    #contact-page, #contact-header{ background-color: #814d3b; }
    .main-head{ display: flex;justify-content: space-between;align-items: center; }
    .logo{ width: 18%; }
    #mobile-nav{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        opacity: 0;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        transform: translate(100%,0);
        background: #814d3b;
        z-index: 4;
        transition: all 0.3s ease-out;
    }
    #mobile-nav.show-nav{ opacity: 0.98;transform: translateY(0); }
    #mobile-nav ul li{ margin-bottom: 1.25rem; }
    #mobile-nav ul li a{ color: #FFF;text-decoration: none;font-size: 2rem; }
    #mobile-nav ul li:last-child{ margin-bottom: 0; }
    #mobile-nav ul li:last-child a{
        display: inline-block;
        margin-right: 2rem;
        font-size: 2rem;
    }
    #mobile-nav ul li:last-child a:last-of-type{margin-right: 0;}
    #mobile-openBtn{
        position: fixed;
        display: block;
        background: #fff;
        top: 20px;
        right: 20px;
        z-index: 15;
        border-radius: 35px;
        padding: 1.75rem 0.95rem;
        box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.2);
    }
    #mobile-openBtn:hover{ cursor: pointer; }
    #mobile-openBtn:active{ transform: scale(0.95); }
    .openIcon{ display: block;position: relative; }
    .openIcon,
    .openIcon::before,
    .openIcon::after{
        width: 1.75rem;
        height: 3px;
        background: #F7ACBB;
        border-radius: 30px;
        transition: transform 300ms ease-in-out, opacity 200ms linear;
    }
    .openIcon::before,
    .openIcon::after{ content: '';position: absolute;left: 0; }
    .openIcon::before{bottom: 9px;}
    .openIcon::after{top: 9px;}
    .animate{ transform: rotate(45deg); }
    .animate::before{ opacity: 0; }
    .animate::after{ transform: rotate(90deg) translate(-9px); }
</style>