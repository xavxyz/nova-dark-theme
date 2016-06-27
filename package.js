Package.describe({
  name: 'xavcz:nova-dark-theme',
  version: '0.26.3-nova',
  summary: 'A dark theme for Nova',
  git: 'https://github.com/xavcz/nova-dark-theme',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.0']);
  api.use([
    'nova:base-components@0.26.3-nova',
    'nova:base-styles@0.26.3-nova',
    'fourseven:scss@3.4.1',  
  ]);
});