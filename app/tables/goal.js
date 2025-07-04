import React from 'react'

function Goal() {

const goals = [
  {
    matchid: 1001,
    teamid: "POL",
    player: "Robert Lewandowski",
    gtime: 17
  },
  {
    matchid: 1001,
    teamid: "GRE",
    player: "Dimitris Salpingidis",
    gtime: 51
  },
  {
    matchid: 1002,
    teamid: "RUS",
    player: "Alan Dzagoev",
    gtime: 15
  },
  {
    matchid: 1002,
    teamid: "RUS",
    player: "Roman Pavlyuchenko",
    gtime: 82
  }
];



    return (
        <div className='  mb-12'>
            <p className='font-bold text-xl mb-2'>goal</p>
            <table className=" divide-y border divide-gray-300 items-center">
                <thead className="bg-gray-100 ">
                    <tr>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">matchid</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">teamid</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">player</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">gtime</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {goals.map((goal) => (
                        <tr key={goal.gtime}>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{goal.matchid}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{goal.teamid}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{goal.player}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{goal.gtime}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className="px-4 py-2 font-bold text-gray-600" colSpan="5">.....</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Goal;