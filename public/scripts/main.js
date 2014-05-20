$(function(){



  console.log('ready');

  $("#calbin1").hide();
  $("#calbin2").hide();

  $( "#date1").datepicker({
    onSelect: function(dateText, inst){
      var dateAsString = dateText;
      console.log(dateAsString);
      var dateAsString = $(this).datepicker("getDate");
      $(".leaving").append('<li class="times">' + moment(dateAsString).format("dddd, MMMM Do YYYY") + '</li');
    }
  });

  $( "#date2").datepicker({
    onSelect: function(dateText, inst){
      var dateAsString = dateText;
      console.log(dateAsString);
      var dateAsString = $(this).datepicker("getDate");
    $(".returning").append('<li class="times">' + moment(dateAsString).format("dddd, MMMM Do YYYY") +'</li>');
    }
  });

$("#toggle").click(function() {
    $('[data-slidepanel]').slidepanel({
      orientation: 'top',
      mode: 'overlay'
    });
  });


$("#may").on('click', function(){
  $("#calbin1").toggle();
    var newCal = $("#calbin1").datepicker();
    // $('#calbin2').addChild(newCal);
  });

$("#jun").on('click', function(){
    $("#calbin2").toggle();
  $("#calbin2").datepicker({defaultDate: '+1m'});
});


// $("#feb").on('click', function(){
//   $("#calbin2").datepicker(pickerOpts);
// });


});















