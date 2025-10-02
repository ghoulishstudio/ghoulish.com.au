---
title: Home
permalink: /
---

<style>
	header { position: absolute; background: transparent; }
	#headerLogo { fill: var(--green); }

	nav.mobile a { color: var(--green); }
	nav.mobile a:active { color: var(--pink); }
</style>

<section id="hero" class="dark">
	<img id="heroLogo" src="../img/parasensor_ribbons.webp" alt="Parasensor Logo">
	<a href="{{site.link.steam}}" target="_blank"><button class="action"><i class="fa-brands fa-steam"></i> Wishlist on Steam</button></a>
</section>

<section id="blurb" class="dark quote">
	<p class="quotation-mark" style="align-self: start;">“</p>
	<p>Parasensor is a story-rich, non-linear horror game with mechanics involving investigation, conversation, and environmental puzzle solving.</p>
	<p class="quotation-mark" style="align-self: end;">„</p>
</section>

<img class="divider" src="../img/stickers/eye.svg" alt="" width="100px">

<section id="trailer" class="dark">
	<img src="../img/stickers/side_1.webp" alt="" width="200px" height="514px" style=" left: 5%; transform:rotate(-10deg);">
	<img src="../img/stickers/side_2.webp" width="200px" height="600px" alt="" style="right:5%; transform: rotate(5deg) translateY(3em);">
	<img src="../img/stickers/butterfly.webp" width="150px" height="150px" alt="" style="right: 12%; transform: rotate(10deg) translateY(-3em);">
	<img src="../img/stickers/flame.webp" width="500px" height="269px" alt="" style="left:5%; bottom:5%; top: unset;">
	<img src="../img/stickers/slime_2.webp" width="200px" height="244px" alt="" style="left: 15%;">
	<h2>Watch our latest trailer:</h2>
	<div class="video">
		<lite-youtube videoid="74yOtFSqHYM" playlabel="Play: Parasensor - Announce Trailer (WISHLIST NOW!)"></lite-youtube>
	</div>
</section>

<section id="who-are-we" class="half bg_3">
	<h2>Who are we?</h2>
	<p>Ghoulish is a brand spankin' new videogame studio based in Naarm/Melbourne, Australia!</p>
	<p>We reckon we're pretty cool.</p>
	<p>Find out more on our <a href="/about/">about page</a>!</p>
	<img src="../img/stickers/ghoulish.webp" alt="" width="300px" height="105px">
</section>

<section id="newsletter" class="half bg_4">
	{% include "newsletter_form.njk" %}
</section>

<section id="acknowledgement" class="bg_2">
	<p>Ghoulish operates on the unceded lands of the Boon Wurrung and Woiwurrung peoples of the Kulin Nation. We acknowledge the Traditional Owners of Country throughout Victoria and pay our respects to their Elders, past and present.<br><b>Always was, always will be.</b></p>
</section>