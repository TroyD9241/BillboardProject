import { Sidenav } from "../Sidenav/Sidenav";
import { SongGrid } from "../../SongGrid/SongGrid";

export const Homepage = () => {
  return (
    <>
      <div className="flex ">
        <Sidenav />
      </div>
      <div className="">
        <SongGrid />
      </div>
    </>
  );
};
