import React from 'react'

function Example1() {

    const countryData = [
  { name: "Albania", percentage: "3%" },
  { name: "Andorra", percentage: "0%" },
  { name: "Austria", percentage: "11%" }
];



    return (
        <div className=' my-4 mb-5'>
            <p className=' text-xl mb-4 italic mt-8'>The format should be Name, Percentage for example:</p>
            <table className=" divide-y border divide-gray-300 items-center">
                <thead className="bg-gray-100 ">
                    <tr>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">name</th>
                        <th className="px-2 border py-2 text-left text-lg font-semibold text-gray-700">population</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {countryData.map((country, index) => (
                        <tr key={index}>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{country.name}</td>
                            <td className="px-4 border text-left py-2 text-lg text-gray-700">{country.percentage}</td>
                        </tr>
                    ))}
                    <tr>
                        <td className="px-4 py-2 font-bold text-gray-600" colSpan="">.....</td>
                        <td className="px-4 py-2 font-bold text-gray-600" colSpan="">.....</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Example1;