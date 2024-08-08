import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

import { v2 as cloudinary } from 'cloudinary';

 // Configuration
    cloudinary.config({ 
        cloud_name:'process.env.CLOUDINARY_CLOUD_NAME',
        api_key: 'process.env.CLOUDINARY_API_KEY',
        api_secret:'process.env.CLOUDINARY_API_SECRET' 
    });
  
    const  uploadOnCloudinary = async (localFilepath) =>{
        try {
            if(!localFilepath) return null
            //uploading
          const response = await cloudinary.uploader.upload(localFilepath,{
                resource_type:"auto"
            })
           console.log("file is uploaded on cloudinary",response.url);
           return response;
        } catch (error) {
            fs.unlinkSync(localFilepath) //remove the temporary saved file as the upload failed
            return null;
        }
    }


export  {uploadOnCloudinary}