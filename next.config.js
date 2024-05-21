/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // remotePatterns: [
    //     {
    //         protocol: "https",
    //         hostname: "cdn.sanity.io",
    //         port: "",
    //         pathname:
    //             "/images/s37229yn/production/576084e1b9545990e38bc6ccee63646f2b0b0742-756x276.png?w=320&auto=format",

    //         //pathname: "/images/**",
    //     },
    // ],
    images: {
        domains: ["cdn.sanity.io", "encrypted-tbn0.gstatic.com"],
    },
};

module.exports = nextConfig;
