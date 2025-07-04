
"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    heading: `Winners from 1950`,
    explanation: ``,
    statement: `Change the query shown so that it displays Nobel prizes for 1950.`,
    hintAbove: "",
    hintBelow: '',
    initialQuery: `SELECT * from nobel`,
    query: `SELECT * from nobel`,
    expectedQuery: `SELECT * from nobel where yr = '1950'`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    isLink: "",
    level: "normal"
  },
  {
    id: 2,
    heading: `1962 Literature`,
    explanation: ``,
    statement: `Show who won the 1962 prize for literature.`,
    hintAbove: "",
    hintBelow: '',
    initialQuery: `SELECT winner
                  FROM nobel
                WHERE yr = 1960
                  AND subject = 'physics'`,
    expectedQuery: `SELECT winner
            FROM nobel
          WHERE yr = 1962
            AND subject = 'literature'`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: `SELECT winner
            FROM nobel
          WHERE yr = 1960
            AND subject = 'physics'`,
    isLink: "",
    level: "normal"
  },
  {
    id: 3,
    heading: `Albert Einstein`,
    explanation: ``,
    statement: `Show the year and subject that won 'Albert Einstein' his prize.`,
    hintAbove: "",
    hintBelow: '',
    initialQuery: ``,
    expectedQuery: `select yr, subject from nobel where winner = 'Albert Einstein'`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: ``,
    isLink: "",
    level: "normal"
  },
  {
    id: 4,
    heading: `Recent Peace Prizes`,
    explanation: ``,
    statement: `Give the name of the 'peace' winners since the year 2000, including 2000.`,
    hintAbove: '',
    hintBelow: '',
    initialQuery: ``,
    expectedQuery: `select winner from nobel where subject = 'peace' and yr >= 2000`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: ``,
    isLink: '',
    level: "normal"
  },
  {
    id: 5,
    heading: `Literature in the 1980's`,
    explanation: ``,
    statement: `Show all details (yr, subject, winner) of the literature prize winners for 1980 to 1989 inclusive.`,
    hintAbove: '',
    hintBelow: '',
    initialQuery: ``,
    expectedQuery: `select * from nobel where subject = 'literature' and yr between 1980 and 1989`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: ``,
    isLink: '',
    level: "normal"
  },
  {
    id: 6,
    heading: `Only Presidents`,
    explanation: ``,
    statement: `Show all details of the presidential winners.`,
    hintAbove: '',
    hintBelow: '',
    initialQuery: `SELECT * FROM nobel
                  WHERE yr = 1970
                    AND subject IN ('Cookery',
                                    'Chemistry',
                                    'Literature')`,
    expectedQuery: `SELECT * FROM nobel
                    WHERE winner IN (
                      'Theodore Roosevelt',
                      'Thomas Woodrow Wilson',
                      'Jimmy Carter',
                      'Barack Obama'
);`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: `SELECT * FROM nobel
                  WHERE yr = 1970
                    AND subject IN ('Cookery',
                                    'Chemistry',
                                    'Literature')`,
    isLink: '',
    points: ["Theodore Roosevelt", "Thomas Woodrow Wilson", "Jimmy Carter", "Barack Obama"],
    level: "normal"
  },
  {
    id: 7,
    heading: `John`,
    explanation: ``,
    statement: `Show the winners with first name John`,
    hintAbove: '',
    hintBelow: '',
    initialQuery: ``,
    expectedQuery: `select winner from nobel where winner like 'John%'`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: ``,
    isLink: '',
    points: [`"J" is Capital`],
    level: "normal"
  },
  {
    id: 8,
    heading: `Chemistry and Physics from different years`,
    explanation: ``,
    statement: `Show the year, subject, and name of physics winners for 1980 together with the chemistry winners for 1984.`,
    hintAbove: '',
    hintBelow: '',
    initialQuery: ``,
    expectedQuery: `SELECT yr, subject, winner
                    FROM nobel
                    WHERE (subject = 'physics' AND yr = 1980)
                      OR (subject = 'chemistry' AND yr = 1984)`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: ``,
    isLink: '',
    level: "normal"
  },
  {
    id: 9,
    heading: `Exclude Chemists and Medics`,
    explanation: ``,
    statement: `Show the year, subject, and name of winners for 1980 excluding chemistry and medicine`,
    hintAbove: '',
    hintBelow: '',
    initialQuery: ``,
    expectedQuery: `SELECT yr, subject, winner
                    FROM nobel
                    WHERE yr = 1980
                      AND subject NOT IN ('chemistry', 'medicine')`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: ``,
    isLink: '',
    level: "normal"
  },
  {
    id: 10,
    heading: `Early Medicine, Late Literature`,
    explanation: `Show year, subject, and name of people who won a 'Medicine' prize in an early year (before 1910, not including 1910) together with winners of a 'Literature' prize in a later year (after 2004, including 2004)`,
    statement: ``,
    hintAbove: '',
    hintBelow: '',
    initialQuery: ``,
    expectedQuery: `SELECT yr, subject, winner
                FROM nobel
                WHERE (subject = 'medicine' AND yr < 1910)
                  OR (subject = 'literature' AND yr >= 2004)`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: ``,
    isLink: '',
    level: "normal"
  }, 
  {
    id: 11,
    heading: `Umlaut`,
    explanation: ``,
    statement: `Find all details of the prize won by PETER GRÜNBERG`,
    hintAbove: 'Non-ASCII characters',
    hintBelow: 'The u in his name has an "umlaut". You may find this link useful',
    initialQuery: ``,
    expectedQuery: `select * from nobel where winner = 'Peter Grünberg'`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: ``,
    isLink: '',
    level: "hard",
    ref : "https://en.wikipedia.org/wiki/%C3%9C#Keyboarding"
  }, 
  {
    id: 12,
    heading: `Apostrophe`,
    explanation: ``,
    statement: `Find all details of the prize won by Eugene O'Neill`,
    hintAbove: 'Escaping single quotes',
    hintBelow: `You can't put a single quote in a quote string directly. You can use two single quotes within a quoted string.`,
    initialQuery: ``,
    expectedQuery: `SELECT * FROM nobel WHERE winner = 'Eugene O''Neill'`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: ``,
    isLink: '',
    level: "hard",
  }, 
  {
    id: 13,
    heading: `Knights of the realm`,
    explanation: `Knights in order`,
    statement: `List the winners, year and subject where the winner starts with Sir. Show the the most recent first, then by name order.`,
    hintAbove: '',
    hintBelow: ``,
    initialQuery: ``,
    expectedQuery: `SELECT winner, yr, subject
                    FROM nobel
                    WHERE winner LIKE 'Sir%'
                    ORDER BY yr DESC, winner`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: ``,
    isLink: '',
    level: "hard",
  }, 
  {
    id: 14,
    heading: `Chemistry and Physics last`,
    explanation: `The expression subject IN ('chemistry','physics') can be used as a value - it will be 0 or 1.`,
    statement: `Show the 1984 winners and subject ordered by subject and winner name; but list chemistry and physics last.`,
    hintAbove: '',
    hintBelow: `SELECT winner, subject, subject IN ('physics','chemistry')
                FROM nobel
                WHERE yr=1984
                ORDER BY subject,winner`,
    initialQuery: ``,
    expectedQuery: `SELECT winner, subject
                    FROM nobel
                    WHERE yr = 1984
                    ORDER BY 
                      (subject IN ('chemistry', 'physics')),
                      subject,
                      winner`,
    isSubmitted: false,
    status: 404,
    seeHint: false,
    queryResult: null,
    query: `SELECT winner, subject, subject IN ('physics','chemistry')
                FROM nobel
                WHERE yr=1984
                ORDER BY subject,winner`,
    isLink: 'https://youtu.be/9pfL0Hj1Axk',
    level: "hard",
  }, 
  
];




const questionsSlice = createSlice({
  name: 'selectFromNobel',
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

