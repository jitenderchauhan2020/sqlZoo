
"use client";
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    heading : ``,
    explanation: `The first example shows the goal scored by a player with the last name <code class='bg-gray-100 px-1 rounded'>Bender</code>. The <code class='bg-gray-100 px-1 rounded'>*</code> says to list all the columns in the table – a shorter way of saying <code class='bg-gray-100 px-1 rounded'>(matchid, teamid, player, gtime)</code>.`,
    statement: `Modify it to show the <code class='bg-gray-100 px-1 rounded'>matchid</code> and <code class='bg-gray-100 px-1 rounded'>player name</code> for all goals scored by Germany. To identify German players, check for: <span class='border px-2 inline-block mt-1 border border-gray-300'>teamid = 'GER'</span>`,
    hintAbove: "",
    hintBelow : '',
    initialQuery: `SELECT * FROM goal WHERE player LIKE '%Bender'`,
    expectedQuery : `select matchid, player from goal where teamid = 'GER'`,
    isSubmitted: false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT * FROM goal WHERE player LIKE '%Bender'`,
    isLink : "",
    level : "normal",
  },
  {
    id : 2,
    heading : ``,
    statement : `<p>
      Notice that the column <code class="bg-gray-100 px-1 rounded">matchid</code> in the 
      <code class="bg-gray-100 px-1 rounded">goal</code> table corresponds to the 
      <code class="bg-gray-100 px-1 rounded">id</code> column in the 
      <code class="bg-gray-100 px-1 rounded">game</code> table. We can look up information about game 
      <code class="bg-gray-100 px-1 rounded">1012</code> by finding that row in the 
      <code class="bg-gray-100 px-1 rounded font-bold">game</code> table.
    </p>
    </br>
    <p class="font-bold" >Show id, stadium, team1, team2 for just game 1012</p>`,
    explanation : `From the previous query you can see that Lars Bender's scored a goal in game 1012. Now we want to know what teams were playing in that match.`,
    hintAbove : "",
    hintBelow : '',
    initialQuery : `SELECT id,stadium,team1,team2
  FROM game`,
    expectedQuery : `select id, stadium, team1, team2 from game where id = 1012`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT id,stadium,team1,team2
  FROM game`,
    isLink : "",
    level : "normal"

  },
  {
    id: 3,
    heading: ``,
    explanation:`You can combine the two steps into a single query with a JOIN.

      <pre class='bg-gray-100 border my-2 rounded'><code>
      SELECT *
        FROM game JOIN goal ON (id=matchid)
      </code></pre>

      The <span class ="font-bold" >FROM</span> clause says to merge data from the <code class='bg-gray-100 px-1 rounded'>goal</code> table with that from the <code class='bg-gray-100 px-1 rounded'>game</code> table. The <span class ="font-bold" >ON</span>  says how to figure out which rows in <code class='font-bold bg-gray-100 px-1 rounded'>game</code> go with which rows in <code class='bg-gray-100 font-bold px-1 rounded'>goal</code> - the <code class='font-bold bg-gray-100 px-1 rounded'>matchid</code> from <code class='font-bold bg-gray-100 px-1 rounded'>goal</code> must match <code class='bg-gray-100 px-1 font-bold rounded'>id</code> from <code class='bg-gray-100 font-bold px-1 rounded'>game</code>. (If we wanted to be more clear/specific we could say

    <pre class='bg-gray-100 my-2 border p-0 rounded'><code>
    ON (game.id=goal.matchid)
    </code></pre>

The code below shows the player (from the <code class='bg-gray-100 px-1 rounded'>goal</code>) and stadium name (from the <code class='bg-gray-100 px-1 rounded'>game</code> table) for every goal scored.`
,
    statement: `<p class = "font-bold mt-8">Modify it to show the player, teamid, stadium and mdate for every German goal.</p>`,
    hintAbove: "",
    hintBelow : '',
    initialQuery: `SELECT player,stadium
  FROM game JOIN goal ON (id=matchid)
`,
    expectedQuery: `SELECT 
    goal.player,
    goal.teamid,
    game.stadium,
    game.mdate
FROM 
    game
JOIN 
    goal ON game.id = goal.matchid
WHERE 
    goal.teamid = 'GER';
`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT player,stadium
  FROM game JOIN goal ON (id=matchid)`,
    level : "normal"


  },
  
  {
    id : 4,
    heading : ``,
    explanation : `Use the same <code class= "bg-gray-100 px-2 rounded font-bold">JOIN</code> as in the previous question`,
    statement : `<p class = "font-bold ">Show the team1, team2 and player for every goal scored by a player called Mario <span class="bg-gray-100  rounded px-2 inline-block border border-gray-300" >player LIKE 'Mario%'</span></p>`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT 
    game.team1,
    game.team2,
    goal.player
FROM 
    game
JOIN 
    goal ON game.id = goal.matchid
WHERE 
    goal.player LIKE 'Mario%';
`,
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
    heading : ``,
    explanation : `<p>
  The table <code class="bg-gray-100 border border-gray-300 px-2 rounded">eteam</code> gives details of every national team, including the coach. You can 
  <code class="bg-gray-100 border border-gray-300 px-2 rounded">JOIN</code> 
  <code class="bg-gray-100 px-2 border border-gray-300 rounded">goal</code> to 
  <code class="bg-gray-100 px-2 border border-gray-300 rounded">eteam</code> using the phrase<br/>
  <code class="bg-gray-100 px-2 border border-gray-300  rounded">goal JOIN eteam ON teamid = id</code>.
</p>
`,
    statement : `<p class = "font-bold">Show <span class="bg-gray-100 px-2 border border-gray-300">player</span>, <span class="bg-gray-100 border border-gray-300 px-2">teamid</span>, <span class="bg-gray-100 px-2 border border-gray-300">coach</span>, <span class="bg-gray-100 px-2 border border-gray-300">gtime</span> for all goals scored in the first 10 minutes <span class="bg-gray-100 px-2 border border-gray-300">gtime <= 10</span></p>`,
    hintAbove : ' ',
    hintBelow : '',
    initialQuery : `SELECT player, teamid, gtime
  FROM goal 
 WHERE gtime<=10
`,
    expectedQuery : `SELECT 
    goal.player,
    goal.teamid,
    eteam.coach,
    goal.gtime
FROM 
    goal
JOIN 
    eteam ON goal.teamid = eteam.id
WHERE 
    goal.gtime <= 10;
`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT player, teamid, gtime
  FROM goal 
 WHERE gtime<=10
`,
    level : "normal"

  } , 
