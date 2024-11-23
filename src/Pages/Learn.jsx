import React from 'react';
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { Link } from 'react-router-dom';

const Learn = () => {
    return (
        <div className='mt-40'>
            <h2 className='font-bold text-3xl text-center mb-16'>Let's Learn</h2>
            {/* // lessons */}
            <div className='mx-auto w-10/12'>
                <div className='grid grid-cols-3 gap-x-3 gap-y-8 justify-items-center *:bg-amber-300'>
                    <div className='flex flex-col gap-4 justify-center rounded-2xl px-10 py-8 text-xl font-medium w-10/12'>
                        <div>Lesson-1</div>
                        <MdOutlineSlowMotionVideo className='text-3xl' />
                    </div>
                    <div className='flex flex-col gap-4  justify-center rounded-2xl px-10 py-8 text-xl font-medium w-10/12'>
                        <div>Lesson-2</div>
                        <MdOutlineSlowMotionVideo className='text-3xl' />
                    </div>
                    <div className='flex flex-col gap-4 justify-center rounded-2xl px-10 py-8 text-xl font-medium w-10/12'>
                        <div>Lesson-3</div>
                        <MdOutlineSlowMotionVideo className='text-3xl' />
                    </div>
                    <div className='flex flex-col gap-4 justify-center rounded-2xl px-10 py-8 text-xl font-medium w-10/12'>
                        <div>Lesson-4</div>
                        <MdOutlineSlowMotionVideo className='text-3xl' />
                    </div>
                    <div className='flex flex-col gap-4  justify-center rounded-2xl px-10 py-8 text-xl font-medium w-10/12'>
                        <div>Lesson-5</div>
                        <MdOutlineSlowMotionVideo className='text-3xl' />
                    </div>
                    <div className='flex flex-col gap-4 justify-center rounded-2xl px-10 py-8 text-xl font-medium w-10/12'>
                        <div>Lesson-6</div>
                        <MdOutlineSlowMotionVideo className='text-3xl' />
                    </div>
                    <div className='flex flex-col gap-4 justify-center rounded-2xl px-10 py-8 text-xl font-medium w-10/12'>
                        <div>Lesson-7</div>
                        <MdOutlineSlowMotionVideo className='text-3xl' />
                    </div>
                    <div className='flex flex-col gap-4  justify-center rounded-2xl px-10 py-8 text-xl font-medium w-10/12'>
                        <div>Lesson-8</div>
                        <MdOutlineSlowMotionVideo className='text-3xl' />
                    </div>
                    <div className='flex flex-col gap-4 justify-center rounded-2xl px-10 py-8 text-xl font-medium w-10/12'>
                        <div>Lesson-9</div>
                        <MdOutlineSlowMotionVideo className='text-3xl' />
                    </div>
                    <div className='flex flex-col gap-4 justify-center rounded-2xl px-10 py-8 text-xl font-medium w-10/12'>
                        <div>Lesson-10</div>
                        <MdOutlineSlowMotionVideo className='text-3xl' />
                    </div>
                </div>
            </div>

            {/* // tutorial section */}
            <div className='my-20'>
                <h2 className='my-10 font-bold text-3xl text-center'>Tutorials</h2>
                <div className='bg-amber-300'>
                    <div className='grid grid-cols-[55%_40%] gap-12 mx-auto w-10/12 py-20'>
                        <div className='order-2'>
                            <iframe width="460" height="260" src="https://www.youtube.com/embed/GgNjKMxXTi8?si=Tma4FWZEHRqortie" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className='order-1 mt-6'>
                            <h2 className='text-4xl font-medium mb-10'>Learn the alphabets with Vocab point</h2>
                            <Link to="/tutorials" className='px-6 py-3 bg-zinc-800 text-white font-logo rounded-full text-lg'>View More</Link>
                        </div>
                    </div>
                </div>


            </div>

        </div >
    );
};

export default Learn;