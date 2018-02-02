const mix = require('laravel-mix');

mix.js('resources/assets/js/app.js', 'public/assets/js')
	.sass('resources/assets/scss/style.scss', 'public/assets/css')
	.browserSync({
		files: 'public/**/*',
		server: 'public',
		proxy: false
	});
