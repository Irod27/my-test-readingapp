import Image from "next/image"
import Link from "next/link"

type Props = {
    thumbnail: string;
    title: string;
    toDetailPage: string;
}

export default function BookshelfCard({ thumbnail, title, toDetailPage }: Props) {
    return (
        <Link href={toDetailPage}>
            <Image
                src={thumbnail}
                alt={title}
                width={90}
                height={30}
            ></Image>
        </Link>

    )
}