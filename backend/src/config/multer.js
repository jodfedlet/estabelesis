import multer from "multer";
import { resolve } from "path";

export default {

    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, "..", "..", "uploads"));
        },
        filename: (req, file, cb) => {
            cb(null, new Date().toISOString() + file.originalname)
        }
    }),

    fileFilter: (req, file, cb) => {
        if(["image/jpeg", "image/png"].includes(file.mimetype)){
            cb(null, true)
        }else{
            cb(null, false)
        }
    },

    limits:{
        fileSize: 1024 * 1024 * 5
    },
}