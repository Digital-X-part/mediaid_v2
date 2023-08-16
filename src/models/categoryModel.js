const { Schema, Model, model, mongoose, models } = require("mongoose");

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const categoriesModel = models.products || model("products", categorySchema);

export default categoriesModel;
