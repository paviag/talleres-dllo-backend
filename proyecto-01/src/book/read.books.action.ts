import { BookModel, BookType } from "./book.model";

// DECLARE ACTION FUNCTION
async function readBooksAction(query: object): Promise<BookType[]> {
    const results = await BookModel.find(query);

    return results;
}

// EXPORT ACTION FUNCTION
export default readBooksAction;
