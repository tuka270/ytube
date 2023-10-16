export function Library({index, user}){
    return(
        <div key={index} className="text-white flex">
                <img src={user.img} />
                <p>{user.name}</p>
              </div>
    )
}