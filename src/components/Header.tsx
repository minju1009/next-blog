import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <Link href='/'>
                <h3>{"Minju's blog"}</h3>
            </Link>
            <nav className="flex gap-4">
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/project"}>Project</Link>
                <Link href={"/guestbook"}>Guestbook</Link>
            </nav>
        </header>
    )
}

export default Header;