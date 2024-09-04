if("serviceWorker" in navigator){
    navigator.serviceWorker.register("/out/scripts/service_worker.js").then(registration=>{
      console.log("SW Registered!");
    }).catch(error=>{
      console.log("SW Registration Failed", error);
    });
}else{
  console.log("Not supported");
}