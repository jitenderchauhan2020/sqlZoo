
"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    heading : `Total world population`,
    explanation: `Show the total <b>population</b> of the world.`,
    statement: ``,
    hintAbove: "",
    hintBelow : '',
    initialQuery: `SELECT SUM(population) FROM world
`,

    expectedQuery : `SELECT SUM(population) FROM world`,
    isSubmitted: false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT SUM(population)
            FROM world`,
    isLink : "",
    level : "normal",
    points : ["world (name, continent, area, population, gdp)"]
  },

  {
    id: 2,
    heading: `List of continents`,
    explanation: ``,
    statement: `List all the continents - just once each.`,
    hintAbove: "",
    hintBelow : '',
    initialQuery: ``,
    expectedQuery: `select continent from world group by continent`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    level : "normal"


  },
  {
    id : 3,
    heading : `GDP of Africa`,
    explanation : ``,
    statement : `Give the total GDP of Africa`,
    hintAbove : "",
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `select sum(gdp) from world where continent = 'Africa'`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : "",
    level : "normal"

  },
  {
    id : 4,
    heading : `Count the big countries`,
    explanation : `How many countries have an <b>area</b> of at least 1000000`,
    statement : ``,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `select count(*) from world where area >= 1000000`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    level : "normal"

  } , 
  {
    id : 5,
    heading : `Baltic states population`,
    explanation : `What is the total <b>population</b> of ('Estonia', 'Latvia', 'Lithuania')`,
    statement : ``,
    hintAbove : ' ',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `select sum(population) from world where name IN ('Estonia', 'Latvia', 'Lithuania')`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    level : "normal"

  } , 
//   hard levels
  {
    id : 6,
    heading : `Counting the countries of each continent`,
    explanation : `For each <b>continent</b> show the <b>continent</b> and number of countries.`,
    statement : ``,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `select continent, count(name) from world group by continent;`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    level : "advance"
    
  } , 
  {
    id : 7,
    heading : `Counting big countries in each continent`,
    explanation : `For each <b>continent</b> show the <b>continent</b> and number of countries with populations of at least 10 million.`,
    hintBelow : ``,
    initialQuery : ``,
    expectedQuery : `select continent, count(name) from world
                    where population >= 10000000
                    group by continent`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    level : "advance"

  } , 
  {
    id : 8,
    heading : `Counting big continents`,
    explanation : `List the continents that <b>have</b> a total population of at least 100 million.`,
    statement : ``,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT continent FROM world
                    GROUP BY continent
                    HAVING SUM(population) >= 100000000;`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    level : "advance"

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

