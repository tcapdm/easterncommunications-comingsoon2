$( function() {
  var endDate = "June  17, 2017 00:00:00";

  $('.countdown.simple').countdown({ date: endDate });

  $('.countdown.styled').countdown({
    date: endDate,
    render: function(data) {
      $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
    }
  });

  $('.countdown.callback').countdown({
    date: +(new Date) + 10000,
    render: function(data) {
      $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
    },
    onEnd: function() {
      $(this.el).addClass('ended');
    }
  }).on("click", function() {
    $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
  });



});

$(window).load(function(){
    $('#page-loader').addClass('hidden');
    setTimeout(function(){
      $('.redirect').css({'opacity':1, 'z-index':3});
    countdownTimer();
  }, 6000);
});

var seconds = 10; // seconds for HTML
var foo; // variable for clearInterval() function

function redirect() {
    document.location.href = 'https://easterncommunications.com.ph/';
}

function updateSecs() {
    document.getElementById("seconds").innerHTML = seconds;
    seconds--;
    if (seconds == -1) {
        clearInterval(foo);
        redirect();
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 1000);
}