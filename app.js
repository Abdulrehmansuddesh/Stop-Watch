var min = document.getElementById("min")
var sec = document.getElementById("sec")
var msec = document.getElementById("msec")
var hours  = document.getElementById("hours")


var minCounter = 0
var secCounter = 0
var msecCounter = 0
var hoursCounter = 0
var timer;


function time(){
    
    msec.innerHTML = msecCounter
    msecCounter++
    if(msecCounter === 100){
        secCounter++
        sec.innerHTML = secCounter
        msecCounter = 0
        if( secCounter === 60){
            minCounter++
            min.innerHTML = minCounter
            secCounter = 0
            if(minCounter=== 60){
                hoursCounter++
                hours.innerHTML = hoursCounter
                minCounter=0
            }
        }

    }

}
function start(ele){
     ele.disabled = true    
        timer = setInterval(time,10)
      ele.disabled = false
        
       
   
   
    // ele.disabled = false
    console.log(start)    
}

function stop(){
    clearInterval(timer)

}


function reset(){
    clearInterval(timer)
    msec.innerHTML= "00"
    sec.innerHTML = "00"
    min.innerHTML = "00"
    hours.innerHTML = "00"
    hoursCounter = 0
    secCounter = 0
    minCounter = 0
    msecCounter = 0 
    console.log(reset)

}

