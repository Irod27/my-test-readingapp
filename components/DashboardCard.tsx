import Link from "next/link"


type Props = {
    heading: string;
    value: number;
}

export default function DashboardCard({ heading, value }: Props) {
    return (
        <div className="flex flex-col gap-1">
            <Link href="" className="text-green">{heading}</Link>
            <Link href="" className="text-3xl font-light text-black">{value}</Link>
        </div>
    )
}