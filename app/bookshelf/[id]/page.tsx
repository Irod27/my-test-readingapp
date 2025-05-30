import bookshelf from "@/book_datas/book-shelf";

import BookDetail from "@/components/BookDetail";

//本棚から各本の詳細を表示する

type Props = {
    params: {
        id: string;
    }
}

export default function BookDetailPage({ params }: Props) {
    const book = bookshelf.find((b) => b.id === params.id);

    if (!book) {
        return <div>本が見つかりませんでした</div>;
    }
    return (
        <BookDetail title={book.title} authors={book.author} thumbnail={book.thumbnail} published_at={book.published_at} publisher={book.publisher} pages={book.pages} description={book.description} />
    )
}