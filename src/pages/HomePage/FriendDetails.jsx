import { Archive, BellRing, Mail, PhoneCall, Trash2, Video } from 'lucide-react';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const {id} = useParams()

    const friends = useLoaderData()

    const expectedFriend = friends.find(friend => friend.id === Number(id))
    
    const {name,picture,email,days_since_contact,status,tags,bio,goal,next_due_date} = expectedFriend ;

    return (
        <div className='mx-auto my-10'>
            <div className='mx-auto max-w-6xl md:flex justify-center gap-10 p-5'>
            {/* part-1  */}
            <div>
                <div className='shadow-sm flex flex-col items-center  text-center py-2 max-w-80 mb-5'>
         <div>
            <img className='w-20 rounded-full' src={picture} alt="" />
        </div>
        <h1 className='text-xl font-bold py-2'>{name}</h1>

        <p className={`px-2 my-1 rounded-full text-white ${ 
            status=== "overdue"
            ? "bg-red-600"
            : status === "upcoming"
            ? "bg-yellow-600"
            : "bg-green-800"}`}>{status}
        </p>
        <div className='flex'>
            {
                tags.map((tag,index) => 
                <p className='bg-green-200 m-2 px-2 rounded-full' key={index} tag={tag} >{tag}</p>
                )
            }
        </div>
        <p className='italic py-2'>{bio}</p>
        <h4>Email : {email}</h4>  
        </div>

        <div className='flex flex-col gap-4'>
        <button className='btn w-80 bg-white shadow-sm'><BellRing/> Snooze 2 Weeks</button>
        <button className='btn w-80 bg-white shadow-sm '><Archive/> Archive</button>
        <button className='btn w-80 bg-white shadow-sm '><Trash2/> Delete</button>
        </div>
     </div>
     {/* part-2  */}
     <div>
         <div className='flex justify-center gap-8 py-2 '>
                <div className='text-center w-40 shadow-sm py-5'>
                    <h1 className='text-xl font-bold'>{days_since_contact}</h1>
                    <p className='mt-2'>Day Since Contact</p>
                </div>
                <div className='text-center w-40 shadow-sm py-5'>
                    <h1 className='text-xl font-bold'>{goal}</h1>
                    <p className='mt-2'>Goal(Days)</p>
                </div>
                <div className='text-center w-40 shadow-sm py-5'>
                    <h1 className='text-xl font-bold'>{next_due_date}</h1>
                    <p className='mt-2'>Next Due</p>
                </div>
            </div>

            <div className=' flex justify-between shadow-sm p-5 my-5'>
                <div className='space-y-5'>
                    <h1 className='text-green-900 text-xl font-semibold '>Relationship Goal</h1>
                    <p>Connect Every <span className='font-bold'>{goal} Days</span></p>
                </div>
                <button className='btn btn-active'>Edit</button>
            </div>
            <div className='shadow-sm p-5 '>
                <h1 className='text-2xl font-bold text-green-900 py-5'>Quick Check-In </h1>
                <div className='flex gap-4'>
                    {/* call btn  */}
                <div className='text-center bg-base-200 p-5 w-40 '>
                    <div className='flex justify-center'>
                    <PhoneCall/>
                    </div>
                    <p>Call</p>
                </div>
                {/* text-btn  */}
                <div className='text-center bg-base-200 p-5 w-40 '>
                    <div className='flex justify-center'>
                    <Mail/>
                    </div>
                    <p>Text</p>
                </div>
                {/* video-btn  */}
                <div className='text-center bg-base-200 p-5 w-40'>
                    <div className='flex justify-center'>
                    <Video/>
                    </div>
                    <p>Video</p>
                </div>
                </div>
            </div>
     </div>
        </div>
        </div>
    );
};

export default FriendDetails;