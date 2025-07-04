import React from 'react'

function Nobel() {

    const nobelData = [
        {
            "id": 1,
            "yr": 1901,
            "category": "chemistry",
            "name": "Jacobus Henricus van 't Hoff",
            "County": "the Netherlands"
        },
        {
            "id": 2,
            "yr": 1901,
            "category": "literature",
            "name": "Sully Prudhomme",
            "County": "France"
        },
        {
            "id": 8,
            "yr": 1902,
            "category": "literature",
            "name": "Christian Matthias Theodor Mommsen",
            "County": "Schleswig (now Germany)"
        },
        {
            "id": 9,
            "yr": 1902,
            "category": "medicine",
            "name": "Ronald Ross",
            "County": "India"
        },
        {
            "id": 10,
            "yr": 1902,
            "category": "peace",
            "name": "Charles Albert Gobat",
            "County": "Switzerland"
        }
    ]

    return (
        <div className='  mb-12'>
            <p className='font-bold text-xl mb-2'>nobel</p>
            <table className=" divide-y border divide-gray-300 items-center">
                <thead className="bg-gray-100 ">
                    <tr>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">yr</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">category</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">winner</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {nobelData.map((prize) => (

                        <tr key={prize.id}>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{prize.yr}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{prize.category}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{prize.name}</td>
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

export default Nobel;