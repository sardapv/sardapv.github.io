<script lang="ts">
	export let route = '';
</script>

<a
	href={route}
	class="hover:text-sky-500 transition-all ease-in duration-200 font-normal text-slate-800 dark:text-slate-300"
	><slot /></a
>
