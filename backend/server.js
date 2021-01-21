const path = require('path')
const morgan = require('morgan')
const express = require('express')
const dotenv = require('dotenv')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()
const app = express()
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

const connectDb = require('./config/db')

const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')
const userRoutes = require('./routes/userRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

connectDb()

app.get('/', (req, res) => {
  res.send('API is running')
})
app.use('/api/orders', orderRoutes)
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)
const _dirname = path.resolve()
app.use('/uploads', express.static(path.join(_dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}...`)
)
