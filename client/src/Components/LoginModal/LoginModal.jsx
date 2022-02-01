import { useState } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

export const LoginModal = ({ showModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return createPortal(
    <>
      {showModal ? (
        <>
          <div class="flex justify-center mt-40">
            <form class="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Username
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
                <a
                  class="inline-block align-baseline font-bold text-sm text-green-400 hover:text-green-600"
                  href="#"
                >
                  Demo
                </a>
              </div>
            </form>
          </div>
        </>
      ) : null}
    </>,
    modalRoot
  );
};
