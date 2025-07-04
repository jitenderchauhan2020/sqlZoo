import React from 'react'

function Eteam() {

const teams = [
  {
    id: "POL",
    teamname: "Poland",
    coach: "Franciszek Smuda"
  },
  {
    id: "RUS",
    teamname: "Russia",
    coach: "Dick Advocaat"
  },
  {
    id: "CZE",
    teamname: "Czech Republic",
    coach: "Michal Bilek"
  },
  {
    id: "GRE",
    teamname: "Greece",
    coach: "Fernando Santos"
  }
];




    return (
        <div className='  mb-24'>
            <p className='font-bold text-xl mb-2'>eteam</p>
            <table className=" divide-y border divide-gray-300 items-center">
                <thead className="bg-gray-100 ">
                    <tr>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">id</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">teamname</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">coach</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {teams.map((team) => (

                        <tr key={team.id}>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{team.id}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{team.teamname}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{team.coach}</td>
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

export default Eteam;