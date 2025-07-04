
"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    heading : `Introduction`,
    explanation: `Read the notes about this table. Observe the result of running this SQL command to show the name, continent and population of all countries.`,
    statement: ``,
    hintAbove: "",
    hintBelow : '',
    initialQuery: `SELECT name, continent, population FROM world`,
    expectedQuery: `SELECT name, continent, population FROM world`,
    isSubmitted: false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT name, continent, population FROM world`,
    isLink : "",
  },
  {
    id: 2,
    heading: `Large Countries`,
    explanation: `How to use WHERE to filter records. Show the name for the countries that have a population of at least 200 million.`,
    statement: ``,
    hintAbove: "",
    hintBelow : '',
    initialQuery: `SELECT name FROM world WHERE population = 64105700`,
    expectedQuery: `SELECT name FROM world WHERE population >= 200000000`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT name FROM world WHERE population = 64105700`,
    isLink : "",
    points : ["200 million is 200000000, there are eight zeros."]

  },
  {
    id : 3,
    heading : `Per capita GDP`,
    explanation : `Give the name and the per capita GDP for those countries with a population of at least 200 million.`,
    statement : ``,
    hintAbove : "HELP: How to calculate per capita GDP",
    hintBelow : 'per capita GDP is the GDP divided by the population GDP/population',
    initialQuery : ``,
    expectedQuery : `Select name, gdp/population from world where population >= 200000000`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : "https://www.youtube.com/watch?v=5Md75Wfpocs&feature=youtu.be",
  },
  {
    id : 4,
    heading : `South America In millions`,
    explanation : `Show the name and population in millions for the countries of the continent 'South America'. Divide the population by 1000000 to get population in millions.`,
    statement : ``,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `Select name, population/1000000 from world 
    where continent = 'South America'`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
  } , 
  {
    id : 5,
    heading : `France, Germany, Italy`,
    explanation : `Show the name and population for France, Germany, Italy`,
    statement : ``,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `select name, population from world where name in ('France', 'Germany', 'Italy')`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
  } , 
  {
    id : 6,
    heading : `United`,
    explanation : `Show the countries which have a name that includes the word 'United'`,
    statement : ``,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `select name from world where name like '%United%'`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
  } , 
  {
    id : 7,
    heading : `Two ways to be big`,
    explanation : `Two ways to be big: A country is big if it has an area of more than 3 million sq km or it has a population of more than 250 million.`,
    statement : `Show the countries that are big by area or big by population. Show name, population and area.`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT name, population, area FROM world WHERE area > 3000000 OR population > 250000000`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
  } , 
  {
    id : 8,
    heading : `One or the other (but not both)`,
    explanation : ``,
    statement : `Exclusive OR (XOR). Show the countries that are big by area (more than 3 million) or big by population (more than 250 million) but not both. Show name, population and area.`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT name, population, area FROM world WHERE (area > 3000000 AND population <= 250000000) OR (population > 250000000 AND area <= 3000000)`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    points : ["Australia has a big area but a small population, it should be included.",
    "Indonesia has a big population but a small area, it should be included.",
    "China has a big population and big area, it should be excluded.",
    "United Kingdom has a small population and a small area, it should be excluded."
  ]
  } , 
  {
    id : 9,
    heading : `Rounding`,
    explanation : `Show the name and population in millions and the GDP in billions for the countries of the continent 'South America'. Use the ROUND function to show the values to two decimal places.`,
    statement : `For Americas show population in millions and GDP in billions both to 2 decimal places.`,
    hintAbove : 'Missing decimals',
    hintBelow : 'For some version of SQL the division of an integer by an integer will be an integer. One way to prevent this is to divide by a floating point number such as 1000000.0.',
    initialQuery : ``,
    expectedQuery : `SELECT name, ROUND(population / 1000000.0, 2) AS population_millions,
                      ROUND(gdp / 1000000000.0, 2) AS gdp_billions
                      FROM world
                      WHERE continent = 'South America'`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    points : ["For Millions: Divide by 1000000 (6 zeros)","For Billions: Divide by 1000000000 (9 zeros)."]
  } ,
  {
    id : 10,
    heading : `Trillion dollar economies`,
    explanation : `Show the name and per-capita GDP for those countries with a GDP of at least one trillion (1000000000000; that is 12 zeros). Round this value to the nearest 1000.`,
    statement : `Show per-capita GDP for the trillion dollar countries to the nearest $1000.`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT name, ROUND(gdp / population, -3) AS per_capita_gdp
                    FROM world
                    WHERE gdp >= 1000000000000`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
  } ,
  {
    id : 11,
    heading : `Name and capital have the same length`,
    explanation : `Greece has capital Athens.
    Each of the strings 'Greece', and 'Athens' has 6 characters.`,
    statement : `Show the name and capital where the name and the capital have the same number of characters.`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : `  SELECT name, LENGTH(name), continent, LENGTH(continent), capital, LENGTH(capital)
                      FROM world WHERE name LIKE 'G%'`,
    expectedQuery : `SELECT 
              name, 
              capital
            FROM 
              world
            WHERE 
              LENGTH(name) = LENGTH(capital);`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT name, LENGTH(name), continent, LENGTH(continent), capital, LENGTH(capital)
            FROM world WHERE name LIKE 'G%'`,
    isLink : '',
    points : ["You can use the LENGTH function to find the number of characters in a string.", 
      "For Microsoft SQL Server the function LENGTH is LEN",
    ]
  } ,
  {
    id : 12,
    heading : `Matching name and capital`,
    explanation : `The capital of Sweden is Stockholm. Both words start with the letter 'S'.`,
    statement : `Show the name and the capital where the first letters of each match. Don't include countries where the name and the capital are the same word.`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : `SELECT name, LEFT(name,1), capital FROM world`,
    expectedQuery : `SELECT 
                name, 
                capital
              FROM 
                world
              WHERE 
                LEFT(name, 1) = LEFT(capital, 1)
                AND name <> capital;`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT name, LEFT(name,1), capital FROM world`,
    isLink : '',
    points : ["You can use the function LEFT to isolate the first character.", 
      "You can use <> as the NOT EQUALS operator.",
    ]
  } ,
  {
    id : 13,
    heading : `All the vowels`,
    explanation : `Equatorial Guinea and Dominican Republic have all of the vowels (a e i o u) in the name. They don't count because they have more than one word in the name.`,
    statement : `Find the country that has all the vowels and no spaces in its name.`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : `SELECT name
            FROM world
          WHERE name LIKE 'B%'
            AND name NOT LIKE '%a%'`,
    expectedQuery : `SELECT name
                FROM world
                WHERE name LIKE '%a%'
                  AND name LIKE '%e%'
                  AND name LIKE '%i%'
                  AND name LIKE '%o%'
                  AND name LIKE '%u%'
                  AND name NOT LIKE '% %'`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT name
            FROM world
          WHERE name LIKE 'B%'
            AND name NOT LIKE '%a%'`,
    isLink : '',
    points : ["You can use the phrase name NOT LIKE '%a%' to exclude characters from your results.", 
      "The query shown misses countries like Bahamas and Belarus because they contain at least one 'a'",
    ]
  } ,
]

const questionsSlice = createSlice({
  name: 'selectFromWorld',
  initialState,
  reducers: {
    // just like e.target.vlue
    updateQueryById: (state, action) => {
      const { id, query } = action.payload;
      const question = state.find(q => q.id === id);
      if (question) {
        question.query = query;
      }
    },

    resetQueryById: (state, action) => {
      const { id } = action.payload;
      const question = state.find(q => q.id === id);
      if (question) {
        question.query = question.initialQuery;
      }
    },

    markSubmitted : (state, action) => {
      const {id} = action.payload;
      const question = state.find(q => q.id === id);
      if(question) {
        question.isSubmitted = true;
      }
    },

    setStatus : (state, action) => {
      const {id, status} = action.payload;
      const question = state.find(q => q.id === id);
      if(question) {
        question.status = status;
      }
    }
,
    setSeeHint : (state, action) => {
      const {id} = action.payload;
      const question = state.find(q => q.id === id);
      if(question) {
        question.seeHint = !question.seeHint;
      }
    }
    
    

  }
});

export const { updateQueryById, resetQueryById, markSubmitted, setStatus, setSeeHint } = questionsSlice.actions;
export default questionsSlice.reducer;

