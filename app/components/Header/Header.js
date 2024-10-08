import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center w-full justify-center gap-4 px-8 py-8 bg-black text-white fixed z-50">
        <Link href="/" className="text-xl lg:text-4xl font-serif">
          Recepten Website
        </Link>
      </header>
      <nav className="flex gap-4 bg-black text-white pb-4 px-8">
        <li className="inline">Alle recepten</li>
        <li className="inline">Zoek recepten</li>
      </nav>
    </>
  );
}
