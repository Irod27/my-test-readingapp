import BookshelfCard from "./BookshelfCard"

import bookshelf from "@/book_datas/book-shelf"

export default function BookshelfList() {
    return (
        <div className="grid grid-cols-3 gap-6 mx-5">
            {bookshelf.map((book) => (
                <BookshelfCard key={book.id} thumbnail={book.thumbnail} title={book.title} toDetailPage={`/bookshelf/${book.id}`} />
            ))}
        </div>
    )
}