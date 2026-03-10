import dotenv from "dotenv";
dotenv.config();

const res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.API_KEY}`
);

const data = await res.json();

console.log(JSON.stringify(data, null, 2));