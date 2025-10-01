---
title: Contact
permalink: /contact/
---

<style>
	section { 
		padding-block: 3em; 
		text-align: center;

		> * { margin-inline: auto; }

		.divider { margin-block: 2em; }
	}

	#contact {

		h1 { background: var(--black); width: fit-content;}
		p { max-width: 60ch; margin-inline: auto; }

	}

	form { 

		background: var(--green); 
		padding: 2em;
		margin: 1em auto;
		max-width: 700px;
		display: flex;
		flex-flow: column;

		h1 { color: var(--black); }

		button { 
			align-self: end;
			border: none; 
			background: var(--pink); 
			padding: 1em; 
			font-family: var(--headingText);
			font-size: 1.5em;
			margin-left: auto;
			min-width: 10ch;

			&:hover { 
				cursor: pointer;
				background: var(--black);
				color: var(--pink);
			}

			&:active { transform: translateY(4px); }
		}

		.form-group { 
			textarea, input { 
				font-family: var(--bodyText);
				font-size: 16px;
				width: 100%; 
				margin-block: .5em;
				border: none;
				background-color: var(--white);
				padding: 1em;
			}
		}
	}

	}
</style>

<section id="contact" class="bg_3">

# Want to contact us?

Feel free to get in touch with us any time!

For media or business inquiries, please contact Mickey directly at:  

<a href="{{ site.link.email}}">mickey[at]ghoulish.com.au</a>
</section>

<section id="form" class="dark">
<img class="divider" src="../img/stickers/eye.svg" width="100px">

  <form target="_blank" action="https://formsubmit.co/your@email.com" method="POST">
  	<h1>Contact Form</h1>
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Name (required)" required>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address (required)" required>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Send</button>
  </form>

</section>
