import createBookAction from "./create.book.action";
import readOneBookAction from "./read.one.book.action";
import readBooksAction from "./read.books.action";
import updateBookAction from "./update.book.action";
import disableBookAction from "./disable.book.action";
import { BookType } from "./book.model";
import { CreateBookType, UpdateBookType } from "./book.types";

// DECLARE CONTROLLER FUNCTIONS
async function readBooks(query: object): Promise<BookType[]> {
    query = {...query, disabled: false};
    const books = await readBooksAction(query);

    return books;
}

async function createBook(bookData: CreateBookType): Promise<BookType> {
    const createdBook = await createBookAction(bookData);
    
    return createdBook;
}

async function updateBook(targetBookId: string, updateData: UpdateBookType): Promise<BookType> {
    const updatedBook = await updateBookAction(targetBookId, updateData);

    return updatedBook;
}

async function reserveBook(targetBookId: string, userId: string): Promise<BookType> {
    const book = await readOneBookAction(targetBookId);
    if (book.reserved) {
        throw new Error("Book unavailable for reservation.")
    }
    const updatedBook = await updateBookAction(targetBookId, {reserved: true});

    // TODO make reservation

    return updatedBook;
}

async function disableBook(targetBookId: string) {
    await disableBookAction(targetBookId);
}

// EXPORT CONTROLLER FUNCTIONS
export { readBooks, createBook, updateBook, reserveBook, disableBook };
