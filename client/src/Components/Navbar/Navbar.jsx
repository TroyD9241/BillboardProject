import { useState } from "react";
import { AvatarDropdown } from "../AvatarDropDown/AvatarDropdown";
import { LoginModal } from "../LoginModal/LoginModal";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-slate-100 p-6 max-h-30 min-h-30">
        <div class="flex items-center flex-shrink-0 text-green-500 mr-6">
          <span class="font-semibold text-xl tracking-tight">Charty</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-green-200 border-green-500 hover:text-green hover:border-green">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow"></div>
          <div className="flex -space-x-1 overflow-hidden pl-20"></div>
        </div>
        <>
          <button
            className="bg-green-500 text-green-900 active:bg-green-300 text-md px-6 py-3 rounded rounded-2xl shadow-md
        hover:shadow-lg outline-none focus:outline-non mr-1 transition-all duration-100"
            type="button"
            onClick={() => setShowModal(!showModal)}
          >
            Login
          </button>
        </>
        <LoginModal showModal={showModal} />
        <AvatarDropdown />
      </nav>
    </>
  );
};
