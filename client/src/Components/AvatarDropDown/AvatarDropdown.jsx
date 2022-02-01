export const AvatarDropdown = () => {
  return (
    <div class="relative group">
      <div class="flex flex-row items-center w-full text-base font-bold text-left uppercase bg-transparent rounded-full md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
        <img
          className="inline-block h-20 w-20 rounded-full ring-2 ring-white"
          src="https://pbs.twimg.com/profile_images/1429445683761852424/qdgFhFMN_400x400.jpg"
          alt="pfp"
        />
      </div>
      <div class="absolute z-10 hidden bg-grey-200 group-hover:block mt-6">
        <div class="px-2 pt-2 pb-4 bg-green-200 bg-slate-100 shadow-l">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ul>
              <li className="">
                <a className="">Favorites</a>
              </li>
              <br />
              <li>
                <a>Linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
