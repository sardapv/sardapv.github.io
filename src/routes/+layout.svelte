<script lang="ts">
	import NavLink from 'components/nav-link.svelte';
	import '../app.css';
	import Toggle from 'components/toggle.svelte';

	const toggleTheme = (event: CustomEvent<boolean>) => {
		const dark = event.detail;
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};
</script>

<div class="h-full w-full flex flex-col">
	<aside class="flex justify-between px-4 items-center lg:px-24 md:px-10 p-2 z-50">
		<a class="flex items-center" href="/">
			<img src="/images/logo.svg" alt="logo" class="h-10 w-20 sm:h-12 sm:mr-2" />
			<span class="font-semibold text-2xl text-sky-500 hidden sm:block">Pranav Sarda</span>
		</a>

		<nav class="h-16 flex items-center gap-x-4 text-sm">
			<Toggle on:change={toggleTheme} />

			<NavLink route="/about">About</NavLink>
			<NavLink route="/experience">Experience</NavLink>
			<a
				href="/contact"
				class="font-medium text-pink-600 hover:text-purple-700 transition-all ease-in duration-200"
				>Contact</a
			>
		</nav>
	</aside>
	<div class="flex-grow overflow-auto">
		<slot><!-- optional fallback --></slot>
		<footer
			class="h-10 bg-slate-100 dark:bg-[#24262f] text-xs grid place-content-center text-slate-600 dark:text-slate-400 p-4"
		>
			Made with Svelte, TailwindCSS & Custom Graphics ❤️
		</footer>
	</div>
</div>
