<br>
<br>
<div align="center">
  <strong>Saver: Protector de pantalla basado en Chromium</strong>

</div>
<br><br>

# Instalacion de Saver

Descargar el directorio Instalables. Dentro de la carpeta mediante una termial y con permisos de ROOT, ejecute el siguiente comando:

- `chmod a+x Install.sh && ./Install.sh`

 ! Tenga presente que esta pensado para que sea instalado en /home/tac-user, si el usuario es otro, modifique el mismo desde Install.sh antes de realizar la instalacion.
 

## Funcionamiento

Saver Electron es una App basada en ElectronJS que inicia la URL `http://g100603sv06d/SSCencoTAC.html` en modo Kiosko, detectando el movimiento del Mouse para cerrar o abrir la ventana que muestra el URL indicado.
El mecanismo interno controla el movimiento del mouse por coordenadas, en el momento que este cambia realiza el cierre de la ventana del protector de pantalla. En donde la posicion del mouse sea la misma por 30 segundos, inicia el protector.


Modificar config.json segun corresponda

