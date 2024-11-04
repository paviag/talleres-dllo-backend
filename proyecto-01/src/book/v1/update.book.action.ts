import { BookModel, BookType } from "./book.model";
import { UpdateBookType } from "./book.types";

// DECLARE ACTION FUNCTION
async function updateBookAction(targetBookId: string, updateData: UpdateBookType): Promise<BookType> {
    const updatedBook = await BookModel.findByIdAndUpdate(targetBookId, updateData, {
        new: true
    }) as BookType;

    if (!updatedBook) {
        throw new Error("Book Id does not match existing book.")
    }
    
    return updatedBook;
}

// EXPORT ACTION FUNCTION
export default updateBookAction;
