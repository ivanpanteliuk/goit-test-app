import AppBar from "../AppBar/";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
