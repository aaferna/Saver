const path = require('path');
const fs = require('fs');
const process = require('process'); 
const { app, BrowserWindow, screen, Tray, Menu } = require('electron')



    try {


        let mainWindow

        app.whenReady().then(() => {

            mainWindow = new BrowserWindow({
                width: 1024,
                height: 760
            })

            mainWindow.loadFile("./html/index.html")
        })

    } catch(e) {
        console.log("[ ERROR ] --- Existe un inconveniente")
        console.log(e)
        app.quit()
    }

