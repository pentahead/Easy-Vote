import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
export const Route = createRootRoute({
  component: () => (
    <>
      {/* <NavigationBar /> */}
      <Outlet />
      <TanStackRouterDevtools />

      {/* React Toastify */}
      <ToastContainer theme="colored" />
    </>
  ),
});
