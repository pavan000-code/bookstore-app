import { connectMongoDB } from "@/lib/mongodb";
import Book from "@/models/book";
import { NextResponse } from "next/server";

export async function POST(request){
    const {
        title, description
    } = await request.json();
    await connectMongoDB();
    await Book.create({title, description});
    return NextResponse.json({messageL: "Book Created"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const books = await Book.find();
    return NextResponse.json(books);
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Book.findByIdAndDelete(id);
    return NextResponse.json({message: "Book Deleted"}, {status: 200})
}