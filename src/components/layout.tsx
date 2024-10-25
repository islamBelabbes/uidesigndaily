import { Outlet } from "react-router-dom";
import Header from "./header";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="container flex justify-center min-h-screen py-8 mx-auto max-w-screen">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
