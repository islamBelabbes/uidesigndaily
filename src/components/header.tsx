function Header() {
  return (
    <header className="p-5 bg-[#171A1B] w-full h-fit flex justify-between items-center">
      <h1 className="text-4xl font-bold text-white">Daily Design Code</h1>
      <a href="https://github.com/oslabs-beta/dailydesigncode" target="_blank">
        <img src="/Github-Logo.png" width={60} className="aspect-auto" />
      </a>
    </header>
  );
}

export default Header;
