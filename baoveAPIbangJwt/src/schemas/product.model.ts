import { Schema, model } from "mongoose"

interface IProduct {
    name: string;
    price: number;
    category: string;
}
const productSchema = new Schema<IProduct>({
    name: String,
    price: Number,
    category: String
})

const Product = model("Product", productSchema);

export default Product;