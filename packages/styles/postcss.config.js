module.exports = {
  plugins: {
    'postcss-import': {
      resolve(id, basedir, importOptions) {
        // Handle local workspace dependencies
        if (id.startsWith('@davdevs/paper-core')) {
          return id.replace('@davdevs/paper-core', '../core');
        }
        if (id.startsWith('@davdevs/paper-foundations')) {
          return id.replace('@davdevs/paper-foundations', '../foundations');
        }
        return id;
      }
    },
    'autoprefixer': {}
  }
}