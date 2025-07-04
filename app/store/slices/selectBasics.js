"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    headingPrefix: "Introducing the",
    highlightText: "world",
    headingSuffix: "table of countries",
    explanation: `The example uses a WHERE clause to show the population of 'France'. Note that strings should be in 'single quotes`,
    statement: `Modify it to show the population of Germany`,
    hint: ``,
    initialQuery: `SELECT population FROM world WHERE name = 'France'`,
    expectedQuery: `SELECT population FROM world WHERE name = 'Germany'`,
    isSubmitted: false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT population FROM world WHERE name = 'France'`,
  },
  {
    id: 2,
    heading: `Scandinavia`,
    explanation: `Checking a list The word IN allows us to check if an item is in a list. The example shows the name and population for the countries 'Brazil', 'Russia', 'India' and 'China'.`,
    statement: `Show the name and the population for 'Sweden', 'Norway' and 'Denmark'.`,
    hint: "",
    initialQuery: `SELECT name, population FROM world WHERE name IN ('Brazil', 'Russia', 'India', 'China')`,
    expectedQuery: `SELECT name, population FROM world WHERE name IN ('Sweden', 'Norway','Denmark');`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT name, population FROM world WHERE name IN ('Brazil', 'Russia', 'India', 'China')`,

  },
  {
    id : 3,
    heading : `Just the right size`,
    explanation : `Which countries are not too small and not too big? BETWEEN allows range checking (range specified is inclusive of boundary values). The example below shows countries with an area of 250,000-300,000 sq. km.`,
    statement : `Modify it to show the country and the area for countries with an area between 200,000 and 250,000.`,
    hint : "",
    initialQuery : `SELECT name, area FROM world WHERE area BETWEEN 250000 AND 300000`,
    expectedQuery : `SELECT name, area FROM world WHERE area BETWEEN 200000 AND 250000`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT name, area FROM world WHERE area BETWEEN 250000 AND 300000`,
  }  
]

const questionsSlice = createSlice({
  name: 'selectBasics',
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

