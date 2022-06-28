<script lang="ts">
	import TodoItem from './TodoItem.svelte';
	import { todos } from './todos';
	import type { Todo } from './todos';

	let name = '';
	let desc = '';

	let addTodo = () => {
		todos.update((todos) => [
			...todos,
			{
				id: Date.now(),
				name: name,
				desc: desc,
				completed: false
			} as Todo
		]);

		name = '';
		desc = '';
	};
</script>

<div>
	<h1>Todos</h1>
	<form on:submit|preventDefault={addTodo}>
		<label for="todoName">Name</label>
		<input id="todoName" type="text" bind:value={name} />
		<label for="todoDesc">Description</label>
		<input id="todoDesc" type="text" bind:value={desc} />
		<div style="text-align: center;">
			<button type="submit">Add</button>
		</div>
	</form>

	<div class="todos">
		{#each $todos as todo, i (todo.id)}
			<TodoItem {todo} {i} />
		{/each}
	</div>
</div>

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 2rem auto;
		text-align: center;
	}
	div {
		width: 400px;
		margin: 0 auto;
	}
	.todos {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	input[type='text'],
	select {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}
	button {
		font-family: inherit;
		font-size: inherit;
		padding: 1em 2em;
		color: #ff3e00;
		background-color: rgba(255, 62, 0, 0.1);
		border-radius: 2em;
		border: 2px solid rgba(255, 62, 0, 0);
		outline: none;
		width: 200px;
		font-variant-numeric: tabular-nums;
		cursor: pointer;
		margin-bottom: 30px;
	}

	button:focus {
		border: 2px solid #ff3e00;
	}

	button:active {
		background-color: rgba(255, 62, 0, 0.2);
	}
</style>
