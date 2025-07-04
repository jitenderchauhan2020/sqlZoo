import {Pool}  from "pg";

const pool = new Pool({
    connectionString: process.env.NEXT_PUBLIC_DIRECT_CONNECTION_LINK,
    ssl: {
        rejectUnauthorized: false,
    },
})


export default pool;