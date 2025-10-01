---
title: Presskit
permalink: /presskit/
---

<style>
/* PRESSKIT */

section { padding: 2rem; }

#presskit {
	padding: 0;
	display: flex;
	flex-flow: row;
	color: var(--black);
	width: 100%;
}

#factsheet {
	width: 30%;
	background: var(--pink);
	padding: 2rem;

	ul { margin-left: 2em; margin-top: .5em; }
	li { font-family: var(--bodyText); margin-bottom: .5em;} 
	a { font-weight: bold; color: var(--blue);}
}

#description {
	width: 70%;
	background: var(--white);
	padding: 2rem;
	flex-grow: 1;

	h1 { margin-bottom: 1em; }
	p { margin-inline: 0; max-width: 70ch; }
	h3 { font-family: var(--bodyText); }
	h3 + p { margin-left: 2em; }
}

.gallery {
	display: grid;
	grid-template-columns: repeat(3, auto);
	align-items: center;

	column-gap: .8em;
	row-gap: .5em;
	margin: 1em auto;
	max-width: 1000px;
	overflow: clip;

	
	padding: 1em;
}

.gallery a {
	display: flex; 
	align-items: center; 
	justify-items: center; 
	aspect-ratio: 16 / 9;
	height: 100%; 
}

.gallery img { object-fit: contain; height: 100%; background-color: #EDE4D350; }

.screenshot {
	width: 100%;
	transition: transform 0.2s;
}
.screenshot:hover {

	transform: scale(1.05);
}

#articles { 
	display: flex; flex-flow: row wrap; column-gap: 2em;
h1 { width: 100%; }
h2 { margin-bottom: .5em; }
ul { list-style-type: square; margin-left: 1em; font-family: var(--bodyText); }
li { margin-bottom: .5em; font-weight: normal; }
li::marker { color: var(--pink); } 

}

.gridList {
	display: flex;
	flex-flow: row wrap;
}

.gridList li {
	min-width: 30ch;
	flex-basis: calc(50% - 1em);
	padding: 1em;
	margin: .5em;
	padding-left: 2em;
	display: flex;
	flex-flow: column;
	position: relative;
	background-color: var(--white);
	border-radius: 4px;
}

.gridList li::after {
	content:"";
	background: var(--pink);
	color: var(--white);
	font-weight: 800;
	width: 1em;
	text-align: center;
	position: absolute;
	left: 0;
	top: 0;
	border-radius: 4px 0 0 4px;
	height: 100%;
}

@media (max-width: 600px) {
	#presskit { 
		padding: 0; 
		> * { width: 100%; }
		
	}

	#presskit, .quote {
		flex-flow: column;
	}

	.gridList li { flex-basis: 100%; }

	section { padding: 1em; }

	.gallery { 
		padding: 0;
		display: flex;
		flex-flow: column;
		width: 100%;

		.screenshot:hover { transform: none; }
	}
}
</style>

{% renderFile "./src/_includes/presskit.md" %}

<section class="bg_2">
	<h1>The Team</h1>
	<ul class="gridList">
{% for nick,person in people %}{% if not person.fake %}
<li>
	<b>{{ person.name }}</b>
	<i>{{ person.role }}</i>
</li>
{% endif %}{% endfor %}
</ul>