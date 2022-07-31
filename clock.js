function currentTime() {
    
    let date = new Date(); 
    let hours = date.getHours();/* this gets the current hour of the day */
    let mins = date.getMinutes(); /* this gets the current miniute */
    let seconds = date.getSeconds(); /* this gets the current seconds */
    hours = updateTime(hours);
    mins = updateTime(mins);
    seconds = updateTime(seconds); 
    document.getElementById("timenow").innerText =  hours + " : " + mins+ " : " + seconds; /* this changes the text on the div to show the current time */
      var timer = setTimeout(function(){ currentTime() }, 1000); /* this keeps the timer going without refreshing the page */
  }
  
  function updateTime(k) { 
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
 /* this calls the currentTime() function */

