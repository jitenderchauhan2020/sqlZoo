"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

function LeftBar() {

    const submittedCountSelectBasics = useSelector((state) =>
        state.selectBasics.filter((q) => q.isSubmitted).length / 3 * 100
    );

    const submittedCountWorld = useSelector((state) =>
        state.selectFromWorld.filter((q) => q.isSubmitted).length / 13 * 100
    );

    const submittedCountNobel = useSelector((state) =>
        state.selectFromNobel.filter((q) => q.isSubmitted).length / 14 * 100
    );

    const submittedCountSelectInSelect = useSelector((state) =>
        state.selectInSelect.filter((q) => q.isSubmitted).length / 10 * 100
    );

    const submittedCountSumAndCount = useSelector((state) =>
        state.sumAndCount.filter((q) => q.isSubmitted).length / 8 * 100
    )

    const submittedCountJoin = useSelector((state) =>
        state.joinOperation.filter((q) => q.isSubmitted).length / 13 * 100
    )

    const submittedCountMoreJoin = useSelector((state) =>
        state.moreJoinOperation.filter((q) => q.isSubmitted).length / 15 * 100
    )




    useEffect(() => {
        console.log(submittedCountSelectBasics);
    }, [ submittedCountSelectBasics, submittedCountWorld ]);




    return (
        <div className='flex flex-col bg-gray-900  w-1/5 h-auto'>
            <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <Image
                    src="/OLEWF20.jpeg"
                    alt="Picture of the author"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className='px-5 pt-7'>
                <div className='flex flex-col bg-gray-200 opacity-95 rounded-md p-3'>
                    <div className='w-full h-[2px] bg-gray-500  my-5'></div>

                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/select-basics' >SELECT Basics</Link>
                        <div className='h-3 border-1 border-blue-700 bg-white w-full rounded-4xl'>
                            <div className='transition-all h-full duration-500  bg-blue-700 ease-in-out rounded-4xl'
                                style={{ width: `${submittedCountSelectBasics}%` }}></div>
                        </div>
                    </div>

                    {/* //quiz */}
                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/404' >quiz</Link>
                        <input type='range' />
                    </div>

                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/select-from-world-tutorial' >SELECT from world</Link>
                        <div className='h-3 border-1 border-blue-700 bg-white w-full rounded-4xl'>
                            <div className='transition-all h-full duration-500  bg-blue-700 ease-in-out rounded-4xl'
                                style={{ width: `${submittedCountWorld}%` }}></div>
                        </div>
                    </div>
                    {/* quiz  */}
                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/404' >quiz</Link>
                        <input type='range' />
                    </div>

                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/select-from-nobel' >SELECT from nobel</Link>
                        <div className='h-3 border-1 border-blue-700 bg-white w-full rounded-4xl'>
                            <div className='transition-all h-full duration-500  bg-blue-700 ease-in-out rounded-4xl'
                                style={{ width: `${submittedCountNobel}%` }}></div>
                        </div>
                    </div>
                    {/* quiz   */}
                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/404' >quiz</Link>
                        <input type='range' />
                    </div>

                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/select-in-select' >SELECT in SELECT</Link>
                        <div className='h-3 border-1 border-blue-700 bg-white w-full rounded-4xl'>
                            <div className='transition-all h-full duration-500  bg-blue-700 ease-in-out rounded-4xl'
                                style={{ width: `${submittedCountSelectInSelect}%` }}></div>
                        </div>
                    </div>
                    {/* select in select quiz  */}
                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/404' >quiz</Link>
                        <input type='range' />
                    </div>
                    

                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/sum-and-count' >SUM and COUNT</Link>
                        <div className='h-3 border-1 border-blue-700 bg-white w-full rounded-4xl'>
                            <div className='transition-all h-full duration-500  bg-blue-700 ease-in-out rounded-4xl'
                                style={{ width: `${submittedCountSumAndCount}%` }}></div>
                        </div>
                    </div>

                    {/* //sum and count quiz  */}
                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/404' >quiz</Link>
                        <input type='range' />
                    </div>

                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/join' >JOIN</Link>
                        <div className='h-3 border-1 border-blue-700 bg-white w-full rounded-4xl'>
                            <div className='transition-all h-full duration-500  bg-blue-700 ease-in-out rounded-4xl'
                                style={{ width: `${submittedCountJoin}%` }}></div>
                        </div>
                    </div>

                    {/* //join quiz */}
                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/404' >quiz</Link>
                        <input type='range' />
                    </div>

                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/more-join' >More JOIN</Link>
                        <div className='h-3 border-1 border-blue-700 bg-white w-full rounded-4xl'>
                            <div className='transition-all h-full duration-500  bg-blue-700 ease-in-out rounded-4xl'
                                style={{ width: `${submittedCountMoreJoin}%` }}></div>
                        </div>
                    </div>

                    {/* //more join quiz  */}
                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/404' >quiz</Link>
                        <input type='range' />
                    </div>
                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/using-null' >Using NULL</Link>
                        <input type='range' />
                    </div>
                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/404' >quiz</Link>
                        <input type='range' />
                    </div>
                    <div className='flex flex-col text-blue-900 mb-4'>
                        <Link href='/self-join' >self JOIN</Link>
                        <input type='range' />
                    </div>
                    <div className='flex flex-col  text-blue-900 mb-4'>
                        <Link href='/404' >quiz</Link>
                        <input type='range' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LeftBar