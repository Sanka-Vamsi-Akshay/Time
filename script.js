ctime = document.querySelector("#ctime")

setInterval(() => {
    var t = new Date()
    var hr, min, sec, status
    hr = t.getHours()
    status=hr>=12?'PM':"AM"
    hr = hr>12?hr%12:hr
    hr=hr<10?`0${hr}`:hr
    min = t.getMinutes()
    min=min<10?`0${min}`:min
    sec = t.getSeconds()
    sec=sec<10?`0${sec}`:sec
    ctime.innerHTML=`${hr} : ${min} : ${sec} ${status}` 
}, 1000);