export default {
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					// Chunk pour Three.js
					if (id.includes("three")) {
						return "three";
					}

					// Chunk pour les autres node_modules
					if (id.includes("node_modules")) {
						return "vendor";
					}

					// Chunk pour les composants
					if (id.includes("src/components")) {
						return "components";
					}

					// Chunk pour les assets
					if (id.includes("src/assets")) {
						if (id.includes("/images/")) return "assets-images";
						if (id.includes("/video/")) return "assets-videos";
						if (id.includes("/styles/")) return "assets-styles";
						return "assets-other";
					}
				},
			},
		},
		// Compression des assets
		assetsInlineLimit: 4096, // 4kb
		// Augmenter la limite si nécessaire
		chunkSizeWarningLimit: 800,
		// Minification plus agressive
		minify: "esbuild",
		esbuild: {
			drop: ["console", "debugger"],
		},
	},
};
