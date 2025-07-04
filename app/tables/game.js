import React from 'react'

function Game() {

    const games = [
  {
    id: 1001,
    mdate: "8 June 2012",
    stadium: "National Stadium, Warsaw",
    team1: "POL",
    team2: "GRE"
  },
  {
    id: 1002,
    mdate: "8 June 2012",
    stadium: "Stadion Miejski (Wroclaw)",
    team1: "RUS",
    team2: "CZE"
  },
  {
    id: 1003,
    mdate: "12 June 2012",
    stadium: "Stadion Miejski (Wroclaw)",
    team1: "GRE",
    team2: "CZE"
  },
  {
    id: 1004,
    mdate: "12 June 2012",
    stadium: "National Stadium, Warsaw",
    team1: "POL",
    team2: "RUS"
  }
];


    return (
        <div className='  mb-12 mt-16'>
            <p className='font-bold text-xl mb-2'>game</p>
            <table className=" divide-y border divide-gray-300 items-center">
                <thead className="bg-gray-100 ">
                    <tr>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">id</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">mdate</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">stadium</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">team1</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">team2</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {games.map((game) => (

                        <tr key={game.id}>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{game.id}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{game.mdate}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{game.stadium}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{game.team1}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{game.team2}</td>
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

export default Game;