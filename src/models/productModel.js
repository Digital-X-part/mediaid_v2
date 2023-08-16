const { Schema, model, mongoose, models } = require("mongoose");

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    images: { type: String, required: true },
    brand: { type: mongoose.Schema.ObjectId, ref: "brands" },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Categories",
      required: true,
    },
    description: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    stock: { type: Number, required: true, default: 0 },
    discountPrice: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const productModel = models.products || model("products", productSchema);

export default productModel;
