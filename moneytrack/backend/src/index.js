import 'dotenv/config' 
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import sequelize from './config/database.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/api/auth', authRoutes);




app.get('/health', (req, res) => {
    res.json({ status: 'ok'})
});

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('DB connection failed:', err.message);
    process.exit(1);
  }
};

start()