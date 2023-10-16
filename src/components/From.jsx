export function From({index, user}) {
    return(
        <div key={index} className="flex text-white">
<img src={user.img}/>
<p>{user.name}</p>
        </div>
    )
}