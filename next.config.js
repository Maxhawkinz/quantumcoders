/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
	// For Vercel deployment (supports API routes)
	// Remove static export for Vercel
	// output: 'export', // Commented out for Vercel
	trailingSlash: true,
}

module.exports = nextConfig
