// const { Client } = require('pg');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });

// require("babel-core").transform("code", options);

var React = require('react');
var ReactDOM = require ('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

