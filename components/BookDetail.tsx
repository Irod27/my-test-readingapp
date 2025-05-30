import Image from "next/image"

type Props = {
    title: string;
    authors: string;
    thumbnail: string;
    published_at: string;
    publisher: string;
    pages: number;
    description: string;
}

export default function BookDetail({ title, authors, thumbnail, published_at, publisher, pages, description }: Props) {
    return (
        <div className="bg-beige p-7">
            <div className="flex">
                <Image
                    src={thumbnail}
                    alt={title}
                    width={90}
                    height={140} />
                <div className="ml-5">
                    <h1 className="text-xl">{title}</h1>
                    <div className="flex mt-3">
                        <div className="text-green ">
                            <p>著者</p><p>出版日</p><p>出版社</p><p>ページ数</p>
                        </div>
                        <div className="ml-2">
                            <p>{authors}</p><p>{published_at}</p><p>{publisher}</p><p>{pages}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-2">{description}</p>

        </div>
    )
}