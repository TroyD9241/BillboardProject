import { SongCard } from "../Components/SongCard/SongCard";
const songs = [
  {
    name: "demo",
    artist: "demo",
    region: "NA",
    image:
      "https://i.pinimg.com/736x/fd/81/55/fd8155898f3ed8f798c759ecab876079.jpg",
  },
  {
    name: "demo1",
    artist: "demo1",
    region: "NA",
  },
  {
    name: "demo2",
    artist: "demo2",
    region: "NA",
  },
  {
    name: "demo",
    artist: "demo",
    region: "NA",
    image:
      "https://i.pinimg.com/736x/fd/81/55/fd8155898f3ed8f798c759ecab876079.jpg",
  },
  {
    name: "demo1",
    artist: "demo1",
    region: "NA",
  },
  {
    name: "demo2",
    artist: "demo2",
    region: "NA",
  },
  {
    name: "demo",
    artist: "demo",
    region: "NA",
    image:
      "https://i.pinimg.com/736x/fd/81/55/fd8155898f3ed8f798c759ecab876079.jpg",
  },
  {
    name: "demo1",
    artist: "demo1",
    region: "NA",
  },
  {
    name: "demo2",
    artist: "demo2",
    region: "NA",
  },
  {
    name: "demo",
    artist: "demo",
    region: "NA",
    image:
      "https://i.pinimg.com/736x/fd/81/55/fd8155898f3ed8f798c759ecab876079.jpg",
  },
  {
    name: "demo1",
    artist: "demo1",
    region: "NA",
  },
  {
    name: "demo2",
    artist: "demo2",
    region: "NA",
  },
];

export const SongGrid = () => {
  return (
    <div className="flex w-screen justify-center mt-12">
      <div className="flex flex-wrap w-8/12">
        {songs.map((song, index) => {
          return <SongCard song={song} key={index} />;
        })}
      </div>
    </div>
  );
};
