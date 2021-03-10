
import app from './server'
import './shared/infra/database'

app.listen(3333, () => {
  console.log('Server starter on port 3333')
})
