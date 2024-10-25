import { Link } from "react-router-dom";
import routes from "./util/routes";
function App() {
  return (
    <article className="w-full">
      <h1 className="text-4xl font-semibold text-center text-white">
        Check Daily Design Code{" "}
        <a
          className="text-base font-normal align-middle"
          href="https://www.uidesigndaily.com/"
          target="_blank"
        >
          check them
        </a>
      </h1>

      <ul className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <li key={route.path} className="h-[320px]">
            <Link to={route.path}>
              <img
                src={route.cover}
                className="object-cover rounded-lg size-full"
              />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default App;
