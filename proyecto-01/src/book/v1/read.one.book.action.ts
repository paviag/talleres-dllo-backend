import { BookModel, BookType } from "./book.model";

// DECLARE ACTION FUNCTION
async function readOneBookAction(bookId: string): Promise<BookType> {
    const results = await BookModel.findById(bookId) as BookType;

    return results;
}

// EXPORT ACTION FUNCTION
export default readOneBookAction;