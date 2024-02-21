import express , {Request, Response} from 'express';
import cloudinary from 'cloudinary';



export const create = async (req:Request,res:Response) => {

    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newHotel = req.body;

        //1. upload the images to cloudinary
        const uploadPromises = imageFiles.map(async (image) => {
            const b64 = Buffer.from(image.buffer).toString("base64")
            let dataURI="data:" + image.mimetype + ";base64," + b64;
            const res = await cloudinary.v2.uploader.upload(dataURI);
            return res.url;
        });

        const imageUrls = await Promise.all(uploadPromises);

        //2. if upload was successful, add the urls to the new hotel
        //3. save the new hotel in our database
        //4. return a 201 status
    } catch (error) {
        console.log("error creating horel: ", error)
        res.status(500).json({message:"Something went wrong"});
    }
}