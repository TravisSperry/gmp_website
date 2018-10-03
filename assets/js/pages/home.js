// Set the date we're counting down to
var countDownDate = new Date("October 9, 2018 23:59:00");
var countDownTime = countDownDate.getTime();
var currentMonth = new Date().getMonth()

// Update every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  var distance = countDownTime - now;

  // calculate days left in the month


  // do more things and get the months and fix the days...
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown-days").innerHTML = `<strong>${days}</strong> days`;
  document.getElementById("countdown-hours").innerHTML = `<strong>${hours}</strong> hours`;
  document.getElementById("countdown-minutes").innerHTML = `<strong>${minutes}</strong> minutes`;
  document.getElementById("countdown-seconds").innerHTML = `<strong>${seconds}</strong> seconds`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "IT HAS BEGUN!";
  }
}, 1000);

ajax.get(apiUrl + '/website_options.json', {}, function(data) {
  var data = data || ''
  var studentRegistrationCount = JSON.parse(data)[0].value || '4,456,772';
  var percentGoal = (parseInt(studentRegistrationCount.replace(/\,/g,''))/10000000)*100;

  document.getElementById("gauge-progress").setAttribute("style", `width: ${percentGoal}%;`)
  document.getElementById("gauge-marker").innerHTML = studentRegistrationCount;
});


ajax.get('https://www.explodingdots.org/userCountFiltered', {}, function(data) {
  console.log(data)
  // document.getElementById("gauge-progress").setAttribute("style", `width: ${percentGoal}%;`)
  // document.getElementById("gauge-marker").innerHTML = studentRegistrationCount;
});
