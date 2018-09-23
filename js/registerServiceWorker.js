if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then (reg => {
      console.log("Service worker registration succcessful:" + reg.scope);
    })
    .catch(error => {
      console.log("Registration failed: " + error);
    });
}
