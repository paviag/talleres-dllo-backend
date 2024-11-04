import { Router, Request, Response } from "express";
import { createBook, updateBook, disableBook, readBooks, reserveBook } from "./book.controller";
import { BookQueryType, CreateBookType, UpdateBookType, ReserveBookType } from "./book.types";
import { BookCreateAuthMiddleware, BookModAuthMiddleware, BookDisableAuthMiddleware } from "../../middleware/auth";

// INIT ROUTES
const bookRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
async function CreateBook(request: Request<any, any, CreateBookType>, response: Response) {
    try {
        const book = await createBook(request.body);
        
        response.status(200).json({
            message: "Success.",
            book: book,
        });

    } catch (error) {
        response.status(500).json({
            message: "Failure.",
            information: (error as any).toString()
        })
    }
}

async function SearchBooks(request: Request<any, any, any, BookQueryType>, response: Response) {
    try {
        const books = await readBooks(request.query);
        response.status(230).json({ 
            message: "Query results.",
            books: books,
        });
    } catch (error) {
        response.status(401).json({ 
            message: "Invalid query.",
        });
    }
}

async function UpdateBook(request: Request<{bookId: string}, UpdateBookType | ReserveBookType>, response: Response) {
    // update info is in request.body, target book id is in params
    // TODO reservas
    
    try {
        let updatedBook;
        if (request.body.reserved == undefined) {
            updatedBook = await updateBook(request.params.bookId, request.body);
        } else {
            if (Object.keys(request.body).length > 2) {
                throw new Error("Invalid update request.")
            }
            updatedBook = await reserveBook(request.params.bookId, request.body._id);
        }

        response.status(200).json({
            message: "Success.",
            updatedBook: updatedBook,
        });
    } catch (error) {
        response.status(500).json({
            message: "Failure to update book.",
            information: (error as any).toString(),
        })
    }
}

async function DisableBook(request: Request<{bookId: string}>, response: Response) {
    // target book id is in params
    try {
        await disableBook(request.params.bookId);

        response.status(200).json({
            message: "Success.",
        });
    } catch (error) {
        response.status(500).json({
            message: "Failure to delete/disable book.",
            information: (error as any).toString(),
        })
    }
}

// DECLARE ENDPOINTS
bookRoutes.get("/search", SearchBooks);                                         // READ
bookRoutes.post("/create", BookCreateAuthMiddleware, CreateBook);               // CREATE
bookRoutes.put("/:bookId/update", BookModAuthMiddleware, UpdateBook);           // UPDATE
bookRoutes.delete("/:bookId/delete", BookDisableAuthMiddleware, DisableBook);   // DELETE

// EXPORT ROUTES
export default bookRoutes;
