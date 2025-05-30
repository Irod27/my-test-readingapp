import Link from "next/link";

import BookCard from "./BookCard";
import bookshelf from "@/book_datas/book-shelf";

import { CircleArrowRight } from "lucide-react"

type Props = {
    heading: string;
    link: string;

}

export default function BookList({ heading, link }: Props) {
    return (
        <div className="bg-beige p-5 my-10">
            <Link href={link} className="flex items-center mb-5 gap-0.5">
                <p>{heading}</p>
                <CircleArrowRight className="text-green w-5" />
            </Link>
            <div className="grid  grid-cols-3 gap-4">
                {bookshelf.slice(0, 3).map((book) => (
                    <BookCard key={book.id} thumbnail={book.thumbnail} title={book.title} toDetailPage={`/bookshelf/${book.id}`} />
                ))}
            </div>

        </div>

    )
}