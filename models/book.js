import mongoose, {Schema} from 'mongoose';

const bookSchema = new Schema({
    title: String,
    description: String
}, {
    timestamps: true,
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;