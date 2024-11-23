import React from 'react';
import CountUp from 'react-countup';
import { MdOutlinePlayLesson } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import { TbVocabulary } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";




const Success = () => {
    return (
        <div className='bg-amber-200 py-16 my-20'>
            <div className='grid grid-cols-4 justify-center items-center mx-auto w-10/12'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='text-5xl'><FaRegUser /></div>
                    <div className='text-2xl font-bold'><CountUp end={100} /></div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='text-5xl'><MdOutlinePlayLesson /></div>
                    <div className='text-2xl font-bold'><CountUp end={100} /></div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='text-5xl'><TbVocabulary /></div>
                    <div className='text-2xl font-bold'><CountUp end={100} /></div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='text-5xl'><MdOutlineVideocam /></div>
                    <div className='text-2xl font-bold'><CountUp end={100} /></div>
                </div>



            </div>
        </div>
    );
};

export default Success;