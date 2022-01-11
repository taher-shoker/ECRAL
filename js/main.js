$(function() {
  $('a[href*=#offers]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
new WOW().init();

$(document).ready(function () {
  $('.nav-tabs > li a[title]').tooltip();
  
  //Wizard
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

      var target = $(e.target);
  
      if (target.parent().hasClass('disabled')) {
          return false;
      }
  });

  $(".next-step").click(function (e) {

      var active = $('.wizard .nav-tabs li.active');
      //active.next().removeClass('disabled');
      nextTab(active);

  });
  $(".prev-step").click(function (e) {

      var active = $('.wizard .nav-tabs li.active');
      prevTab(active);

  });
});

function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}


$('.nav-tabs').on('click', 'li', function() {
  $('.nav-tabs li.active').removeClass('active');
  $(this).addClass('active');
});


(function() {

  var parent = document.querySelector(".range-slider");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
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
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);
			
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });

})();

$(document).ready(function () {
  $('.filter-btn').click(function(){
    $('.filter-box').show()
  })
  $('.close-filter').click(function(){
    $('.filter-box').hide()
  })

})
$('#choosePackage').click(function(){
  $('#packages').modal('hide')
  $('#requestLong').modal('show')
})

$('#signUPForm').click(function(){
  $('#signIn').modal('hide')
  $('#signUp').modal('show')
})



$(document).on('change', '.file-input', function() {
  var filesCount = $(this)[0].files.length;
  
  var textbox = $(this).prev();
  
  if (filesCount === 1) {
  var fileName = $(this).val().split('\\').pop();
  textbox.text(fileName);
  } else {
  textbox.text(filesCount + ' files selected');
  }
  });


  $('.date-input').datetimepicker({
    timepicker:false,
    format:'d.m.Y'
  });
  $('.time-input').datetimepicker({
    datepicker:false,
    format:'H:i a'
  });

/******** Multi select **********/
$(document).ready(function() {
  $('#multiselect').multiselect({
    buttonWidth : '100%',
    includeSelectAllOption : true,
		nonSelectedText: 'Multi Selection '
  });
});

function getSelectedValues() {
  var selectedVal = $("#multiselect").val();
	for(var i=0; i<selectedVal.length; i++){
		function innerFunc(i) {
			setTimeout(function() {
				location.href = selectedVal[i];
			}, i*2000);
		}
		innerFunc(i);
	}
}

  $(window).on('resize', function(){
    var win = $(this); //this = window
    console.log(win.width())
     if (  win.width() < 1680  ) { document.body.style.zoom = "67%"; }
  });
  

  document.body.style.zoom = "67%";