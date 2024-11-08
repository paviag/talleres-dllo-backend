import createBookAction from "./create.book.action";
import readOneBookAction from "./read.one.book.action";
import readBooksAction from "./read.books.action";
import updateBookAction from "./update.book.action";
import disableBookAction from "./disable.book.action";
import { BookType } from "./book.model";
import { CreateBookType, UpdateBookType, BookQueryType } from "./book.types";
import setReturnDateAction from "../reservation/set.return.date.action";
import { ReservationType } from "../reservation/reservation.model";
import createReservationAction from "../reservation/create.reservation.action";
import readReservationsAction from "../reservation/read.reservations.action";

// DECLARE CONTROLLER FUNCTIONS
async function readBooks(query: BookQueryType): Promise<BookType[] | BookType> {
    query = {...query, disabled: false};
    if (query.pubDate) {
        query.pubDate = new Date(query.pubDate).toISOString();
    }
    const books = await readBooksAction(query);

    return books;
}

async function readOneBook(bookId: string): Promise<{book: BookType | null, reservationHistory: ReservationType[]}> {
    const book = await readOneBookAction(bookId);
    if (book.disabled) {
        return {
            book: null,
            reservationHistory: [],
        }
    }
    const reservationHistory = await readReservationsAction({bookId: bookId});

    return {
        book: book,
        reservationHistory: reservationHistory,
    };
}

async function createBook(bookData: CreateBookType): Promise<BookType> {
    const createdBook = await createBookAction(bookData);
    
    return createdBook;
}

async function updateBook(targetBookId: string, updateData: UpdateBookType): Promise<BookType> {
    const updatedBook = await updateBookAction(targetBookId, updateData);

    return updatedBook;
}

async function reserveBook(targetBookId: string, userId: string): Promise<{updatedBook: BookType, newReservation: ReservationType}> {
    const book = await readOneBookAction(targetBookId);
    if (book.reserved) {
        // book is already reserved
        throw new Error("Book unavailable for reservation.")
    }
    const updatedBook = await updateBookAction(targetBookId, {
        reserved: true
    });
    const newReservation = await createReservationAction({
        bookId: targetBookId,
        userId: userId,
    })

    return {
        updatedBook: updatedBook,
        newReservation: newReservation,
    };
}

async function returnBook(targetBookId: string, userId: string): Promise<{updatedBook: BookType, updatedReservation: ReservationType}> {
    const book = await readOneBookAction(targetBookId);
    if (!book.reserved) {
        // book is not currently reserved, so book cannot be returned
        throw new Error("Book unavailable for return.")
    }
    const updatedReservation = await setReturnDateAction(targetBookId, userId, new Date());
    const updatedBook = await updateBookAction(targetBookId, {
        reserved: false
    });

    return {
        updatedBook: updatedBook,
        updatedReservation: updatedReservation,
    };
}

async function disableBook(targetBookId: string) {
    await disableBookAction(targetBookId);
}

// EXPORT CONTROLLER FUNCTIONS
export { readBooks, createBook, updateBook, reserveBook, disableBook, returnBook, readOneBook };
