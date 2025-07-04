import React from 'react'
import Link from 'next/link';
function Example1() {

const matchData = [
  { mdate: "1 July 2012", team1: "ESP", score1: 4, team2: "ITA", score2: 0 },
  { mdate: "10 June 2012", team1: "ESP", score1: 1, team2: "ITA", score2: 1 },
  { mdate: "10 June 2012", team1: "IRL", score1: 1, team2: "CRO", score2: 3 },
];



    return (
        <div className=' my-4 mb-5'>
            <p className=' text-xl mb-4 mt-4 font-bold'>List every match with the goals scored by each team as shown. This will use "<span className='text-blue-800 px-2'><Link href={'/case'}>CASE WHEN</Link></span>" which has not been explained in any previous exercises.</p>
            <table className=" divide-y border divide-gray-300 items-center">
                <thead className="bg-gray-100 ">
                    <tr>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">mdate</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">team1</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">score1</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">team2</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">score2</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {matchData.map((match, index) => (
                        <tr key={index}>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{match.mdate}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{match.team1}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{match.score1}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{match.team2}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{match.score2}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className="px-4 py-2 font-bold text-gray-600" colSpan="">.....</td>
                    </tr>
                </tbody>
            </table>
            <p className=' text-xl mb-4 mt-4 '>Notice in the query given every goal is listed. If it was a team1 goal then a 1 appears in score1, otherwise there is a 0. You could SUM this column to get a count of the goals scored by team1. <span className="font-bold" >Sort your result by mdate, matchid, team1 and team2.</span></p>
        </div>
    )
}

export default Example1;