//   hard levels
  {
    id : 6,
    heading : ``,
    explanation : `<p>
  To <code class="bg-gray-100 px-1 rounded">JOIN</code> 
  <code class="bg-gray-100 px-1 rounded">game</code> with 
  <code class="bg-gray-100 px-1 rounded">eteam</code>, you could use either:
</p>

<p class="mt-2">
  <span class="border border-gray-300 px-2 bg-gray-100 rounded">game JOIN eteam ON (team1 = eteam.id)</span>
</p>

<p class="mt-2">or</p>

<p class="mt-2">
  <span class="border border-gray-300 px-2 bg-gray-100 rounded">game JOIN eteam ON (team2 = eteam.id)</span>
</p>

</br>
</br>
<p >
  Notice that because 
  <code class="bg-gray-100 px-1 rounded">id</code> is a column name in both 
  <code class="bg-gray-100 px-1 rounded">game</code> and 
  <code class="bg-gray-100 px-1 rounded">eteam</code>, you must specify
  <span class="border border-gray-300 px-2 bg-gray-100 rounded">eteam.id</span> 
  instead of just 
  <span class="border border-gray-300 px-2 bg-gray-100 rounded">id</span>.
</p>

`,
    statement : `<p class="font-bold" >List the dates of the matches and the name of the team in which 'Fernando Santos' was the team1 coach.</p>`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT 
    game.mdate,
    eteam.teamname
FROM 
    game
JOIN 
    eteam ON game.team1 = eteam.id
WHERE 
    eteam.coach = 'Fernando Santos'`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    level : "normal"
    
  } , 
  {
    id : 7,
    heading : ``,
    statement : `<p class = "font-bold">List the player for every goal scored in a game where the stadium was 'National Stadium, Warsaw'</p>`,
    explanation : ``,
    hintBelow : ``,
    initialQuery : ``,
    expectedQuery : `SELECT 
    goal.player
FROM 
    game
JOIN 
    goal ON game.id = goal.matchid
WHERE 
    game.stadium = 'National Stadium, Warsaw';`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    level : "normal"

  } , 
 
  {
    id : 8,
    heading : `More difficult questions`,
    explanation : `The example query shows all goals scored in the Germany-Greece quarterfinal.`,
    statement : `<p class="font-bold">Instead show the name of all players who scored a goal against Germany.</p>`,
    hintAbove : 'HINT',
    hintBelow : `<p>Select goals scored only by non-German players in matches where GER was the id of either <span class="font-bold">team1</span> or <span class="font-bold">team2</span>.</p>
    </br>
    <p>You can use <span class="px-2 border border-gray-300 bg-gray-100" >teamid!='GER'</span> to prevent listing German players.</p>
    </br>
    You can use <span class="px-2 border border-gray-300 bg-gray-100" >DISTINCT</span> to stop players being listed twice.`,
    initialQuery : `SELECT player, gtime
  FROM game JOIN goal ON matchid = id 
    WHERE (team1='GER' AND team2='GRE')`,
    expectedQuery : `SELECT DISTINCT player
                      FROM game
                      JOIN goal ON goal.matchid = game.id
                      WHERE (game.team1 = 'GER' OR game.team2 = 'GER')  AND goal.teamid != 'GER'`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT player, gtime
  FROM game JOIN goal ON matchid = id 
    WHERE (team1='GER' AND team2='GRE')`,
    isLink : '',
    level : "normal"

  } , 
   {
    id : 9,
    heading : ``,
    explanation : ``,
    statement : `<p class="font-bold" >Show teamname and the total number of goals scored.</p>`,
    hintAbove : 'COUNT and GROUP BY ',
    hintBelow : '<p>You should <span class="font-bold">COUNT(*)</span> in the SELECT line and <span class="font-bold">GROUP BY</span> teamname</p>',
    initialQuery : `SELECT teamname, player
    FROM eteam JOIN goal ON id=teamid
    ORDER BY teamname`,
    expectedQuery : `SELECT teamname, COUNT(*) AS total_goals
    FROM eteam 
    JOIN goal ON eteam.id = goal.teamid
    GROUP BY teamname
    ORDER BY teamname;`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT teamname, player
  FROM eteam JOIN goal ON id=teamid
  ORDER BY teamname`,
    isLink : '',
    level : "normal"

  } , 
   {
    id : 10,
    heading : ``,
    explanation : ``,
    statement : `<p class="font-bold" >Show the stadium and the number of goals scored in each stadium.</p>`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : ``,
    expectedQuery : `SELECT stadium, COUNT(*) AS total_goals
FROM game
JOIN goal ON goal.matchid = game.id
GROUP BY stadium
ORDER BY stadium;`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : ``,
    isLink : '',
    level : "normal"

  } , 
   {
    id : 11,
    heading : ``,
    explanation : ``,
    statement : `<p class="font-bold" >For every match involving 'POL', show the matchid, date and the number of goals scored.</p>`,
    hintAbove : '',
    hintBelow : '',
    initialQuery : `SELECT matchid,mdate, team1, team2,teamid
  FROM game JOIN goal ON matchid = id 
 WHERE (team1 = 'POL' OR team2 = 'POL')`,
    expectedQuery : `SELECT matchid, mdate, COUNT(teamid)
                    FROM game 
                    JOIN goal ON matchid = game.id
                    WHERE team1 = 'POL' OR team2 = 'POL'
                    GROUP BY matchid, mdate`,
    isSubmitted : false,
    status : 404,
    seeHint : false,
    queryResult : null,
    query : `SELECT matchid,mdate, team1, team2,teamid
  FROM game JOIN goal ON matchid = id 
 WHERE (team1 = 'POL' OR team2 = 'POL')`,
    isLink : '',
    level : "normal"

  } , 
   {
    id : 12,
    heading : ``,
    explanation : ``,
    statement : `<p class="font-bold" >For every match where 'GER' scored, show matchid, match date and the number of goals scored by 'GER'</p>`,
    hintAbove : '',
    hintBelow : '',
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
    isLink : '',
    level : "normal"

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
    level : "normal",
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

