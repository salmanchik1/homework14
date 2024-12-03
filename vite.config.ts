import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "/src"),
            "@assets": path.resolve(__dirname, "/src/assets"),
            "@data": path.resolve(__dirname, "/src/data"),
            "@components": path.resolve(__dirname, "/src/components"),
            "@types": path.resolve(__dirname, "/src/types"),
        },
    },
});