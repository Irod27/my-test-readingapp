import Link from "next/link"
import bookshelf from "@/book_datas/book-shelf"
import DashboardCard from "./DashboardCard"
import { Plus } from "lucide-react"

export default function DashboardSummary() {
    return (
        <div className="flex items-center justify-between mx-3">
            <div className="flex gap-5">
                <DashboardCard heading="総冊数" value={bookshelf.length} />
                <DashboardCard heading="総ページ数" value={bookshelf.reduce((sum, book) => sum + book.pages, 0)} />
            </div>

            <Link href="" className="bg-green text-white px-4 py-2 rounded-full flex items-center"><Plus className="mr-1" />記録する</Link>
        </div>
    )
}