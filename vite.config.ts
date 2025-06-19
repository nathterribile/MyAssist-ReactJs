import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig(configEnv => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx,json,png,jpg,svg}'],
      linters: [new EsLinter({ configEnv })],
      exclude: ['./src/**'],
    }),
    svgrPlugin(),
  ],
  resolve: {
    alias: {
      '/@': '/src',
    },
  },
}))
