const express = require('express')
const dotenv = require('dotenv')
const {notFound, errorHandler} = require('./middleware/errorMiddleware');
const app = express()

const connectDb = require('./config/db')

const productRoutes=require('./routes/productRoutes')


dotenv.config()
connectDb()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
