import adapter from '@sveltejs/adapter-auto';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		alias: {
			$types: 'src/types',
			$src: 'src',
		}
	}
};

export default config;
