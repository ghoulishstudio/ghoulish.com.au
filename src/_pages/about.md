---
title: About Us
layout: base.njk
permalink: /about/
---

<style>
section { 
	padding-block: 3em;
	h1 { color: var(--green); }
	strong { color: var(--pink); }
	li { background: transparent; }
}

#about { 
	p { font-size: 1.2em; }
	> * { margin: 0.5rem; }
}


.staffList {
	display: flex;
	flex-flow: row wrap;
	position: relative;
}

.staffList li {
	display: flex;
	flex-flow: column;
	position: relative;
	width: 33.3%;
}

.portrait {
	transition: transform 0.2s;
}

.portrait:hover {
	transform: scale(1.05);
}

.staffPlate {
	margin-inline: 1em;
	margin-block: 0 2em;
	padding: 2em;
	background: url("../img/backgrounds/panel-pink.webp");
	background-size: 100% 100%;
	color: var(--black);
	display: flex;
	flex-flow: column;
	flex-grow: 1;

	h3 { margin-top: 0; font-family: var(--headingText); background: var(--black); color: var(--green); width: fit-content;}
	p { font-size: 1.2em; margin: 0; background: none; color: var(--black); }
}

@media (max-width: 600px) { 
	.staffList li {
		width: 100%;
	} 
}



</style>

<section class="dark columns">

## ABOUT US

<div id="about">
	<h1>Ghoulish is a new creative studio based in Naarm/Melbourne, in Australia.</h1>
	
	Right now, we're working hard on the studio's first commercial project, **Parasensor**.

	As a creative practice and studio, our core values are:<br>**Equity**, **Creative Diversity**, and **Creative Innovation**.

	Our goal is to create sustainable, equitable employment for fresh voices in the local industry, and to develop new design methodologies and approaches to game development.
</div>
</section>

<section class="bg_3 columns">

<div>

## MEET THE GHOULS

Ghoulish's creative team is a small group of captive artists, who live in eternal servitude to an unnamed and unknowable evil.

</div>

<ul class="staffList">{% for nick,person in people %}
	<li>
		<img class="portrait" src="../img/team/{{ nick }}.webp" alt="{{ nick }} portrait">
		<div class="staffPlate">
			<h3>{{ person.name }}</h3>
			<p>{{ person.role }}</p>{% if person.link %}<div class="staffLink"><a href="{{ person.link }}"><i class="fa-solid fa-web"></i></a></div>{% endif %}
		</div></li>{% endfor %}
</ul>
</section>