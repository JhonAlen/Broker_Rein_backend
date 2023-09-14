import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';

const app = express(); 
dotenv;

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
  console.log(`\n API is listening on port ${PORT}`);
});