export function Item({ index, user }) {
  return (
    <div key={index} className="text-white w-[4%] h-[40%] border-solid border-[1px] border-white text-lg bg-neutral-800 rounded-[35px] flex justify-center items-center mr-[0.8%]">
      {user.text}
    </div>
  );
}
