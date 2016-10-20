
class Routes {
    constructor (app) {
      this.app = app
      homeRoute()
      userRoute()
    }


    homeRoute(){
        console.log('holaa')
        this.home = {
            route : app.router('/home')
        }
    }

    userRoute(){
        console.log('holaa2')        
        this.home = {
            route : app.router('/home')
        }
    }

}

export default Routes