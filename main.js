const { app, BrowserWindow, screen } = require('electron')
const properties = require(__dirname + "/config.json")

let latestUbication = {}
let actualUbication = {}
let activador
let mainWindow

function createWindow () {

  mainWindow = new BrowserWindow({
    width: properties.w,
    height: properties.h
  })

  mainWindow.loadURL(properties.url)
}

app.whenReady().then(() => {

    const Tempo = () => {
        activador = setTimeout(()=> { 
            createWindow() 
        }, properties.timer)
    }

    setInterval(() =>{ 

        actualUbication = screen.getCursorScreenPoint()

        if((actualUbication.x === latestUbication.x) || (actualUbication.y === latestUbication.y)){

            if(!activador){  Tempo()  }

        } else if(actualUbication.x !== latestUbication.x || actualUbication.y !== latestUbication.y){
            
            if(activador){ 
                clearTimeout(activador) 
                activador = ""
            } 

            if(mainWindow){
                mainWindow.close()
                mainWindow = ""
            }

            latestUbication = actualUbication

        } 
       
    }, 100)
    

})

app.on('before-quit', (e) => {
    e.preventDefault()
})