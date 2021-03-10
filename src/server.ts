
import app from './app'
import './shared/infra/database'
// separar o app do servidor para no teste nao ter que subir o servidor

app.listen(3333, () => {
  console.log('Server starter on port 3333')
})
