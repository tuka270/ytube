import { Homee } from "@/components/Homee";
import { Library } from "@/components/Library";
import { Subs } from "@/components/Subs";
import { From } from "@/components/From";

export function Left(){
    return(
        <div className="w-[12%] h-[100%] flex-col flex bg-neutral-900">
          <div>
            {home.map((user, index) => (
              <Homee index={index} user={user}/>
            ))}
          </div>
          <div>
            {lib.map((user, index) => (
              <Library index={index} user={user}/>
            ))}
          </div>
          <div>
            {subs.map((user, index) => (
              <Subs index={index} user={user}/>
            ))}
          </div>
          <div>
            {from.map((user, index) => (
              <From index={index} user={user}/>
            ))}
          </div>
        </div>
    )
}

const from = [
    {
      img: "./premium.png",
      name: "Youtube Premium",
    },
    {
      img: "./gaming.png",
      name: "GAming",
    },
    {
      img: "./live.png",
      name: "Live",
    },
    {
      img: "./sports.png",
      name: "Sports",
    },
  ];
  const subs = [
    {
      pfp: "./pfp1.png",
      name: "James Gouse",
    },
    {
      pfp: "./pfp2.png",
      name: "Marcus Levin",
    },
    {
      pfp: "./pfp3.png",
      name: "Alexis Sears",
    },
    {
      pfp: "./pfp1.png",
      name: "James Gouse",
    },
    {
      pfp: "./pfp2.png",
      name: "Marcus Levin",
    },
    {
      pfp: "./pfp3.png",
      name: "Alexis Sears",
    },
    {
      pfp: "./pfp1.png",
      name: "James Gouse",
    },
    {
      pfp: "./pfp2.png",
      name: "Marcus Levin",
    },
    {
      pfp: "./pfp3.png",
      name: "Alexis Sears",
    },
  ];
  const lib = [
    {
      img: "./library.png",
      name: "Library",
    },
    {
      img: "./history.png",
      name: "History",
    },
    {
      img: "./videos.png",
      name: "Your Videos",
    },
    {
      img: "./later.png",
      name: "Watch Later",
    },
    {
      img: "./liked.png",
      name: "Liked Videos",
    },
  ];
  const home = [
    {
      img: "./home.png",
      name: "Home",
    },
    {
      img: "./explore.png",
      name: "Explore",
    },
    {
      img: "./sub.png",
      name: "Subscriptions",
    },
  ];