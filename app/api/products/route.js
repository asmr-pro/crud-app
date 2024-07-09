import connectMongoDb from "@/libs/mongodb"
import Product from "@/models/Product"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { title, description } = await req.json()
    console.log(title,description)
    await connectMongoDb()
    await Product.create({title, description})
    return NextResponse.json({msg : "Product Created"},{status:201})
}


export async function GET() {
    await connectMongoDb()
    const products = await Product.find()
    return NextResponse.json({products})
}


export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id")
    await connectMongoDb()
    await Product.findByIdAndDelete(id)
    return NextResponse.json({msg:"Product Deleted.."},{status:200})
  }