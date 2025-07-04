
"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    heading : `1962 movies`,
    explanation: `<p>List the films where the <span class="font-bold" >yr</span> is 1962 [Show <span class="font-bold" >id</span>, <span class="font-bold" >title</span>]</p>`,
    hintAbove: "",
    hintBelow : '',
    initialQuery: `SELECT id, title
 FROM movie
 WHERE yr=1962`,
    expectedQuery : `SELECT id, title
FROM movie
WHERE yr = 1962;`,
    isSubmitted: false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT id, title
 FROM movie
 WHERE yr=1962`,
    isLink : "",
    level : "normal",
  },
  {
    id : 2,
    heading : `When was Citizen Kane released?`,
    statement : `<p>
      Give <span class="font-bold" >year</span> of 'Citizen Kane'.
    </p>`,
    explanation : ``,
    hintAbove : "",
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `select id, stadium, team1, team2 from game where id = 1012`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : "",
    level : "normal"

  },
  {
    id: 3,
    heading: `Star Trek movies`,
    explanation:`List all of the Star Trek movies, include the <span class="font-bold">id</span>, <span class="font-bold">title</span> and <span class="font-bold">yr</span> (all of these movies include the words Star Trek in the title). Order results by year.`
,
    statement: ``,
    hintAbove: "",
    hintBelow : '',
    initialQuery: ``,
    expectedQuery: ``,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    level : "normal"


  },
  
  {
    id : 4,
    heading : `id for actor Glenn Close`,
    explanation : ``,
    statement : `<p class = "">What <span class="font-bold">id</span> number does the actor 'Glenn Close' have?</p>`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : ``,
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
    heading : `id for Casablanca`,
    explanation : `<p>  What is the <span class="font-bold" >id</span> of the film 'Casablanca'</p>
`,
    statement : ``,
    hintAbove : ' ',
    hintBelow : '',
    initialQuery : ``,
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
    heading : `Cast list for Casablanca`,
    statement : `<p class="">Use movieid = <span class="font-bold">11768</span>, (or whatever value you got from the previous question)</p>`,
    explanation : `<p class="font-bold" >Obtain the cast list for 'Casablanca'.</p>`,
    hintAbove : 'what is a cast list?',
    hintBelow : 'The cast list is the names of the actors who were in the movie.',
    initialQuery : ``,
    expectedQuery : ``,
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
    heading : `Alien cast list`,
    statement : `<p class = "font-bold">Obtain the cast list for the film 'Alien'</p>`,
    explanation : ``,
    hintBelow : ``,
    initialQuery : ``,
    expectedQuery : ``,
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
    heading : `Harrison Ford movies`,
    explanation : ``,
    statement : `<p class="font-bold">List the films in which 'Harrison Ford' has appeared`,
    initialQuery :``,
    expectedQuery : `SELECT DISTINCT player
                      FROM game
                      JOIN goal ON goal.matchid = game.id
                      WHERE (game.team1 = 'GER' OR game.team2 = 'GER')  AND goal.teamid != 'GER'`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    level : "advance"

  } , 
   {
    id : 9,
    heading : `Harrison Ford as a supporting actor`,
    explanation : ``,
    statement : `<p class="" >List the films where 'Harrison Ford' has appeared - but not in the starring role.</br></br> [Note: the <span class="font-bold">ord</span> field of casting gives the position of the actor. If ord=1 then this actor is in the starring role]</p>`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT teamname, COUNT(*) AS total_goals
    FROM eteam 
    JOIN goal ON eteam.id = goal.teamid
    GROUP BY teamname
    ORDER BY teamname;`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    level : "advance"

  } , 
   {
    id : 10,
    heading : `Lead actors in 1962 movies`,
    explanation : ``,
    statement : `<p class="" >List the films together with the leading star for all 1962 films.</p>`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : ``,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    level : "advance"

  } , 
   {
    id : 11,
    heading : `Busy years for Rock Hudson`,
    explanation : ``,
    statement : `<p class="" >Which were the busiest years for 'Rock Hudson', show the year and the number of movies he made each year for any year in which he made more than 2 movies.</p>`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : `SELECT yr,COUNT(title) FROM
  movie JOIN casting ON movie.id=movieid
        JOIN actor   ON actorid=actor.id
WHERE name='Doris Day'
GROUP BY yr
HAVING COUNT(title) > 1`,
    expectedQuery:``,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT yr,COUNT(title) FROM
  movie JOIN casting ON movie.id=movieid
        JOIN actor   ON actorid=actor.id
WHERE name='Doris Day'
GROUP BY yr
HAVING COUNT(title) > 1`,
    isLink : '',
    level : "advance"

  } , 
   {
    id : 12,
    heading : `Lead actor in Julie Andrews movies`,
    explanation : `List the film title and the leading actor for all of the films 'Julie Andrews' played in.`,
    statement : ``,
    hintAbove : 'Did you get "Little Miss Marker twice"?',
    hintBelow : `Julie Andrews starred in the 1980 remake of Little Miss Marker and not the original(1934).</br></br>
Title is not a unique field, create a table of IDs in your subquery`,
    initialQuery : ``,
    expectedQuery : `SELECT game.id , game.mdate, COUNT(goal.teamid)
                    FROM game
                    JOIN goal ON goal.matchid = game.id
                    WHERE goal.teamid = 'GER'
                    GROUP BY game.id, game.mdate;`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : true,
    level : "advance"

  } , 
   {
    id : 13,
    heading : ``,
    explanation : ``,
    statement : ``,
    hintAbove : '',
    hintBelow : '',
    initialQuery : `SELECT mdate,  team1,
    CASE WHEN teamid=team1 THEN 1 ELSE 0 END score1
    FROM game JOIN goal ON matchid = id`,
    expectedQuery : `SELECT 
  game.mdate,
  game.team1,
  SUM(CASE WHEN goal.teamid = game.team1 THEN 1 ELSE 0 END) AS score1,
  game.team2,
  SUM(CASE WHEN goal.teamid = game.team2 THEN 1 ELSE 0 END) AS score2
FROM game
LEFT JOIN goal ON goal.matchid = game.id
GROUP BY game.id, game.mdate, game.team1, game.team2
ORDER BY game.mdate, game.id, game.team1, game.team2;`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT mdate, team1,
      CASE WHEN teamid=team1 THEN 1 ELSE 0 END score1
      FROM game JOIN goal ON matchid = id`,
    isLink : '',
    level : "advance",
    isExample : true

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

