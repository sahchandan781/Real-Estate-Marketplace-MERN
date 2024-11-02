import React, { useEffect,useState } from 'react'
import moment from 'moment'

export const Review = ({revi}) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(`/api/user/${revi.userRef}`);
                const data = await res.json();
                if( res.ok) {
                    setUser(data);
                }

                
            } catch (error) {
                console.log(error)
            }
        }
        getUser();
    }, [revi]);
    console.log(user);
    
  return (
    <div className='flex p-4 border-b border-slate-600 text-sm'> 
        <div className='flex-shrink-0 mr-3'>
            <img className='w-10 h-10 rounded-full bg-gray-200'
            src={user.avatar} alt={user.username} />
        </div>
        <di className='flex-1'>
            <div className='flex gap-1 items-center mb-1'>
                <span className='font-bold mr-1 text-xs truncate'
                >{user ? `@${user.username}` : 'anonymous user'}</span>
                <span className='text-slate-500 text-xs'>
                    {moment(revi.createdAt).fromNow()}
                </span>
                
                <span className='text-s ml-5 font-bold text-slate-500'>{revi.rating}⭐</span>
                
            </div>
            
            <p className='text-slate-500 pb-2'>{revi.content}</p>
        </di>
    </div>
  )
}
