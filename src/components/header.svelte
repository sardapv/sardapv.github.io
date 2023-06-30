<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';

	export let gradientMode: 'pink' | 'blue' | 'gray' = 'pink';
	let gradientClass = '';

	const updateClass = () => {
		const classes = {
			blue: 'from-sky-400 to-blue-600',
			pink: 'from-purple-400 to-pink-600',
			gray: 'from-gray-500 to-slate-600'
		};
		gradientClass = classes[gradientMode];
	};

	// Run the initial class update on mount
	onMount(updateClass);

	// Update the class whenever gradientMode changes
	$: {
		updateClass();
	}
</script>

<span
	class={`font-gilroy font-normal text-4xl md:text-7xl break-normal text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}
>
	<slot />
</span>
