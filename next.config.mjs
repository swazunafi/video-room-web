/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: false,
    sassOptions: {
        silenceDeprecations: ['legacy-js-api']
    }
};

export default nextConfig;
