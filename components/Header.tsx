"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="mb-7">
            <header className="flex">
                <Link href="/" className="text-green">読書記録</Link>
            </header>
            <div className="flex justify-center gap-5 mt-5">
                <Link
                    href="/"
                    className={pathname === "/" ? "text-black" : "text-light-gray"}
                >ホーム</Link>
                <Link
                    href="/bookshelf"
                    className={pathname === "/bookshelf" ? "text-black" : "text-light-gray"}>本棚</Link>
                <Link
                    href="/search"
                    className={pathname === "/search" ? "text-black" : "text-light-gray"}>さがす</Link>
                <Link
                    href="/mypage"
                    className={pathname === "/mypage" ? "text-black" : "text-light-gray"}>マイページ</Link>

            </div>
        </div>
    )
}