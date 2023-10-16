export function Subs({index, user}) {
    return(
        <div key={index} className="flex text-white">
            <img src={user.pfp} className="rounded-[36px]"/>
                <p>{user.name}</p>
        </div>
    )
}