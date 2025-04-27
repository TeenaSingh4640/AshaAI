import path from 'path';

export default {
  // Your Vite config
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
