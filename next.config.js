/** @type {import('next').NextConfig} */

// Generate a secret to add as NEXTAUTH_SECRET, it must be added in the auth options.
// openssl rand -base64 32

// Github app is just an example

const nextConfig = {
	reactStrictMode: true,
	env: {
		GITHUB_APP_CLIENT_ID: '',
		GITHUB_APP_CLIENT_SECRET: '',
		NEXTAUTH_SECRET: ''
	}
}

module.exports = nextConfig
