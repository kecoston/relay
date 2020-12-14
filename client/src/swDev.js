export default function serviceWorkerDev() {

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  const vapidPublicKey = 'BEMiH8qo5f74ELiTfEIKKhVOYLIm-g1Tv6PIIGdaFB6aOd5LGCkUaOuhwApSHFs2agwf_drjzAHirFzNmcvucaA';
  const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

  

  navigator.serviceWorker.register("./sw.js").then((response) => {
    console.log("response", response)
    return response.pushManager.getSubscription({
      userVisibleOnly: true,
      applicationServerKey: convertedVapidKey

    })
      .then(function (sub) {

        if (sub === undefined) {
          Notification.requestPermission(
            function (status) {
              console.log("Notification permission status:", status)
            }
          )
        } else {
          console.log("subscribed")
          // you have subscritption, update the database on your server
        }
      })

  })
}