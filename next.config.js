const nextConfig = {
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
	// For GitHub Pages deployment
	basePath: process.env.NODE_ENV === 'production' ? '/skill-share' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/skill-share' : '',
	// Enable static export for GitHub Pages
	output: 'export',
	trailingSlash: true,
}

module.exports = nextConfig
