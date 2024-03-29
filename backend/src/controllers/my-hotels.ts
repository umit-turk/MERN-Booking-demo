import express, { Request, Response } from 'express';
import cloudinary from 'cloudinary';
import { HotelType } from '../shared/types';
import Hotel from '../models/hotel';



export const create = async (req: Request, res: Response) => {

    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newHotel: HotelType = req.body;

        //1. upload the images to cloudinary
        const imageUrls = await uploadImages(imageFiles);
        newHotel.imageUrls = imageUrls;
        newHotel.lastUpdated = new Date();
        newHotel.userId = req.userId;

        //3. save the new hotel in our database
        const hotel = new Hotel(newHotel);
        await hotel.save();
        //4. return a 201 status
        res.status(201).send(hotel);
    } catch (error) {
        console.log("error creating horel: ", error)
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const hotels = await Hotel.find({ userId: req.userId })
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: "Error fetching hotels" })
    }
}

export const get = async (req: Request, res: Response) => {
    //api/my-hotels/423423423
    const id = req.params.id.toString();
    try {
        const hotel = await Hotel.findOne({
            _id:id,
            userId:req.userId,
        });
        res.json(hotel);
    } catch (error) {
        res.status(500).json({ message: "Error fetching hotels" })
    }
}

export const updateHotel = async (req:Request, res:Response) => {
    try {
        const updatedHotel: HotelType = req.body;
        updatedHotel.lastUpdated = new Date();

        const hotel = await Hotel.findOneAndUpdate({
            _id:req.params.hotelId,
            userId:req.userId,
        },updatedHotel, {new:true});

        if(!hotel){
            return res.status(404).json({message: "Hotel not found"});
        }

        const files = req.files as Express.Multer.File[]
        const updatedImageUrls = await uploadImages(files);

        hotel.imageUrls = [...updatedImageUrls, ...(updatedHotel.imageUrls || [])]
        res.status(201).json(hotel);
        
    } catch (error) {
        res.status(500).json({ message: "Error updating hotel" })
        
    }
}

async function uploadImages(imageFiles: Express.Multer.File[]) {
    const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);
        return res.url;
    });

    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
}

