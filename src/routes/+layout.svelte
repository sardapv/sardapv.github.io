<script>
	import NavLink from 'components/nav-link.svelte';
	import '../app.css';
</script>

<div class="h-full w-full flex flex-col">
	<aside class="flex justify-between px-4 items-center">
		<a class="flex items-center" href="/">
			<img src="/images/logo.svg" alt="logo" class="h-10 sm:h-12 sm:mr-2" />
			<span class="font-semibold text-2xl text-sky-500 hidden sm:block">Pranav Sarda</span>
		</a>
		<nav class="h-16 flex items-center gap-x-4 text-sm">
			<NavLink route="">About</NavLink>
			<NavLink route="">Experience</NavLink>
			<NavLink route="">Projects</NavLink>
			<a
				href="/contact"
				class="font-medium text-pink-600 hover:text-purple-700 transition-all ease-in duration-200"
				>Contact</a
			>
		</nav>
	</aside>
	<div class="flex-grow">
		<slot><!-- optional fallback --></slot>
	</div>
	<footer class="h-10 bg-zinc-100 text-xs grid place-content-center text-zinc-600">
		Made with Svelte, TailwindCSS & Custom Graphics ❤️
	</footer>
</div>
