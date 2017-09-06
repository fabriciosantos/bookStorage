import express from 'express';
import config from './config/config';
import datasource from './config/datasource';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books';

const app = express();

app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyParser.json());
const Books = app.datasource.models.books;
booksRoutes(app, Books);



export default app;