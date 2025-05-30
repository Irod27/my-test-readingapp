import Image from "next/image";
import Link from "next/link";



type Props = {
    thumbnail: string;
    title: string;
    toDetailPage: string

}

export default function BookCard({ thumbnail, title, toDetailPage }: Props) {
    return (
        <div>
            <Link href={toDetailPage}>
                <Image
                    src={thumbnail}
                    alt={title}
                    width={80}
                    height={130}
                />
                <p className="line-clamp-2 text-[10px] mt-2 mx-1">{title}</p>
            </Link>

        </div>
    )
}