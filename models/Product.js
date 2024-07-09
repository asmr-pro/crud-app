import mongoose ,{Schema} from "mongoose";

const ProductSchema = new Schema({
    title :  String,
    description:  String
    }
    
, { timestamps: true })

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)

export default Product