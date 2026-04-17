import React from 'react';

const Friend = ({key,friend}) => {
    return (
        <div key={key} className='shadow-xl flex flex-col items-center  text-center rounded-lg my-10 py-5'>
            <div>
            <img className='w-20 rounded-full' src={friend.picture} alt="" />
        </div>
        <h1 className='text-xl font-bold pt-5'>{friend.name}</h1>
        <p>{friend.days_since_contact}d ago</p>
        <div className='flex'>
            {
                friend.tags.map((tag,index) => 
                <p className='bg-green-200 m-2 px-2 rounded-full' key={index} tag={tag} >{tag}</p>
                )
            }
        </div>

        <p className={`px-2  my-5 rounded-full text-white ${ 
            friend.status=== "overdue"
            ? "bg-red-600"
            : friend.status === "upcoming"
            ? "bg-yellow-600"
            : "bg-green-800"}`}>{friend.status}</p>
        </div>
    );
};

export default Friend;