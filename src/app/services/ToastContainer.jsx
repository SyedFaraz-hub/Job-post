"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";



export default function ToastProvider({ children }) {

  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}