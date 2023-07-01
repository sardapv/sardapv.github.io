<script>
	export let src = '';
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a href="#" on:click={() => window.open(src, '_blank')}><slot /></a>

<style lang="scss">
	a {
		position: relative;
		overflow: hidden;
		text-decoration: none;
		color: #0f9bdc;
		&::after {
			content: '';
			background: rgba(14, 165, 233, 0.25);
			position: absolute;
			left: 12px;
			bottom: -3px;
			width: calc(100% - 8px);
			height: calc(100% - 8px);
			z-index: -1;
			transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
		}
		&:hover:after {
			left: 0;
			bottom: -2px;
			width: 100%;
			height: 110%;
		}
	}
</style>
