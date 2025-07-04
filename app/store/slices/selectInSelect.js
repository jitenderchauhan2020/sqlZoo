
"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    heading : `Bigger than Russia`,
    explanation: ``,
    statement: `List each country name where the population is larger than that of 'Russia'.`,
    hintAbove: "",
    hintBelow : '',
    initialQuery: `SELECT name FROM world
            WHERE population >
                (SELECT population FROM world
                WHERE name='Romania')`,
    expectedQuery: `SELECT name
                FROM world
                WHERE population > (
                SELECT population
                FROM world
                WHERE name = 'Russia'
                )`,
    isSubmitted: false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT name FROM world
                WHERE population >
                    (SELECT population FROM world
                    WHERE name='Romania')`,
    isLink : "https://youtu.be/",
    videoCode : "UPFwlsJFcsw"
  },
  {
    id: 2,
    heading: `Richer than UK`,
    explanation: ``,
    statement: `Show the countries in Europe with a per capita GDP greater than 'United Kingdom'.`,
    hintAbove: "Per Capita GDP",
    hintBelow : 'The per capita GDP is the gdp/population',
    initialQuery: ``,
    expectedQuery: `SELECT name
                    FROM world
                    WHERE continent = 'Europe'
                    AND gdp / population > (
                        SELECT gdp / population
                        FROM world
                        WHERE name = 'United Kingdom'
                    )`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : "https://youtu.be/",
    videoCode : 'RELAqb4DlvY'

  },
  {
    id : 3,
    heading : `Neighbours of Argentina and Australia`,
    explanation : ``,
    statement : `List the name and continent of countries in the continents containing either Argentina or Australia. Order by name of the country.`,
    hintAbove : "",
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT name, continent
            FROM world
            WHERE continent IN (
            SELECT continent
            FROM world
            WHERE name IN ('Argentina', 'Australia')
            )
            ORDER BY name`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : "",
  },
  {
    id : 4,
    heading : `Between Canada and Poland`,
    explanation : ``,
    statement : `Which country has a population that is more than United Kingdom but less than Germany? Show the name and the population.`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT name, population
                    FROM world
                    WHERE population > (
                    SELECT population FROM world WHERE name = 'United Kingdom'
                    )
                    AND population < (
                    SELECT population FROM world WHERE name = 'Germany'
                    )`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
  } , 
  {
    id : 5,
    heading : `Percentages of Germany`,
    explanation : `Germany (population roughly 80 million) has the largest population of the countries in Europe. Austria (population 8.5 million) has 11% of the population of Germany.`,
    statement : `Show the name and the population of each country in Europe. Show the population as a percentage of the population of Germany. Order by name`,
    hintAbove : 'Decimal Places & Percantage Symbol "%" ',

    hintBelow : '<p>You can use the function <b>ROUND</b> to remove the decimal places. AND <b>CONCAT</b> to add the percentage symbol.</p>',
    initialQuery : ``,
    expectedQuery : `SELECT name, 
                    CONCAT(ROUND(population * 100.0 / (
                        SELECT population FROM world WHERE name = 'Germany'
                    )), '%') AS percentage
                    FROM world
                    WHERE continent = 'Europe' ORDER by name`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : 'https://youtu.be/',
    videoCode: 'lCbLvHUNBG4',
    isExample: true,

  } , 
  {
    id : 6,
    heading : `Bigger than every country in Europe`,
    explanation : ``,
    statement : `Which countries have a GDP greater than every country in Europe? </br> [Give the name only.]`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT name
                    FROM world
                    WHERE gdp > ALL (
                    SELECT gdp FROM world WHERE continent = 'Europe' AND gdp IS NOT NULL
                    )
                    AND gdp IS NOT NULL`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    points:["Some countries may have NULL gdp values"]
  } , 
  {
    id : 7,
    heading : `Largest in each continent`,
    explanation : `This example is known as a <b>correlated</b> or <b>synchronized</b> sub-query.`,
    statement : `Find the largest country (by area) in each continent, show the continent, the name and the area`,
    hintAbove : 'Using correlated subqueries',
    hintBelow : `<p>A correlated subquery works like a nested loop: the subquery only has access to rows related to a single record at a time in the outer query. The technique relies on table aliases to identify two different uses of the same table, one in the outer query and the other in the subquery.</p>
    <br/>
        One way to interpret the line in the <strong>WHERE</strong> clause that references the two table is “… where the correlated values are the same”.
        <br/>
        <br/>
      <i>In the example provided, you would say “select the country details from world where the population is greater than or equal to the population of all countries where the continent is the same”.</i>`,

    initialQuery : `SELECT continent, name, population FROM world x
                    WHERE population >= ALL
                        (SELECT population FROM world y
                            WHERE y.continent=x.continent
                            AND population>0) `,
    expectedQuery : `SELECT continent, name, area
                        FROM world AS w1
                        WHERE area >= ALL (
                        SELECT area
                        FROM world AS w2
                        WHERE w1.continent = w2.continent
                        )`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT continent, name, population FROM world x
                WHERE population >= ALL
                    (SELECT population FROM world y
                        WHERE y.continent=x.continent
                        AND population>0)`,
    isLink : '',
  } , 
  {
    id : 8,
    heading : `First country of each continent (Alphabetically)`,
    explanation : ``,
    statement : `List each continent and the name of the country that comes first alphabetically.`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT continent, name
                FROM world AS w1
                WHERE name = (
                SELECT MIN(name)
                FROM world AS w2
                WHERE w1.continent = w2.continent
                )
                ORDER BY continent`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
  } , 
  {
    id : 9,
    heading : `Difficult Questions That Utilize Techniques Not Covered In Prior Sections`,
    explanation : ``,
    statement : `Find the continents where all countries have a population <= 25000000. Then find the names of the countries associated with these continents. Show name, continent and population.`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT name, continent, population
                    FROM world
                    WHERE continent IN (
                        SELECT continent
                        FROM world
                        GROUP BY continent
                        HAVING MAX(population) <= 25000000
                    );`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
  } ,
  {
    id : 10,
    heading : `Three time bigger`,
    explanation : ``,
    statement : `Some countries have populations more than three times that of all of their neighbours (in the same continent). Give the countries and continents.`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT w1.name, w1.continent
                FROM world w1
                WHERE NOT EXISTS (
                    SELECT 1
                    FROM world w2
                    WHERE w1.continent = w2.continent
                      AND w1.name != w2.name
                      AND w1.population <= 3 * w2.population
                )`,

    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
  }
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

