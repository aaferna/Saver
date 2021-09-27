const path = require('path');
const fs = require('fs');
const process = require('process'); 
const { app, BrowserWindow, screen, Tray, Menu } = require('electron')

let args

    if(process.argv.slice(1)[1] === "dev"){
        args = "./config.json"
    } else {
        args = process.argv.slice(1)[0]
    }


    try {

        const properties = require(args)

        Menu.setApplicationMenu(false)
        let latestUbication = {}
        let actualUbication = {}
        let mainWindow, tray, activador

        function createWindow () {

            mainWindow = new BrowserWindow({
                width: properties.w,
                height: properties.h,
                frame: false,
                fullscreen: true
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

            app.on('before-quit', (e) => {
                e.preventDefault()
            })

        })

    } catch(e) {
        console.log("[ ERROR ] --- Existe un inconveniente")
        console.log(e)
        app.quit()
    }

