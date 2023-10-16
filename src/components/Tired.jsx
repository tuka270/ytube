import Link from "next/link";

export function Tired({ index, user }) {
  return (
    <Link
      href={"/watch?videoId=" + user.videoId}
      key={index}
      className="w-[17.5%] h-[30%] mb-[3%] box-border"
    >
      <img
        src={user.videoThumbnail}
        className="box-border w-[100%] h-[72%] rounded-xl"
      />
      <div className="flex h-[30%]">
        <img
          src={user.channelProfile}
          className="w-[15%] h-[50%] rounded-[36px] mt-[5%]"
        />
        <div className="flex-col w-[80%] h-[70%] m-[5%] ">
          <p className="w-[100%] h-[50%] text-xl text-white box-border">
            {user.videName}
          </p>
          <div className="mt-[5%] w-[100%] h-[50%] box-border pt-[1%]">
            <p className="mt-[5%] text-sm text-white">{user.channelName}</p>
            <p className="mt-[1.5%] text-sm text-white">{user.views}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
