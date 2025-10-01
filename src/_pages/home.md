---
title: Home
permalink: /
---

<style>
	header { position: absolute; background: transparent; }
	#headerLogo { fill: var(--green); }

	nav.mobile a { color: var(--pink); }
	nav.mobile a:active { color: var(--green); }
</style>

<section id="hero" class="dark">
	<img id="heroLogo" src="../img/parasensor_ribbons.webp">
	<a href="{{site.link.steam}}" target="_blank"><button class="action"><i class="fa-brands fa-steam"></i> Wishlist on Steam</button></a>
</section>

<section id="blurb" class="dark quote">
	<p style="font-size:3rem; align-self: start; color:var(--green);">“</p>
	<p>Parasensor is a story-rich, non-linear horror game with mechanics involving investigation, conversation, and environmental puzzle solving.</p>
	<p style="font-size:3rem; align-self: end; color:var(--green);">„</p>
</section>

<img class="divider" src="../img/stickers/eye.svg" width="100px">

<section id="trailer" class="dark">
	<img src="../img/stickers/side1.png" style="width: 200px; left: 5%; transform:rotate(-10deg);">
	<img src="../img/stickers/side2.png" style="width: 200px; right:5%; transform: rotate(5deg) translateY(3em);">
	<img src="../img/stickers/butterfly.png" style="right: 12%; width: 150px; transform: rotate(10deg) translateY(-3em);">
	<img src="../img/stickers/flame.png" style="left:5%; bottom:5%; top: unset; width: 500px; ">
	<img src="../img/stickers/slime_2.png" style="width: 200px; left: 15%;">
	<h2>Watch our latest trailer:</h2>
	<div class="video">
		<iframe frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="Parasensor - Announce Trailer (WISHLIST NOW!)" width="100%" height="100%" src="https://www.youtube.com/embed/74yOtFSqHYM?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.ghoulish.com.au&amp;playsinline=1&amp;enablejsapi=1&amp;"></iframe>
	</div>
</section>

<section id="who-are-we" class="half bg_3">
	<h2>Who are we?</h2>
	<p>Ghoulish is a brand spankin' new videogame studio based in Naarm/Melbourne, Australia!</p>
	<p>We reckon we're pretty cool.</p>
	<p>Find out more on our <a href="/about/">about page</a>!</p>
	<img src="../img/stickers/ghoulish.png" width="300px">
</section>

<section id="newsletter" class=" dark half">
	
	{% include "newsletter_form.njk" %}
</section>

<section id="acknowledgement">
	<p>Ghoulish operates on the unceded lands of the Boon Wurrung and Woiwurrung peoples of the Kulin Nation. We acknowledge the Traditional Owners of Country throughout Victoria and pay our respects to their Elders, past and present.<br><b>Always was, always will be.</b></p>
</section>