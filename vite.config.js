import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
    base: '/home-page/',
    plugins: [react()],
    server: {
        watch: {
            include: [
                path.resolve(__dirname, 'public/**/*'),
            ],
        },
    },
    resolve: {
        alias: {
            '@img': path.resolve(__dirname, './src/assets/img/'),
            '@icons': path.resolve(__dirname, './src/components/icons/'),
            "@entities": path.resolve(__dirname, "./src/entities/*",),
            '@': path.resolve(__dirname, './src'),

        },
    },
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            loader: {
                '.js': 'jsx'
            },
        },
        include: ['**/*.scss']
    }
})
