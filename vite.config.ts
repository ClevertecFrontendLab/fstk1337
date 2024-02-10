import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import path from 'path';


export default defineConfig({
    plugins: [react(), svgr({
        include: "**/*.svg"
    })],
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, 'src/app'),
            '@public': path.resolve(__dirname, 'public'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@redux': path.resolve(__dirname, 'src/redux'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
});
