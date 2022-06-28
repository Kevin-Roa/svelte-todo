import { writable } from 'svelte/store';

export type Todo = {
	id: number;
	name: string;
	desc: string;
	completed: boolean;
};

export const todos = writable([] as Todo[]);
