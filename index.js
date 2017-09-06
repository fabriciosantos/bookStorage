import app from './app';

app.listen(app, () => {
    console.log(`app is running on port ${app.get('port')}`);
});