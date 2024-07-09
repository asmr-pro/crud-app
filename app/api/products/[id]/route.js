import connectMongoDb from "@/libs/mongodb"
import Product from "@/models/Product"
import { NextResponse } from "next/server"

export async function PUT(req , {params}) {
    const { id } = params
    const {newTitle: title, newDesdription: description} = await req.json()
    await connectMongoDb()
    await Product.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({msg:"Product Updated..."},{status:200})
}

export async function GET(req,{ params }) {
    const { id } = params
    await connectMongoDb()
    const product = await Product.findOne({ _id: id })
    return NextResponse.json({product},{status:200})
}