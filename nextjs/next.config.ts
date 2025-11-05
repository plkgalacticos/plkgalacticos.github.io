import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    basePath: "",
    output: "export",
    images: {
      unoptimized: true, // Disable image optimization
    },
    future: {

        // by default, if you customize webpack config, they switch back to version 4.
        // Looks like backward compatibility approach.
        webpack5: true,   
      },
    
      webpack(config) {
        config.resolve.fallback = {
    
          // if you miss it, all the other options in fallback, specified
          // by next.js will be dropped.
          ...config.resolve.fallback,  
    
          fs: false, // the solution
          child_process: false,
          http2: false,
        };
        
        return config;
      },
};

export default nextConfig;
