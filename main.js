const { app, BrowserWindow, screen, webContents } = require('electron')
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
  
//   let wc = mainWindow.webContents

//   wc.on('cursor-changed', (e, type) =>{ 
//     console.log(type)
//       if(activador){ 
//           clearTimeout(activador) 
//           activador = ""
//       } 
//       if(mainWindow){
//           mainWindow.close()
//           mainWindow = ""
//       }
//       latestUbication = {x: 0, y: 0}

//   })

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