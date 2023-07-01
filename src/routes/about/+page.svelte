<script>
	import Link from 'components/link.svelte';
</script>

<div
	class="p-3 flex flex-col items-center h-full mx-[4vw] md:mx-[10vw] 2xl:mx-[20vw] justify-center"
>
	<div class="max-w-2xl lg:max-w-full">
		<div class="grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] gap-12">
			<div class="lg:row-span-2">
				<h1 class="text-4xl font-semibold font-gilroy">
					Hey 👋, I am Pranav. I live in Bengaluru, the Silicon Valley of India 🇮🇳
				</h1>
				<p class="text-sm mt-5 font-normal text-slate-600">
					After graduating in 2018 from <Link
						src="https://en.wikipedia.org/wiki/College_of_Engineering,_Pune">COEP, Pune</Link
					>; I began my career at a product-oriented MNC. Fast forward to 2021, I shifted to
					Bengaluru & I took a detour from full stack development and discovered my true calling in
					frontend. Now, I'm on an epic adventure of crafting pixel-perfect UI designs and obsessing
					over user experience.
					<br /><br />

					I've worked with Angular, Svelte, StencilJs, and my favorite CSS framework, Tailwind. I
					began my career in Java Spring backend and Ionic Cordova app development. At my current
					gig, I am building intuitive dashboards and powerful fintech SDKs that let you integrate
					banking flows with just a few lines of code. I believe in choosing the right tools for
					each project to deliver the best results.

					<br /><br />
					I'm also a newbie content creator on <Link src="https://www.youtube.com/@pranavcodesweb"
						>Youtube</Link
					>, diving into the world of animation. Check out my channel for exciting content.
					Ocassionally I write blogs on <Link src="https://www.youtube.com/@pranavcodesweb"
						>Hashnode</Link
					> as well.

					<br /><br />
					When I'm not busy slaying frontend dragons, I morph into a good husband who knows how to give
					his wife and family the time and attention they deserve. Family is the ultimate superpower,
					you know!
					<br /><br />
					And speaking of superpowers, I'm an unabashed sci-fi movie geek. I go gaga over anything that
					involves time travel. Give me a good old-fashioned paradox, and I'm hooked!

					<br /><br />
					Let's join forces, conquer the web, and spread smiles everywhere!.<br /><Link
						src="/images/meme.jpeg"
						><span class="font-semibold"
							><span class="tracking-widest">...</span>This is the way!"</span
						></Link
					>
				</p>
				<hr class="bg-zinc-300 border-0 h-px my-4" />
				<div class="text-sm font-normal">
					<h1 class="text-3xl font-semibold font-gilroy my-4">Tech I know 👨🏻‍💻</h1>
					<p class="text-slate-600">
						HTML, CSS/SCSS, JavaScript, Typescript , Angular, Sveltekit, StencilJs, Tailwind
					</p>
					<hr class="bg-zinc-300 border-0 h-px my-4" />
					<h1 class="text-3xl font-semibold font-gilroy my-4">Tech I am learning 📚</h1>
					<p class="text-slate-600">React.js, Solid.js</p>
					<hr class="bg-zinc-300 border-0 h-px my-4" />
					<h1 class="text-3xl font-semibold font-gilroy my-4">Non-Tech I am learning 🛸</h1>
					<p class="text-slate-600">3D animation and Tools, AI tools</p>
				</div>
			</div>
			<div class="px-6 pt-4 lg:pt-20 flex justify-center order-first lg:order-last">
				<img
					src="/images/me.jpg"
					alt="me"
					decoding="async"
					class="rounded-2xl rotate-3 object-cover shadow-sm bg-slate-800"
					height="500"
					width="350"
				/>
			</div>
		</div>
	</div>
</div>
