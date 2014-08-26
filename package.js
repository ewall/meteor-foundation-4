Package.describe({
	name: "ewall:foundation-4",
	summary: "Foundation 4 by ZURB - an advanced responsive web framework",
	version: "4.3.4",
	git: "https://github.com/ewall/meteor-foundation-4.git"
});

Package.on_use(function (api) {
	api.versionsFrom("METEOR@0.9.0");
	api.use('jquery', 'client');

	var path = Npm.require('path');
	api.add_files(path.join('client', 'normalize.css'), 'client');
	api.add_files(path.join('client', 'foundation.min.css'), 'client');

	api.add_files(path.join('client', 'custom.modernizr.js'), 'client');
	api.add_files(path.join('client', 'foundation.min.js'), 'client');
	api.add_files(path.join('client', 'activate-foundation.js'), 'client');
});