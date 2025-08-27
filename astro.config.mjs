// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Fix for port forwarding in VS Code Dev Containers
  // see https://www.drsys.de/dev-containers-with-astro-vite/
  server: {
    host: '127.0.0.1'
  },
  // Silencing SASS deprecation warnings (recommended by Bootstrap team)
  // see https://github.com/twbs/bootstrap/issues/40962
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import']
        }
      }
    }
  }
});
