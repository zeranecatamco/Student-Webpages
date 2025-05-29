let [seconds, minutes, hours] = [0, 0, 0];
  //get the element to display the time
  let displayTime = document.getElementById("displayTime");
  let timer = null;
  //stopwatch function that updates the time every second
  function stopwatch() {
      seconds++;
    // If seconds reach 60, reset seconds and increment minutes
      if (seconds == 60) {
          seconds = 0;
          minutes++;
        // If minutes reach 60, reset minutes and increment hours
          if (minutes == 60) {
              minutes = 0;
              hours++;
          }
      }
    
      // Format the time (hours, minutes, seconds) with leading zeros
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
    // Update the display time on the screen
      displayTime.innerHTML = h + ":" + m + ":" + s;
  }
  // Function to start the stopwatch
  function watchStart() {
      if (timer === null) {
   // Start a new interval to update the stopwatch every second (1000 ms)
          timer = setInterval(stopwatch, 1000);
      }
  }
  
  function watchStop() {
      clearInterval(timer);
      timer = null; // Stop the timer and reset the state
  }
  
  function watchReset() {
      clearInterval(timer);
      [seconds, minutes, hours] = [0, 0, 0];
      displayTime.innerHTML = "00:00:00";
      timer = null; // Reset the timer state
  }
