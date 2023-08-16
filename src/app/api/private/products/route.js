import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

console.log("Ok");

export async function GET(req) {
  try {
    return NextResponse.json(error);
  } catch (error) {
    return NextResponse.json(error);
  }
}
export async function POST(req) {
  const input = await req.json();

  //   Protected by admin / vendor
  if (
    !input.title ||
    !input.description ||
    !input.price ||
    !input.category ||
    // !input.brand ||
    !input.images ||
    !input.thumbnail ||
    !input.stock
  ) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials !" },
      { status: 400 }
    );
  }
  try {
    await productModel.create(input);
    return NextResponse.json(
      { success: true, message: "Product added successfully !" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
