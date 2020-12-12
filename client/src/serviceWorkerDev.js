export default function serviceWorkerDev() {
    let swUrl= `${process.env.PUBLIC_URL}/serviceWorker.js`
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.log("response", response)
    })
}