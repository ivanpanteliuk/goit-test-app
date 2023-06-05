import AppBar from "../AppBar/";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
