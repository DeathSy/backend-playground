import { Express } from 'express'
import Routes from '../routes'

function bootstrap(app: Express) {
  app.use(Routes)
}

export default bootstrap
