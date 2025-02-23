import { serve } from 'bun';
import index from '../web/index.html';

const server = serve({
  routes: {
    '/*': index,
  },
  development: true,
});

console.log(`🚀 Server running at ${server.url}`);
