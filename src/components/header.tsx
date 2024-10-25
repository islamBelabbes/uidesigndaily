import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="p-5 bg-[#171A1B] w-full h-fit flex justify-between items-center">
      <Link className="text-4xl font-bold text-white" to="/">
        Daily Design Code
      </Link>
      <a href="https://github.com/oslabs-beta/dailydesigncode" target="_blank">
        <img src="/Github-Logo.png" width={60} className="aspect-auto" />
      </a>
    </header>
  );
}

export default Header;
