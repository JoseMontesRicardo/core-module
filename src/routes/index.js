
class Routes {
    constructor (app) {
      this.app = app
      this.homeRoute()
      this.userRoute()
    }


    homeRoute(){
        console.log('holaa')
        this.home = {
            route : this.app.route('/home')
        }
    }

    userRoute(){
        console.log('holaa2')        
        this.home = {
            route : this.app.route('/home')
        }
    }

}

export default Routes