
var time_before_checkout=30

//for check out button
setTimeout(()=>{
document.getElementsByClassName('btn btn-org')[0].click()
},time_before_checkout*60000)


// for final checkout confirmation
setTimeout(()=>{

document.getElementsByClassName('btn btn-block btn_orange')[0].click()
},time_before_checkout*60000)
