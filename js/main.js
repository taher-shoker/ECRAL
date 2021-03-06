$(function () {
  $("a[href*=#offers]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});
new WOW().init();

$(document).ready(function () {
  $(".nav-tabs > li a[title]").tooltip();

  //Wizard
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    var target = $(e.target);

    if (target.parent().hasClass("disabled")) {
      return false;
    }
  });

  $(".next-step").click(function (e) {
    var active = $(".wizard .nav-tabs li.active");
    //active.next().removeClass('disabled');
    nextTab(active);
  });
  $(".prev-step").click(function (e) {
    var active = $(".wizard .nav-tabs li.active");
    prevTab(active);
  });
});

function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}

$(".nav-tabs").on("click", "li", function () {
  $(".nav-tabs li.active").removeClass("active");
  $(this).addClass("active");
});

(function () {
  var parent = document.querySelector(".range-slider");
  if (!parent) return;

  var rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    };
  });

  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
    };
  });
})();

$(document).ready(function () {
  $(".filter-btn").click(function () {
    $(".filter-box").show();
  });
  $(".close-filter").click(function () {
    $(".filter-box").hide();
  });
});
$("#choosePackage").click(function () {
  $("#packages").modal("hide");
  $("#requestLong").modal("show");
});

$("#signUPForm").click(function () {
  $("#signIn").modal("hide");
  $("#signUp").modal("show");
});

$("#signIn_btn").click(function () {
  $(".drop-down-sign-in").toggle();
});
$("#signIn .sign-in-btn").click(function () {
  window.location.href='dashboard.html'
});


$(function () {
  $("#date_pick_up").datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    calendarWeeks : false,
    clearBtn: true,
    disableTouchKeyboard: true,
     modal: true,
    });
    $("#drop_off").datepicker({
      format: 'dd-mm-yyyy',
      autoclose: true,
      calendarWeeks : false,
      clearBtn: true,
      disableTouchKeyboard: true
      });
      $("#return-date").datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        calendarWeeks : false,
        clearBtn: true,
        disableTouchKeyboard: true
        });
   
    
});
$(".time-input").timepicker({
  timeFormat: "h:mm p",
  interval: 60,
  minTime: "10",
  maxTime: "6:00pm",
  defaultTime: "11",
  startTime: "10:00",
  dynamic: false,
  dropdown: true,
  scrollbar: true,
});
/******** Multi select **********/
$(document).ready(function () {
  $("#multiselect").multiselect({
    buttonWidth: "100%",
    includeSelectAllOption: true,
    nonSelectedText: "Multi Selection ",
  });
});

function getSelectedValues() {
  var selectedVal = $("#multiselect").val();
  for (var i = 0; i < selectedVal.length; i++) {
    function innerFunc(i) {
      setTimeout(function () {
        location.href = selectedVal[i];
      }, i * 2000);
    }
    innerFunc(i);
  }
}

$(function () {
  $("#slider-range-min").slider({
    range: "min",
    value: 37,
    min: 1,
    max: 700,
    slide: function (event, ui) {
      $("#amount").val("$" + ui.value);
    },
  });
  $("#amount").val("$" + $("#slider-range-min").slider("value"));
});
$(function () {
  $("#slider-range-min-2").slider({
    range: "min",
    value: 37,
    min: 1,
    max: 700,
    slide: function (event, ui) {
      $("#amount-2").val("$" + ui.value);
    },
  });
  $("#amount-2").val("$" + $("#slider-range-min-2").slider("value"));
});

$(document).ready(function () {
  $(".benefits-items").slick({
    arrows: true,
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,
    speed: 300,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});



$( function() {
  var handle = $( "#custom-handle" );

$( "#slider-kilometers" ).slider({
  value: 60,
  orientation: "horizontal",
  range: "min",
  min: 1000,
  max: 10000,
  step: 1000,
  animate: true,
  create: function() {
          handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
          handle.text( ui.value );
        }
  
});
} );



$( function() {
  var handle = $( "#custom-feedback" );

$( "#slider-feedback" ).slider({
  value: 60,
  orientation: "horizontal",
  range: "min",
  min: 100,
  max: 500,
  step: 100,
  animate: true,
  create: function() {
          // handle.text( $( this ).slider( "value" ) );
        },
        slide: function( event, ui ) {
          // handle.text( ui.value );
        }
  
});
} );



$("#booking-now").click(function () {
  Swal.fire({
    position: 'top',
    showCloseButton: true,
  showCancelButton: false,
  focusConfirm: false,
    icon: 'success',
    title: 'Your Booking Request Has Been Successfully',
    text: 'Our Customer Services Will Contact You Within 12 Hours ',
  })
});

$( function() {
  $( "#slider-range-filter" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(  ui.values[ 0 ] +"L.E" + "   "+ ui.values[ 1 ] + "L.E"  );
    }
  });
  $( "#amount" ).val(  $( "#slider-range-filter" ).slider( "values", 0 ) +" L.E"  +
    " - " + $( "#slider-range-filter" ).slider( "values", 1 ) + " L.E"  );
} );


$(".circle_percent").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
$this.append('<div class="circle_inbox"><span class="text-bal"> your balance</span> <span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000, 
  easing: 'swing', 
  step: function (now) {
          $this.find(".percent_text").text("EGP"+ Math.ceil(now) * 100);
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
} 
});