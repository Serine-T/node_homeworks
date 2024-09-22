const express = require('express');
const studentRoutes = require('./src/students/routes')
const app = express();
const PORT = 3000;


app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Hello');
})

app.use('/api/v1/students', studentRoutes)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));