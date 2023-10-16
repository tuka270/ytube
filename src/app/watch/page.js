"use client";

import ReactPlayer from "react-player/youtube";
import { Head } from "@/components/Head1";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Bott } from "@/components/Bott";
import Link from "next/link";

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState([]);
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoId");

  const fetchData = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyCWXsg_Z1-iSOa0iPNfKgzdPC6hnlFQrWo`
    ).then((res) => res.json());
    console.log("as", res);
    setData(res);
  };

  useEffect(() => {
    fetchData();
    setIsClient(true);
  }, [videoId]);

  console.log(data);
  function youtube() {
    console.log("aaa");
  }
  console.log(data?.items?.[0]?.snippet?.title);

  return (
    <div className="w-[100vw] h-[100vh]">
      <Head YouTube={youtube} />
      <div className="w-[100%] h-[100%] flex bg-zinc-900 overflow-x-auto">
        <div className="w-[60%] h-[100%] mr-[2%] felx justify-end mt-[2%] ml-[10%] text-white">
          {isClient && (
            <ReactPlayer
              url={"https://ww.youtube.com/watch?v=" + videoId}
              width={1500}
              height={900}
              controls
              playing
              muted
            />
          )}
          <div className="text-3xl mt-[2%] text-white w-[100%] h-[5%]">
            {data?.items?.[0]?.snippet?.title}
          </div>
          <Bott />
          <div className="w-[100%] h-[20%] bg-zinc-800 rounded-xl pl-1 flex flex-wrap text-white">
            <div>
              {data?.items?.[0]?.statistics?.viewCount}
              views
            </div>
            {data?.items?.[0]?.snippet?.description}
          </div>
        </div>

        <div className="w-[28%] h-[100%] mt-[3%] mr-[10%]">
          <div className="w-[100%] h-[3 %] text-white flex gap-[2%] text-xl">
            <p className="border-2 border-solid border-white flex justify-center items-center p-[3%] rounded-full">
              All
            </p>
            <p className="border-2 border-solid border-white flex justify-center items-center p-[3%] rounded-full">
              From{" "}
            </p>
          </div>
          <div className="w-[100%] h-[96%] mt-[5%] gap-[1%]">
            <div className="w-[100%] h-[12%] mb-[3%]">
              {kk.map((user, index) => (
                <Link
                  href={"/watch?videoId=" + user.videoId}
                  key={index}
                  className="w-[100%] h-[100%] mb-[3%] text-white flex overflow-x-auto"
                >
                  <img
                    src={user.videoThumbnail}
                    className="box-border w-[50%] h-[100%] rounded-2xl"
                  />
                  <div className="flex h-[30%]">
                    <div className="flex-col w-[80%] h-[70%] m-[5%] ">
                      <p className="w-[100%] h-[50%] text-[100%] box-border">
                        {user.videName}
                      </p>
                      <div className="mt-[25%] w-[100%] h-[50%] box-border pt-[1%]">
                        <p className="mt-[5%] text-[80%] ">
                          {user.channelName}
                        </p>
                        <p className="mt-[1.5%] text-[80%] ">{user.views}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const kk = [
  {
    videoId: "jhQ4WVJwz7w",
    videName: "maye - Tú (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/jhQ4WVJwz7w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoNzAP&rs=AOn4CLDU3OvyRgualKWe8YBwNVcupX3_-g",
    channelName: "maye",
    channelProfile:
      "https://yt3.googleusercontent.com/tAgbBbzd4-9k2GPBwidg5_AQI5ynxhsb4-tlzSwuzjYKdI5nlLsWFpBlw8nQsUzVlaPrK2ptMA=s176-c-k-c0x00ffffff-no-rj",
    views: "20M",
  },
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
  {
    videoId: "eECitqA1gXo",
    videName: "Kai Cenat and Duke Dennis Sing Love (AI Cover)",
    videoThumbnail:
      "https://i.ytimg.com/vi/eECitqA1gXo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE-srkpYkAUIcPV7-gu2HkODSlvw",
    channelName: "johanna",
    channelProfile:
      "https://yt3.ggpht.com/DKokTQI8kAvlkxtorjn78YB26lmlv62yE9Ts6AjhXKRq5XsQMUDF7YV7y5xzYE-DB_Zo9t0HmQ8=s88-c-k-c0x00ffffff-no-rj",
    views: "301k",
  },
  {
    videoId: "WJRY8z5eJbU",
    videName: "Gangbay-MAMACITA (LYRICS)",
    videoThumbnail:
      "https://i.ytimg.com/vi/WJRY8z5eJbU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtAmAAtAFigIMCAAQARgyIFwoZTAP&rs=AOn4CLDekwC6VEeZIM6NL5sioGQXoiKIlA",
    channelName: "엠제이",
    channelProfile:
      "https://yt3.ggpht.com/ytc/APkrFKZIdrfAJo9_G4FlEi0GhWZaNjDxM9A8SozOpqFRQw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
  },
  {
    videoId: "GMgoShD0zbw",
    videName: "enerel - zuulun zuulun zuseech /Lyrics",
    videoThumbnail:
      "https://i.ytimg.com/vi/GMgoShD0zbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR4DZv1CXHc1DJLV261vyqc19jaw",
    channelName: "Lsong Official",
    channelProfile:
      "https://yt3.googleusercontent.com/ytc/APkrFKZLSBDZwhRkyAYGdIqC4RwF9fGp3vEYNCnREtcf2A=s176-c-k-c0x00ffffff-no-rj",
    views: "244K",
  },
  {
    videoId: "jhQ4WVJwz7w",
    videName: "maye - Tú (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/jhQ4WVJwz7w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoNzAP&rs=AOn4CLDU3OvyRgualKWe8YBwNVcupX3_-g",
    channelName: "maye",
    channelProfile:
      "https://yt3.googleusercontent.com/tAgbBbzd4-9k2GPBwidg5_AQI5ynxhsb4-tlzSwuzjYKdI5nlLsWFpBlw8nQsUzVlaPrK2ptMA=s176-c-k-c0x00ffffff-no-rj",
    views: "20M",
  },
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
  {
    videoId: "eECitqA1gXo",
    videName: "Kai Cenat and Duke Dennis Sing Love (AI Cover)",
    videoThumbnail:
      "https://i.ytimg.com/vi/eECitqA1gXo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE-srkpYkAUIcPV7-gu2HkODSlvw",
    channelName: "johanna",
    channelProfile:
      "https://yt3.ggpht.com/DKokTQI8kAvlkxtorjn78YB26lmlv62yE9Ts6AjhXKRq5XsQMUDF7YV7y5xzYE-DB_Zo9t0HmQ8=s88-c-k-c0x00ffffff-no-rj",
    views: "301k",
  },
  {
    videoId: "WJRY8z5eJbU",
    videName: "Gangbay-MAMACITA (LYRICS)",
    videoThumbnail:
      "https://i.ytimg.com/vi/WJRY8z5eJbU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtAmAAtAFigIMCAAQARgyIFwoZTAP&rs=AOn4CLDekwC6VEeZIM6NL5sioGQXoiKIlA",
    channelName: "엠제이",
    channelProfile:
      "https://yt3.ggpht.com/ytc/APkrFKZIdrfAJo9_G4FlEi0GhWZaNjDxM9A8SozOpqFRQw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
  },
  {
    videoId: "GMgoShD0zbw",
    videName: "enerel - zuulun zuulun zuseech /Lyrics",
    videoThumbnail:
      "https://i.ytimg.com/vi/GMgoShD0zbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR4DZv1CXHc1DJLV261vyqc19jaw",
    channelName: "Lsong Official",
    channelProfile:
      "https://yt3.googleusercontent.com/ytc/APkrFKZLSBDZwhRkyAYGdIqC4RwF9fGp3vEYNCnREtcf2A=s176-c-k-c0x00ffffff-no-rj",
    views: "244K",
  },
  {
    videoId: "jhQ4WVJwz7w",
    videName: "maye - Tú (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/jhQ4WVJwz7w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoNzAP&rs=AOn4CLDU3OvyRgualKWe8YBwNVcupX3_-g",
    channelName: "maye",
    channelProfile:
      "https://yt3.googleusercontent.com/tAgbBbzd4-9k2GPBwidg5_AQI5ynxhsb4-tlzSwuzjYKdI5nlLsWFpBlw8nQsUzVlaPrK2ptMA=s176-c-k-c0x00ffffff-no-rj",
    views: "20M",
  },
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
  {
    videoId: "eECitqA1gXo",
    videName: "Kai Cenat and Duke Dennis Sing Love (AI Cover)",
    videoThumbnail:
      "https://i.ytimg.com/vi/eECitqA1gXo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE-srkpYkAUIcPV7-gu2HkODSlvw",
    channelName: "johanna",
    channelProfile:
      "https://yt3.ggpht.com/DKokTQI8kAvlkxtorjn78YB26lmlv62yE9Ts6AjhXKRq5XsQMUDF7YV7y5xzYE-DB_Zo9t0HmQ8=s88-c-k-c0x00ffffff-no-rj",
    views: "301k",
  },
  {
    videoId: "WJRY8z5eJbU",
    videName: "Gangbay-MAMACITA (LYRICS)",
    videoThumbnail:
      "https://i.ytimg.com/vi/WJRY8z5eJbU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtAmAAtAFigIMCAAQARgyIFwoZTAP&rs=AOn4CLDekwC6VEeZIM6NL5sioGQXoiKIlA",
    channelName: "엠제이",
    channelProfile:
      "https://yt3.ggpht.com/ytc/APkrFKZIdrfAJo9_G4FlEi0GhWZaNjDxM9A8SozOpqFRQw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
  },
  {
    videoId: "GMgoShD0zbw",
    videName: "enerel - zuulun zuulun zuseech /Lyrics",
    videoThumbnail:
      "https://i.ytimg.com/vi/GMgoShD0zbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR4DZv1CXHc1DJLV261vyqc19jaw",
    channelName: "Lsong Official",
    channelProfile:
      "https://yt3.googleusercontent.com/ytc/APkrFKZLSBDZwhRkyAYGdIqC4RwF9fGp3vEYNCnREtcf2A=s176-c-k-c0x00ffffff-no-rj",
    views: "244K",
  },
  {
    videoId: "jhQ4WVJwz7w",
    videName: "maye - Tú (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/jhQ4WVJwz7w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoNzAP&rs=AOn4CLDU3OvyRgualKWe8YBwNVcupX3_-g",
    channelName: "maye",
    channelProfile:
      "https://yt3.googleusercontent.com/tAgbBbzd4-9k2GPBwidg5_AQI5ynxhsb4-tlzSwuzjYKdI5nlLsWFpBlw8nQsUzVlaPrK2ptMA=s176-c-k-c0x00ffffff-no-rj",
    views: "20M",
  },
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
  {
    videoId: "eECitqA1gXo",
    videName: "Kai Cenat and Duke Dennis Sing Love (AI Cover)",
    videoThumbnail:
      "https://i.ytimg.com/vi/eECitqA1gXo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE-srkpYkAUIcPV7-gu2HkODSlvw",
    channelName: "johanna",
    channelProfile:
      "https://yt3.ggpht.com/DKokTQI8kAvlkxtorjn78YB26lmlv62yE9Ts6AjhXKRq5XsQMUDF7YV7y5xzYE-DB_Zo9t0HmQ8=s88-c-k-c0x00ffffff-no-rj",
    views: "301k",
  },
  {
    videoId: "WJRY8z5eJbU",
    videName: "Gangbay-MAMACITA (LYRICS)",
    videoThumbnail:
      "https://i.ytimg.com/vi/WJRY8z5eJbU/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtAmAAtAFigIMCAAQARgyIFwoZTAP&rs=AOn4CLDekwC6VEeZIM6NL5sioGQXoiKIlA",
    channelName: "엠제이",
    channelProfile:
      "https://yt3.ggpht.com/ytc/APkrFKZIdrfAJo9_G4FlEi0GhWZaNjDxM9A8SozOpqFRQw=s88-c-k-c0x00ffffff-no-rj",
    views: "4.6M",
  },
  {
    videoId: "GMgoShD0zbw",
    videName: "enerel - zuulun zuulun zuseech /Lyrics",
    videoThumbnail:
      "https://i.ytimg.com/vi/GMgoShD0zbw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAR4DZv1CXHc1DJLV261vyqc19jaw",
    channelName: "Lsong Official",
    channelProfile:
      "https://yt3.googleusercontent.com/ytc/APkrFKZLSBDZwhRkyAYGdIqC4RwF9fGp3vEYNCnREtcf2A=s176-c-k-c0x00ffffff-no-rj",
    views: "244K",
  },
  {
    videoId: "jhQ4WVJwz7w",
    videName: "maye - Tú (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/jhQ4WVJwz7w/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEYoNzAP&rs=AOn4CLDU3OvyRgualKWe8YBwNVcupX3_-g",
    channelName: "maye",
    channelProfile:
      "https://yt3.googleusercontent.com/tAgbBbzd4-9k2GPBwidg5_AQI5ynxhsb4-tlzSwuzjYKdI5nlLsWFpBlw8nQsUzVlaPrK2ptMA=s176-c-k-c0x00ffffff-no-rj",
    views: "20M",
  },
  {
    videoId: "MoN9ql6Yymw",
    videName: "David Kushner - Daylight (Official Music Video)",
    videoThumbnail:
      "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuJjmMzVbKlpQPEEqAzDyul5uh8g",
    channelName: "David Kushner",
    channelProfile:
      "https://yt3.ggpht.com/8MAPqwGE6SCBB6kJWVn92mS4pnxeZlGmmzYAS81L_hXXivjac6Yii-WoiR-t3uBOrg7TAE_Y3Hc=s88-c-k-c0x00ffffff-no-nd-rj",
    views: "118M",
  },
];
