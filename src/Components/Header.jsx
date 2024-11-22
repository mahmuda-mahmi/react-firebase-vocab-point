import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='bg-[url(https://i.ibb.co.com/hM0h0sR/pexels-neosiam-625219.jpg)] bg-cover bg-center bg-no-repeat pb-20 pt-40'>
                        <div className='font-logo text-white w-10/12 mx-auto'>
                            <div className='w-10/12'>
                                <h3 className='text-lg font-light'>Lorem ipsum dolor sit amet.</h3>
                                <h1 className='text-5xl font-bold mb-8 leading-snug'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, iusto?</h1>
                                <p className='text-sm mt-8 mb-10 w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, blanditiis, autem vel minus ducimus est, doloremque libero praesentium voluptate nulla sed sit deleniti tempore eius saepe veritatis eligendi. Pariatur neque quis vitae inventore ea debitis consequuntur iure? Deserunt, tempore culpa!
                                </p>
                                <Link to="/login" className='px-4 py-3 text-zinc-800 bg-white font-logo rounded-full'>Enroll Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(https://i.ibb.co.com/bXwjMWc/pexels-olia-danilevich-5088017.jpg)] bg-cover bg-center bg-no-repeat pb-20 pt-40'>
                        <div className='font-logo text-white w-10/12 mx-auto'>
                            <div className='w-10/12'>
                                <h3 className='text-lg font-light'>Lorem ipsum dolor sit amet.</h3>
                                <h1 className='text-5xl font-bold mb-8 leading-snug'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, iusto?</h1>
                                <p className='text-sm mt-8 mb-10 w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, blanditiis, autem vel minus ducimus est, doloremque libero praesentium voluptate nulla sed sit deleniti tempore eius saepe veritatis eligendi. Pariatur neque quis vitae inventore ea debitis consequuntur iure? Deserunt, tempore culpa!
                                </p>
                                <Link to="/login" className='px-4 py-3 text-zinc-800 bg-white font-logo rounded-full'>Enroll Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(https://i.ibb.co.com/2KnGd08/pexels-stasknop-3760323.jpg)] bg-cover bg-center bg-no-repeat pb-20 pt-40'>
                        <div className='font-logo text-white w-10/12 mx-auto'>
                            <div className='w-10/12'>
                                <h3 className='text-lg font-light'>Lorem ipsum dolor sit amet.</h3>
                                <h1 className='text-5xl font-bold mb-8 leading-snug'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, iusto?</h1>
                                <p className='text-sm mt-8 mb-10 w-10/12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, blanditiis, autem vel minus ducimus est, doloremque libero praesentium voluptate nulla sed sit deleniti tempore eius saepe veritatis eligendi. Pariatur neque quis vitae inventore ea debitis consequuntur iure? Deserunt, tempore culpa!
                                </p>
                                <Link to="/login" className='px-4 py-3 text-zinc-800 bg-white font-logo rounded-full'>Enroll Now</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Header;