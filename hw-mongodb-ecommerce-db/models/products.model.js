import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title field is required.']
    },
    price: {
      type: Number,
      required: [true, 'Price field is required.']
    },
    description: {
      type: String
    },
    category: {
      type: String,
      required: [true, 'Category field is required.']
    },
    image: {
      type: String
    },
    rating: {
      rate: {
        type: Number
      },
      count: {
        type: Number
      }
    }
  },
  {
    timestamps: true
  }
)

const Product = model("Products", productSchema);

export default Product;
