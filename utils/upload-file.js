import Cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const uploadImage = async(path,folder)=>{
    const result = await Cloudinary.uploader.upload(path,{
        folder,
        resource_type:"auto",
        overwrite:false,
        use_filename:true,
        unique_filename:true,
    });

    fs.unlinkSync(path);
    return result;
};