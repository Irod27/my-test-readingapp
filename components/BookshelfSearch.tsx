"use client"

import { useState } from "react"

import BookshelfList from "./BookshelfList";
import BookshelfCard from "./BookshelfCard";


import bookshelf from "@/book_datas/book-shelf";

export default function BookshelfSearch() {
    const [query, setQuery] = useState("");

    const filteredBooks = bookshelf.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase()));

    const isSearching = query.trim() !== "";

    return (
        <div className="m-4 mb-7">


            <input
                type="text"
                placeholder="検索"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-white w-full p-2 pl-4 mb-5" />

            {/* 検索ボタンを押したら結果が表示されるように */}

            {/* デフォルト表示（検索してないとき） */}
            {!isSearching && (
                < BookshelfList />
            )}

            {/* 検索中の表示 */}
            {isSearching && (
                <div>

                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book) => (
                            < BookshelfCard thumbnail={book.thumbnail} title={book.title} toDetailPage={`/bookshelf/${book.id}`} />
                        ))
                    ) : (
                        <p>本が見つかりませんでした</p>
                    )}
                </div>
            )}
        </div>
    )
}