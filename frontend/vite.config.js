import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration file for a React project
// This file is used to configure Vite, a build tool for modern web projects.
// It includes the React plugin to enable React support in the project.
getComputedStyle.apply();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
