<script lang="ts">
	import type { Todo } from './todos';
	import { todos } from './todos';

	export let todo: Todo;
	export let i: number;

	const onComplete = () => {
		todos.update((todos) => {
			todos[i].completed = !todos[i].completed;
			return todos;
		});
	};

	const onRemove = () => {
		todos.update((todos) => {
			todos.splice(i, 1);
			return todos;
		});
	};
</script>

<div class="box">
	<div class="info">
		<h3>{todo.name}</h3>
		<p>{todo.desc}</p>
	</div>
	<input type="checkbox" checked={todo.completed} on:click={onComplete} />
	<button on:click={onRemove}>X</button>
</div>

<style>
	.box {
		display: flex;
		flex-direction: row;
		width: 100%;
		border: 1px;
		border-style: solid;
		border-radius: 5px;
		margin: 10px;
	}
	.info {
		width: 80%;
		padding: 15px;
		text-align: left;
		overflow-wrap: break-word;
	}
	h3 {
		font-size: 1.5rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 0;
	}
	p {
		font-size: 1rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 0;
	}
	input {
		cursor: pointer;
		margin: 10px;
	}
	button {
		all: unset;
		margin: 20px;
		cursor: pointer;
	}
</style>
