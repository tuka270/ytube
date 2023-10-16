import Link from "next/link"

export function Head(props){
    return(
        <div className="w-[100%] h-[6%] bg-neutral-900 justify-between flex">
        <div className="w-[15%] h-[100%] flex justify-around flex items-center">
          <img src="./three.png" className="w-[8%] h-[23%]"/>
          <Link href={"/"} className="w-[51%] h-[50%]">
          <img src="./Group.png" className="w-[100%] h-[100%]" onClick={()=>props.YouTube()} />
          </Link>
        </div>
        <div className="w-[40%] h-[100%] flex justify-center items-center">
      <input type="text" placeholder="Search.." name="search" className="w-[60%] h-[60%] bg-black text-white"/>
      <button type="submit" className="w-[10%] h-[60%] bg-neutral-800 flex justify-center items-center"><img src="./search.png"/></button>
        </div>
        <div className="w-[20%] h-[100%] flex justify-around items-center ">
          <img src="./vid.png" className="w-[6%] h-[25%]"/>
          <img src="./box.png" className="w-[6%] h-[25%]"/>
          <img src="./bell.png" className="w-[6%] h-[25%]"/>
          <img src="./pfp2.png" className="rounded-[36px]"/>
        </div>
      </div>
    )
}       