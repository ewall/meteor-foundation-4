Package.describe({
	name: "ewall:foundation-4",
	summary: "Foundation 4 by ZURB - an advanced responsive web framework",
	version: "4.3.5",
	git: "https://github.com/ewall/meteor-foundation-4.git",
	deprecated: true
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@0.9.0");
	api.use('jquery', 'client');

	var path = Npm.require('path');
	api.addFiles(path.join('client', 'normalize.css'), 'client');
	api.addFiles(path.join('client', 'foundation.min.css'), 'client');

	api.addFiles(path.join('client', 'custom.modernizr.js'), 'client');
	api.addFiles(path.join('client', 'foundation.min.js'), 'client');
	api.addFiles(path.join('client', 'activate-foundation.js'), 'client');
});
