import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Review } from './Review';

function ReviewSection({listingId}) {
    const {currentUser} = useSelector(state => state.user);
    const [ review, setReview ] = useState('');
    const [ rating, setRating ] = useState('');
    const [ reviews, setReviews ] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if ( review.length > 200 ) {
            return;
        }

        try {
            const res = await fetch('/api/review/createreview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rating : rating, content: review, listingId, userRef: currentUser._id}),
            })
            const data = await res.json();
            if(res.ok) {
                setRating('');
                setReview('');  
                setReviews([data, ...reviews]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getReviews = async () => {
            try {
               const res = await fetch(`/api/review/getListingReview/${listingId}`);
               if ( res.ok ) {
                const data = await res.json();
                setReviews(data);
               }
            } catch (error) {
                console.log(error.message);
            }
        }
        getReviews();
    }, [listingId])
    console.log(reviews);
    
  return (
    <div className='max-w-2xl mx-auto w-full p-3'>
        {currentUser ?
        (
            <div className='flex items-center gap-1 my-5 text-gray-500 text-sm '>
                <p>Signed in as:</p>
                <img className='h-5 w-5 object-cover rounded-full' src={currentUser.avatar} alt="" />
                <Link to={'/profile'} className='text-sm text-cyan-600 hover:underline'>
                    @{currentUser.username}
                
                </Link>
            </div>
        ):
        (
            <div className='text-sm text-black my-5 flex gap-1'>
                You must be signed in to give your review.
                <Link className='text-blue-500 hover:underline' to={'/sign-in'}>Sign in</Link>
            </div>
        )}
        {
            currentUser && (
                <form onSubmit={handleSubmit} className='grid gap-2 border border-slate-500 rounded-md p-3'>
                    <input type="number" min="1" max="5" step="1" placeholder='Rating Out of 5'
                    onChange={(e) => setRating(e.target.value)} value={rating}/>
                    <textarea 
                    placeholder='Add a review...'
                    rows='3'
                    cols='25'
                    maxLength='200'
                    onChange={(e) => setReview(e.target.value)} 
                    value={review}></textarea>
                    <div className='flex justify-between items-center mt-1'>
                        <p className='text-gray-500 text-s'>{200 - review.length} characters remaining</p>
                        <button type='submit'
                            className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                            submit
                        </button>
                    </div>
                    

                </form>
            )
        }

        {
            reviews.length === 0 ? (
                <p className='text-sm my-5'>No reviews yet!</p>
            ) : (
                <>
                <div className="text-sm my-5 flex items-center gap-1">
                    <p className='text-slate-800 font-semibold'>Reviews</p>
                    <div className="border border-gray-500 py-1 px-2 rounded-sm">
                        <p>{reviews.length}</p>
                    </div>
                </div>
                {
                    reviews.map(revi => (
                        <Review key={revi._id}  revi={revi}/>
                    ))
                }
                </>
            )
        }
    </div>
  )
}

export default ReviewSection