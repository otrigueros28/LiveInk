const express = require('express');
const app = express();
const path = require('path')
const port =  process.env.PORT || 3000;

app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, '/src')));

app.get('/', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/api/frame', (req, res, next) => {
  Img.findAll()
    .then(i => res.json(i))
    .catch(next);
});

app.listen(port, () => console.log(`listening on port ${port}`));
