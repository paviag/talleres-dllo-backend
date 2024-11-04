import { BookModel } from "./book.model";

// DECLARE ACTION FUNCTION
async function disableBookAction(targetBookId: string) {
    await BookModel.findByIdAndUpdate(targetBookId, {disabled: true});
}

// EXPORT ACTION FUNCTION
export default disableBookAction;
