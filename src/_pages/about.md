---
title: About Us
layout: base.njk
permalink: /about/
---

<section class="dark quote">

## ABOUT US

<div class="about">
	<p class="bigger"><span class="ghoul">Ghoulish</span> is a new creative studio based in Naarm/Melbourne, in Australia.</p>
	
	Right now, we're working hard on the studio's first commercial project.

	As a creative practice and studio, our core values are:<br>Equity, Creative Diversity, and Creative Innovation.

	Our goal is to create sustainable, equitable employment for fresh voices in the local industry, and to develop new design methodologies and approaches to game development.

</div>
</section>

<section class="dark">

## THE TEAM

<ul class="staffList">
	{% for nick,person in people %}
	<li>
		<img class="portrait" src="/img/team/{{ nick }}.avif" alt="{{ nick }} portrait">
		<div class="staffPlate">
			<b>{{ person.name }}</b>
			<i>{{ person.role }}</i>
			{% if person.link %}
				<div class="staffLink"><a href="{{ person.link }}"><i class="fa-solid fa-web"></i></a></div>
			{% endif %}
		</div>
	</li>
	{% endfor %}
</ul>
</section>