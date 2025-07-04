import React from 'react'

function World() {

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

    return (
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
    )
}

export default World;