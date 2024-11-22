import React from 'react';

const About = () => {
    return (
        <div className='grid grid-cols-2 w-10/12 mx-auto'>
            <div>
                <h2 className='text-xl font-bold '>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, temporibus aliquid fugit sapiente minus officia exercitationem magnam repellat culpa veniam.</p>
                <button className='px-4 py-2 bg-zinc-800 text-white font-logo rounded-full text-sm'>Contact Us</button>
            </div>
            <div>
                <img src="https://i.ibb.co.com/gR1BPc4/undraw-Teaching-re-g7e3.png" />
            </div>
        </div>
    );
};

export default About;