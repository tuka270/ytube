"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function Bott() {
  const [data, setData] = useState();
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoId");

  const fetchData = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyA4olTydX1H2ByIRxQAQBBuQWX307qChgQ`
    ).then((res) => res.json());
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, [videoId]);

  console.log(data);
  return (
    <div className="flex items-center mt-[2%] w-[100%] h-[7%]">
      <img src="pfp1.png" className="w-[4.5%] h-[53%] rounded-full mr-[2%]" />
      <div className="mr-[2%]">
        <p className="text-xl">{data?.items?.[0]?.snippet?.channelTitle}</p>
        <p className="text-l">885K subscribers</p>
      </div>
      <button className="w-[13%] h-[55%] text-l rounded-full bg-black">
        Subscribe
      </button>
      <div className="w-[40%] h-[55%] flex justify-around ml-[25%]">
        <button className="flex bg-zinc-800 w-[32%] h-[90%] rounded-full items-center p-[2%]">
          <img src="like.png" className="w-[15%] h-[65%] mr-[10%]" />
          <p className="mr-[7%]">{data?.items?.[0]?.statistics?.likeCount}</p>|
          <img src="dislike.png" className="w-[15%] h-[65%] ml-[9%]" />
        </button>
        <button className="flex bg-zinc-800 w-[23%] h-[90%] rounded-full items-center p-[2%] text-white">
          <img src="share.png" className="w-[30%] h-[65%] mr-[10%] ml-[5%]" />
          <p>Share</p>
        </button>
        <button className="flex bg-zinc-800 w-[23%] h-[90%] rounded-full items-center p-[2%] text-white">
          <img src="save.png" className="w-[30%] h-[65%] mr-[10%] ml-[5%]" />
          <p>Save</p>
        </button>
      </div>
    </div>
  );
}
