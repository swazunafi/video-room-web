/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    sassOptions: {
        silenceDeprecations: ['legacy-js-api']
    }
};

export default nextConfig;
