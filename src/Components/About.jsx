import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-2 w-10/12 mx-auto my-32'>
            <div className='flex flex-col gap-4 mt-8'>
                <h2 className='text-3xl font-bold '>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, temporibus aliquid fugit sapiente minus officia exercitationem magnam repellat culpa veniam.</p>
                <div>
                    <button className='px-5 py-3 bg-zinc-800 text-white font-logo rounded-full text-sm'>Contact Us</button>
                </div>
            </div>
            <div>
                <img className='w-3/4 ml-auto' src="https://i.ibb.co.com/yRyQd0K/undraw-Teaching-re-g7e3-modified.png" />
            </div>
        </div>
    );
};

export default About;