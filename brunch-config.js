exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!src)/, // Files that are not in `app` dir.
      'apps.js': /^src/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']}
};