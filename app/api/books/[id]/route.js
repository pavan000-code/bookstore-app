import { connectMongoDB } from "@/lib/mongodb";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json();
    await connectMongoDB();
    await Book.findByIdAndUpdate(id, {title,description})
    return NextResponse.json({message: "Book Updated"}, {status: 200})
}

export async function GET(request, {params}){
    const {id} = params;
    await connectMongoDB();
    const book = await Book.findOne({_id: id});
    return NextResponse.json({book}, {status: 200});
}