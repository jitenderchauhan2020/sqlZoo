"use client"
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {updateQueryById, resetQueryById, markSubmitted, setStatus, setSeeHint} from '../store/slices/selectBasics'
import Loader from '../components/Loader'

function Page() {
const dispatch = useDispatch();
//will remove later
// const \[activeId, setActiveId] = useState();

// const queryData = useSelector(state =>
//   state.selectBasics.find(item => item.id === activeId)
// );

// data for rendering
const data = useSelector(state => state.selectBasics);
const countryData = [
{
"name": "Afghanistan",
"continent": "Asia",
"area": 652230,
"population": 38928346,
"gdp": 20300000000
},
{
"name": "Albania",
"continent": "Europe",
"area": 28748,
"population": 2877797,
"gdp": 15100000000
},
{
"name": "Algeria",
"continent": "Africa",
"area": 2381741,
"population": 43851044,
"gdp": 172000000000
},
{
"name": "Andorra",
"continent": "Europe",
"area": 468,
"population": 77265,
"gdp": 3300000000
},
{
"name": "Angola",
"continent": "Africa",
"area": 1246700,
"population": 32866272,
"gdp": 105000000000
}
]

const [loadingMap, setLoadingMap] = useState({});
const [query1Result, setQuery1Result] = useState({});
// const \[hintToggle, setHintToggle] = useState(false);
// const \[seeHint, setSeeHint] = useState(false);

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

return ( <div className='w-full px-12 py-3'> <div className='w-full rounded-md mb-3 bg-gray-300 p-1'><h1 className='text-3xl my-2 font-bold'>SELECT Basics</h1></div> <div className='bg-blue-500 h-[3px] w-full mb-2'></div>

  <div className=' my-4 mb-12'>
    <p className='font-bold text-xl mb-2'>World</p>
    <table className=" divide-y border divide-gray-300 items-center">
      <thead className="bg-gray-100 ">
        <tr>
          <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">Country</th>
          <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">Continent</th>
          <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">Area</th>
          <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">Population</th>
          <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">GDP</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {countryData.map((country, index) => (
          <tr key={index}>
            <td className="px-4 border text-left py-2 text-lg text-gray-700">{country.name}</td>
            <td className="px-4 border text-left py-2 text-lg text-gray-700">{country.continent}</td>
            <td className="px-4 border text-left py-2 text-lg text-gray-700">{country.area}</td>
            <td className="px-4 border text-left py-2 text-lg text-gray-700">{country.population}</td>
            <td className="px-4 border text-left py-2 text-lg text-gray-700">{country.gdp}</td>
          </tr>
        ))}
        <tr>
          <td className="px-4 py-2 font-bold text-gray-600" colSpan="5">.....</td>
        </tr>
      </tbody>
    </table>
  </div>

        

    {/* Mapping the questions  */}
        {data.map((item, index)=> {
          return (
            //heading wala part
          <div key={item.id} className=' gap-9 mb-[150px]'>
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
                  <textarea  value={item.query !== undefined ? item.query : (item.initialQuery || "")}
                    onChange={(e)=> dispatch(updateQueryById({id : item.id , query: e.target.value }))} required
                    className='w-full min-h-[100px] max-w-full p-2 border border-gray-300 rounded resize text-lg'
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
                        <thead className="bg-gray-100 text-left">
                          <tr className=''>
                            {query1Result[item.id]?.columns?.map((column, index) => (
                              <th key={index} className="px-2 border py-2 font-semibold text-gray-700">{column.name}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {query1Result[item.id]?.rows?.slice(0, 7).map((row, i) => (
                            <tr className='border p-1' key={i}>
                              {Object.values(row).map((val, j) => (
                                <td className='border p-1 items-center' key={j}>{val}</td>
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
                          <thead className="bg-gray-100">
                            <tr>
                              {query1Result[item.id]?.expectedColumns?.map((column, i) => (
                                <th className="px-2 border py-2  font-semibold text-gray-700" key={i}>{column.name}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {query1Result[item.id]?.expectedRows?.slice(0, 7).map((row, i) => (
                              <tr className='border p-1' key={i}>
                                {Object.values(row).map((val, j) => (
                                  <td className='border p-1 items-center' key={j}>{val}</td>
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
