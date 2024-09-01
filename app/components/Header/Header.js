export default function Header() {
  return (
    <>
      <header className="flex items-center w-full justify-center gap-4 px-8 py-8 bg-black text-white">
        <p className="text-6xl font-serif">
          Recepten Website
        </p>
      </header>
      <nav className="flex gap-4 bg-black text-white pb-4 px-8">
        <li className="inline">Alle recepten</li>
        <li className="inline">Zoek recepten</li>
      </nav>
    </>
  );
}
