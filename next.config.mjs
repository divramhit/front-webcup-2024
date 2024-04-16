/** @type {import('next').NextConfig} */
import withSerwistInit from "@serwist/next";
const nextConfig = {
	images: {
		remotePatterns: [
			{
			  protocol: 'https',
			  hostname: 'images.unsplash.com'
			},
		],
	},
};
const withSerwist = withSerwistInit({
    // Note: This is only an example. If you use Pages Router,
    // use something else that works, such as "service-worker/index.ts".
    swSrc: "src/utils/sw/sw.js",
    swDest: "public/sw.js",
	disable: false
});

export default withSerwist(nextConfig);