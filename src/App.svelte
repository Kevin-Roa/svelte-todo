<script lang="ts">
	import TodoList from './lib/TodoList.svelte';
</script>

<main>
	<TodoList />
</main>

<style global>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		padding: 1em;
		margin: 0 auto;
	}
</style>
