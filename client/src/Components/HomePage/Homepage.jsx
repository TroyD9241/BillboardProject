import { Sidenav } from "../Sidenav/Sidenav";
import { SongGrid } from "../../SongGrid/SongGrid";

export const Homepage = () => {
  return (
    <>
      <div>
        <Sidenav />
      </div>
      <div className="">
        <SongGrid />
      </div>
    </>
  );
};
