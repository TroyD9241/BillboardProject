export const Sidenav = () => {
  return (
    <div className="fixed flex h-full w-1/12">
      <div className="bg-slate-100 text-blue-100 w-full">
        <ul className="font-bold text-green-500  rounded-2xl text-2xl">
          <li>
            <button className="font-bold text-green-500 mt-6">Region</button>
          </li>
          <br />
          <li>
            <button>Linkedin</button>
          </li>
          <br />
          <li>
            <button>whatever</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
