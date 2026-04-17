import { use } from "react";
import Friend from "./Friend";

const friendsPromise = fetch("/friendsData.json").then((res) => res.json());

const Friends = () => {
    const friends = use(friendsPromise);
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold my-5">Your Friends</h1>
            <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-6xl md:mb-20">
                {
                friends.map(friend=><Friend key={friend.id} friend={friend}/> )
            }
            </div>
        </div>
    );
};

export default Friends;