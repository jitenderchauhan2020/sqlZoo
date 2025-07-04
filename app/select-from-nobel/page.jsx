"use client"
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {updateQueryById, resetQueryById, markSubmitted, setStatus, setSeeHint} from '../store/slices/selectFromNobel'
import Link from 'next/link';
import Loader from '../components/Loader'
import Nobel from '../tables/Nobel'

function Page() {
  
const dispatch = useDispatch();
const data = useSelector(state => state.selectFromNobel);
const [contentHideToggle, setContentHideToggle] = useState(true);

const [loadingMap, setLoadingMap] = useState({});
const [query1Result, setQuery1Result] = useState({});

const handleQuery1 = async (item) => {
  
setLoadingMap(prev => ({ ...prev, [item.id]: true }));
const query1 = item.query;
const expectedResult = item.expectedQuery;

const params = new URLSearchParams({
  query: query1,
  expectedQuery: expectedResult
});

try {
  const res = await fetch(`/api/dataset?${params}`);
  const data = await res.json();
  console.log(data, "data");

  setQuery1Result(prev => ({
    ...prev,
    [item.id]: data
  }));

  // Dispatch status accordingly
  if (data.status === 200) {
    dispatch(markSubmitted({id : item.id}));
    dispatch(setStatus({ id: item.id, status: 200 }));
  } else if (data.status === 422) {
    dispatch(setStatus({ id: item.id, status: 422 }));
  } else if (data.status === 500) {
    dispatch(setStatus({ id: item.id, status: 500 }));
  }
} catch (error) {
  console.error("Error fetching data", error);
} finally {
  setLoadingMap(prev => ({ ...prev, [item.id]: false }));
}
};

const handleHintToggler = (item)=> {
  setQuery1Result(
    prev => ({
      ...prev,
      [item.id]: {
        ...prev[item.id],
        isHintShow: !prev[item.id]?.isHintShow
      }
    })
  )
}

const content = [
  "nobel Nobel Laureates",
  "Winners from 1950",
  "1962 Literature",
  "Albert Einstein",
  "Recent Peace Prizes",
  "Literature in the 1980's",
  "Only Presidents",
  "John",
  "Chemistry and Physics from different years",
  "Exclude Chemists and Medics",
  "Early Medicine, Late Literature",
  "Harder Questions",
  "Umlaut",
  "Apostrophe",
  "Knights of the realm",
  "Chemistry and Physics last"
];

const normalQuestions = data.filter(item => item.level === "normal")
const hardQuestions = data.filter(item => item.level === "hard")



return ( <div className='w-full px-12 py-3'> <div className='w-full rounded-md mb-3 bg-gray-200 p-1'><h1 className='text-3xl my-2 font-bold'>SELECT from Nobel Tutorial</h1></div> <div className='bg-blue-500 h-[3px] w-full mb-2'></div>

    <div className='flex justify-between mt-8'>
      
      <div className='mb-12 w-1/2 bg-gray-200 rounded-xl py-3 px-5'>
        <div className='flex justify-between items-center text-xl font-semibold bg-gray-200 py-2 rounded-md'>
          <p>Content</p>
          <p className='text-blue-800 cursor-pointer ' onClick={()=> setContentHideToggle(!contentHideToggle)} >Hide</p>
        </div>
        <div className='bg-blue-500 h-[3px] w-full mb-2'></div>

        <div>{ contentHideToggle&&
          <ol className='list-decimal list-inside pl-4 space-y-1'>
            {content.map((item, index) => (
              <li key={index} className='text-lg'>
                <Link className='text-blue-800 underline underline-offset-1' href={`/topic/${index}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ol>}
        </div>
      </div>
      <Nobel/>
    </div>

    <div className='mt-9 mb-6'>
      <p className='text-4xl my-2'><span className='border py-1 px-2 mr-2 bg-gray-100'>nobel</span>Nobel Laureates</p>
      <div className='bg-blue-500 h-[2px] w-full mb-2'></div>
      <p className='text-xl my-4 tracking-wide'>We continue practicing simple SQL queries on a single table.</p>
      <p className='text-xl my-4 tracking-wide'>This tutorial is concerned with a table of Nobel prize winners.</p>
      <p className='text-xl my-4 py-4 px-6 border bg-gray-100 w-96 tracking-wide font-mono'>nobel(yr, subject, winner)</p>
      <p className='text-xl mt-8 mb-36'>Using the <span className='border py-1 bg-gray-100 px-2 mr-2'>SELECT</span> statement.</p>
    </div>



    {/* Mapping the questions  */}
        {normalQuestions.map((item, index)=> {
          return (
            //heading wala part
          <div key={item.name || index} className=' gap-9 mb-[150px]'>
            <div className='mt-9 mb-6'>
              <p className='text-4xl my-2'>
                {item.highlightText ? (
                  <>
                    {item.headingPrefix}{" "}
                    <span className='text-blue-800 font-semibold rounded-md border px-1'>
                      {item.highlightText}
                    </span>{" "}
                    {item.headingSuffix}
                  </>
                ) : (
                  item.heading
                )}
              </p>
              <div className='bg-blue-500 h-[2px] w-full mb-2'></div>
            </div>
            
            <div className='flex gap-9 justify-between'>
              {/* Left part  */}
              <div className='w-1/2 py-5'>
                  <div className='flex justify-between items-center mb-6'>
                    <h1 className=' text-6xl '>{item.id}.</h1>
                    <p className={`px-4 py-1 text-md font-medium rounded-lg border shadow-sm ${
                        item.status === 200
                          ? "bg-green-300 text-green-900 border-green-500"
                          : "bg-gray-300 text-gray-800 border-gray-500"
                      }`}
                    >
                      {item.status === 200 ? "Solved" : "Not Solved"}
                    </p>

                  </div>

                  <p className='text-xl tracking-wide'>{item.explanation}</p>
                  <p className='font-bold my-4 text-xl'>{item.statement}</p>
                  <ul>
                    {item.points?.map((point, index) => (
                      <li key={index} className="text-lg list-disc list-inside">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <p onClick={() => handleHintToggler(item)} className='font-semibold my-4 text-blue-800 text-xl italic cursor-help'>{item.hintAbove}</p>
                  {query1Result[item.id]?.isHintShow && <p className=' my-4 text-xl cursor-help'>{item.hintBelow}</p>}

                  <textarea  value={item.query !== undefined ? item.query : (item.initialQuery || "")}
                    onChange={(e)=> dispatch(updateQueryById({id : item.id , query: e.target.value }))} required
                    className='w-full min-h-[150px] max-w-full font-mono p-2 border border-gray-300 rounded resize text-lg'
                    placeholder='Write your SQL query here...'
                  ></textarea>
                  <div className='mt-3'>

                  <button onClick={() => handleQuery1(item)}
                    className="rounded-md bg-blue-800 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Submit SQL </button>

                    <button onClick={()=>dispatch(resetQueryById({ id: item.id }))} className= " rounded-md bg-slate-600 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">Restore default</button>
                  </div>
                </div>  
                {/* //Right part  */}

                <div className=' min-w-1/3 bg-gray-200 border border-gray-300 rounded-xl shadow py-3 px-5'>
                {loadingMap[item.id] ? (
                  <div className="flex mb-2 items-center">
                    <div className="w-7 h-7 border-4 border-black border-dashed rounded-full animate-spin mr-3"></div>
                     <Loader/>
                  </div>
                ) : (
                  <p className='mb-2 font-semibold text-xl'>
                    {item.status === 404 && "Result"}
                    {item.status !== 404 && query1Result[item.id]?.message}
                  </p>
                )}



                  <div className='h-[2px] bg-gray-500 mb-4'></div>

                  {
                    item.status == 500 ? (
                      <p className='text-lg'>{query1Result[item.id]?.error}</p>
                    ): (
                      <div>
                      <table className=" divide-y border-collapse overflow-hidden border divide-gray-300">
                        <thead className="bg-gray-100 items-center">
                          <tr className=''>
                            {query1Result[item.id]?.columns?.map((column, index) => (
                              <th key={index} className="px-2 border py-2 font-semibold text-gray-700">{column.name}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {query1Result[item.id]?.rows?.slice(0, 7).map((row, i) => (
                            <tr className='border text-xl ' key={i}>
                              {Object.values(row).map((val, j) => (
                                <td className='border px-3 py-1 font-sans items-center' key={j}>{val}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {
                        item.status == 422 &&  <p onClick={()=>dispatch(setSeeHint({id : item.id}))} className='my-1 font-semibold text-blue-800 cursor-pointer'>Result looks like this</p>
                      }
                      { 
                        item.status !==200 && item.status !== 500 && item.status !== 404 && item.seeHint &&
                        <table  className=" divide-y border-collapse overflow-hidden border divide-gray-300">
                          <thead className="bg-gray-100 items-center">
                            <tr>
                              {query1Result[item.id]?.expectedColumns?.map((column, i) => (
                                <th className="px-2 border py-2 font-semibold text-gray-700" key={i}>{column.name}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {query1Result[item.id]?.expectedRows?.slice(0, 7).map((row, i) => (
                              <tr className='border  text-xl' key={i}>
                                {Object.values(row).map((val, j) => (
                                  <td className='border px-3 py-1 font-sans items-center' key={j}>{val}</td>
                                ))}
                              </tr>
                            )
                            )}
                          </tbody>
                        </table>
                      }
                      </div>
                    )
                  }
                  </div>
            </div>
          </div>
          )
        })}

        <p className='text-xl text-blue-800 hover:underline'><Link href={'/nobel-quiz'} >Nobel quiz</Link></p>

        {/* //harder section */}
        <div className='mt-9 mb-6'>
          <div className='flex'>
            <p className='text-4xl my-2'>⚡</p>
            <p className='text-4xl my-2'>Harder Questions</p>
          </div>
          <div className='bg-blue-500 h-[2px] w-full mb-2'></div>
        </div>

        {hardQuestions.map((item, index)=> {
          return (
            //heading wala part
          <div key={item.name || index} className=' gap-9 mb-[150px]'>
            <div className='mt-9 mb-6'>
              <p className='text-4xl my-2'>
                {item.highlightText ? (
                  <>
                    {item.headingPrefix}{" "}
                    <span className='text-blue-800 font-semibold rounded-md border px-1'>
                      {item.highlightText}
                    </span>{" "}
                    {item.headingSuffix}
                  </>
                ) : (
                  item.heading
                )}
              </p>
              <div className='bg-blue-500 h-[2px] w-full mb-2'></div>
            </div>
            
            <div className='flex gap-9 justify-between'>
              {/* Left part  */}
              <div className='w-1/2 py-5'>
                  <div className='flex justify-between items-center mb-6'>
                    <h1 className=' text-6xl '>{item.id}.</h1>
                    <p className={`px-4 py-1 text-md font-medium rounded-lg border shadow-sm ${
                        item.status === 200
                          ? "bg-green-300 text-green-900 border-green-500"
                          : "bg-gray-300 text-gray-800 border-gray-500"
                      }`}
                    >
                      {item.status === 200 ? "Solved" : "Not Solved"}
                    </p>

                  </div>

                  <p className='text-xl tracking-wide'>{item.explanation}</p>
                  <p className='font-bold my-4 text-xl'>{item.statement}</p>
                  <ul>
                    {item.points?.map((point, index) => (
                      <li key={index} className="text-lg list-disc list-inside">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <p onClick={() => handleHintToggler(item)} className='font-semibold my-4 text-blue-800 text-xl cursor-help italic'>{item.hintAbove}</p>
                  {query1Result[item.id]?.isHintShow && <div>
                    <p className=' mt-4 text-xl cursor-help'>{item.hintBelow}</p>
                    <p className='text-blue-500 underline mb-4 text-xl mt-1'><Link href={`https://en.wikipedia.org/wiki/%C3%9C#Keyboarding`}>{item.ref}</Link></p>
                  </div>}

                  { item.isLink &&
                  <div className="w-full my-18 max-w-md aspect-video">
                    <iframe
                      width="135%"
                      height="135%"
                      src="https://www.youtube.com/embed/9pfL0Hj1Axk"
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow"
                    ></iframe>
                  </div>
                  }

                  <textarea  value={item.query !== undefined ? item.query : (item.initialQuery || "")}
                    onChange={(e)=> dispatch(updateQueryById({id : item.id , query: e.target.value }))} required
                    className='w-full min-h-[150px] max-w-full font-mono p-2 border border-gray-300 rounded resize text-lg'
                    placeholder='Write your SQL query here...'
                  ></textarea>
                  <div className='mt-3'>

                  <button onClick={() => handleQuery1(item)}
                    className="rounded-md bg-blue-800 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Submit SQL </button>

                    <button onClick={()=>dispatch(resetQueryById({ id: item.id }))} className= " rounded-md bg-slate-600 py-2 px-4 border border-transparent text-center text-md text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">Restore default</button>
                  </div>
                  
                  

                </div>  
                {/* //Right part  */}

                <div className=' min-w-1/3 bg-gray-200 border border-gray-300 rounded-xl shadow py-3 px-5'>
                {loadingMap[item.id] ? (
                  <div className="flex mb-2 items-center">
                    <div className="w-7 h-7 border-4 border-black border-dashed rounded-full animate-spin mr-3"></div>
                     <Loader/>
                  </div>
                ) : (
                  <p className='mb-2 font-semibold text-xl'>
                    {item.status === 404 && "Result"}
                    {item.status !== 404 && query1Result[item.id]?.message}
                  </p>
                )}



                  <div className='h-[2px] bg-gray-500 mb-4'></div>

                  {
                    item.status == 500 ? (
                      <p className='text-lg'>{query1Result[item.id]?.error}</p>
                    ): (
                      <div>
                      <table className=" divide-y border-collapse overflow-hidden border divide-gray-300">
                        <thead className="bg-gray-100 items-center">
                          <tr className=''>
                            {query1Result[item.id]?.columns?.map((column, index) => (
                              <th key={index} className="px-2 border py-2 font-semibold text-gray-700">{column.name}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {query1Result[item.id]?.rows?.slice(0, 7).map((row, i) => (
                            <tr className='border text-xl ' key={i}>
                              {Object.values(row).map((val, j) => (
                                <td className='border px-3 py-1 font-sans items-center' key={j}>{val}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {
                        item.status == 422 &&  <p onClick={()=>dispatch(setSeeHint({id : item.id}))} className='my-1 font-semibold text-blue-800 cursor-pointer'>Result looks like this</p>
                      }
                      { 
                        item.status !==200 && item.status !== 500 && item.status !== 404 && item.seeHint &&
                        <table  className=" divide-y border-collapse overflow-hidden border divide-gray-300">
                          <thead className="bg-gray-100 items-center">
                            <tr>
                              {query1Result[item.id]?.expectedColumns?.map((column, i) => (
                                <th className="px-2 border py-2 font-semibold text-gray-700" key={i}>{column.name}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {query1Result[item.id]?.expectedRows?.slice(0, 7).map((row, i) => (
                              <tr className='border  text-xl' key={i}>
                                {Object.values(row).map((val, j) => (
                                  <td className='border px-3 py-1 font-sans items-center' key={j}>{val}</td>
                                ))}
                              </tr>
                            )
                            )}
                          </tbody>
                        </table>
                      }
                      </div>
                    )
                  }
                  </div>
            </div>
          </div>
          )
        })}
        
        




</div>

)
}

export default Page
