import { fetchJuliaFiles } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchJuliaFiles();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(a.meta.date) - new Date(b.meta.date);
	});

	return json(sortedPosts);
};