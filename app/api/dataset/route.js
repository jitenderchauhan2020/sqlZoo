

import pool from '../../utils/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
    const client = await pool.connect();   
    
    try {
    const { searchParams } = new URL(req.url);
    const userQuery = searchParams.get('query')
    const expectedQuery = searchParams.get('expectedQuery')

    if (!userQuery || userQuery.trim() === "") {
        return NextResponse.json({ message : 'Query cannot be empty',  status: 422 });
    }


    const expectedResult = await client.query(expectedQuery);
    const userResult = await client.query(userQuery);

    const rows = userResult.rows;
    const columns = userResult.fields;

    const expectedRows = expectedResult.rows;
    const expectedColumns = expectedResult.fields;

    //handling colums meesage here 
    if(columns.length < expectedColumns.length) {
        return NextResponse.json({
            message : '❌ wrong Answer. Too Few columns',
            columns: columns,
            expectedRows: expectedRows,
            expectedColumns: expectedColumns,
            rows: rows,
            status : 422
        })
    }else if(columns.length > expectedColumns.length) {
        return NextResponse.json({
            message : '❌ wrong Answer. Too Many columns',
            columns: columns,
            expectedRows: expectedRows,
            expectedColumns: expectedColumns,
            rows: rows, 
            status : 422
        })
    }

    //handling rows meesage here
    if(rows.length < expectedRows.length) {
        return NextResponse.json({
            message : '❌ wrong Answer. Too Few rows',
            rows: rows,
            columns: columns,
            expectedRows: expectedRows,
            expectedColumns: expectedColumns,
            status : 422
        })
    }else if(rows.length > expectedRows.length) {
        return NextResponse.json({
            message : '❌ wrong Answer. Too Many rows',
            rows: rows,
            columns: columns,
            expectedColumns: expectedColumns,
            expectedRows: expectedRows,
            status : 422
        })
    }

    //handling values here and data inconsistency
    if(rows.length === expectedRows.length && columns.length === expectedColumns.length){
        const onlyUserValues = rows.map(row => Object.values(row));
        const onlyExpectedValues = expectedRows.map(row => Object.values(row));
        console.log(onlyUserValues);
        console.log(onlyExpectedValues);

        if (JSON.stringify(onlyUserValues) == JSON.stringify(onlyExpectedValues)) {
            return NextResponse.json({
                message : '✅ Correct Answer',
                rows: rows,
                columns: columns,
                expectedRows: expectedRows,
                expectedColumns: expectedColumns,
                data : rows,
                status : 200
            })
        }else{
            return NextResponse.json({
                not: "working",
                message : '❌ wrong Answer. Data Inconsistency',
                rows: rows,
                columns: columns,
                expectedRows: expectedRows,
                expectedColumns: expectedColumns,
                status : 422
            })
        }
    }

    client.release();
    return NextResponse.json({rows, columns});
  } catch (error) {
    return NextResponse.json(
        {
          message: '❌ Syntax error found',
          error: error.message,
          status : 500,
        }
      );
      
  }finally {
      client.release();
  }
}
