const cloudinary = require('cloudinary').v2;
const config = require("../Config");
const { Readable } = require('stream');

cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET
});

const uploadDocument = async (file, fileName) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto', // Automatically detect file type
        folder: fileName, 
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );

    Readable.from(file.buffer).pipe(stream); // Use built-in Readable stream
  });
};

module.exports = { uploadDocument };