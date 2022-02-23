let days = $(".days .tow");
let hours = $(".hours .tow");
let minutes = $(".minutes .tow");
let secondes = $(".secondes .tow");
let theTime = 10 * 24 * 60 * 60;
console.log(theTime)

//start function

window.onload = function () {
 
    setInterval(function () {

        theTime--;
        let ds = Math.floor(theTime / (24 * 60 * 60))
        let hr =  Math.floor(theTime % (24 * 60 * 60)  / (60 * 60))
        let mn = Math.floor(theTime % (60 * 60)  / 60)
        let sc =  Math.floor(theTime  % 60);
        if (ds < 10) {
            $(days).text(`0${ds}`)
            
        }else{
            $(days).text(ds)
        }
        if (hr < 10) {
            $(hours).text(`0${hr}`);
            
        }else{
            $(hours).text(hr);
        }
        if (mn < 10) {

            $(minutes).text(`0${mn}`);
        }else{
            $(minutes).text(mn);
        }
        if (sc < 10) {

            $(secondes).text(`0${sc}`)
        }else{
            $(secondes).text(sc)
        }





        
    },1000)
};