import { v2 as cloudinary } from 'cloudinary';

import { config } from 'dotenv';

config();

console.log("Cloudinary ENV:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME
        ? "LOADED"
        : "MISSING",

    api_key: process.env.CLOUDINARY_API_KEY
        ? "LOADED"
        : "MISSING",

    api_secret: process.env.CLOUDINARY_API_SECRET
        ? "LOADED"
        : "MISSING",
});

export default cloudinary;