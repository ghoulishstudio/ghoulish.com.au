---
title: Presskit
permalink: /presskit/
---

<img id="heroLogo" src="/img/parasensor_logo.avif">

<div id="presskit">
	{% renderFile "./src/_includes/presskit.md" %}
</div>

<section class="dark">
<h2>Announcement Trailer</h2>
<div class="video">
	<iframe frameborder="0" allowfullscreen="" referrerpolicy="strict-origin-when-cross-origin" title="Parasensor - Announce Trailer (WISHLIST NOW!)" width="100%" height="100%" src="https://www.youtube.com/embed/XU68Fm8D6Og?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.ghoulish.com.au&amp;playsinline=1&amp;enablejsapi=1&amp;"></iframe>
</div>
</section>

<section class="dark">
<h2>Pre-Alpha Screenshots</h2>
<div class="gallery">
	{%- for i in range(0, 6) -%}
		<a href="/img/screenshots/Parasensor_prealpha_screenshot_{{ i }}.png"><img class="screenshot" src="/img/screenshots/Parasensor_prealpha_screenshot_{{i}}.png" loading="lazy"></a>
	{%- endfor -%}
</div>
</section>

<section class="dark">
<h2>Key Art &amp; Logos</h2>
</section>

<section>
<h2>Selected Articles</h2>
</section>

<section class="light">
	<h2>The Team</h2>
	<ul class="gridList">
	{% for nick,person in people %}
		{% if not person.fake %}
		<li>
			<b>{{ person.name }}</b>
			<i>{{ person.role }}</i>
		</li>
		{% endif %}
	{% endfor %}
</ul>