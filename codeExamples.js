//& ================= webMI.display.openWindow ================= //

//* Открытие модального окна
webMI.display.openWindow({
  display: webMI.query['openDisplay'],
  height: 600,
  width: 800,
  modal: true,
  resizable: false,
  movable: true,
  scrollbars: true,
  menubar: false,
  status: false,
  toolbar: false,
  //style: {},
  query: {
    //headline: headline,
    //message: message,
    //button: "T{OK}",
  }
});