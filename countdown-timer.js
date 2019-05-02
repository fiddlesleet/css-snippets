<!-- Display the countdown timer in an element -->
<h5 class="countdown-days"></h5>

<script>
// Set the date we're counting down to
function countdownDays() { 
  var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Display the result in the element with id="demo"
  document.querySelector(".countdown-days").innerHTML = days + " days left to enroll";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdown-days").innerHTML = "EXPIRED";
  }
}, 1000);
};
  
countdownDays();
</script>
