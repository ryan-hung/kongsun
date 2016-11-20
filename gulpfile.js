var elixir = require('laravel-elixir');
elixir.config.js.browserify.watchify.options.poll = true;

// elixir.config.js.browserify.transformers.push({
//     name: 'vueify'
// });
require('laravel-elixir-vueify');
require('laravel-elixir-livereload');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('../sass/app.scss')
    mix.browserify('main.js')
    mix.version(['public/js/main.js']);

    mix.livereload();
});
