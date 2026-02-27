const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

sequelize.authenticate()
    .then(() => {
        console.log('Connected to PostgreSQL');
        return sequelize.sync({ alter: true });
    })
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Could not connect to PostgreSQL', err));

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/clan', require('./routes/clan'));
app.use('/api/user', require('./routes/user'));

app.get('/', (req, res) => {
    res.send('WarTracker API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

