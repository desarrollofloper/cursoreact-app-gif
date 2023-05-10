import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: './docs',
  },
  plugins: [react()],
  server: {
    host: 'app.invernadero.com.local',
    port: 3000,
    https: {
      key: fs.readFileSync('./cert/app.invernadero.com.local/server.key'),
      cert: fs.readFileSync('./cert/app.invernadero.com.local/server.crt'),
    },
  },
});