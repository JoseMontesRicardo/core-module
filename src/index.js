
import Routes from './routes/index'

const userManager = function(app){
    return new Routes(app)
} 
export default userManager