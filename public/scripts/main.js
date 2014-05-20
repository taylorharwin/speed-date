$(function(){


  console.log('ready');

  $("#calbin1").hide();
  $("#calbin2").hide();
  $('#chart').hide();


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
      mode: 'blend'
    });
  });


$('.showchart').on('click', function(){
  console.log('clicks on button');
  $('#chart').fadeIn(750);
});


$('.close').on('click', function(){
    $('#chart').hide();
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


var chart = c3.generate({
  bindto: '#chart',
      data: {
        columns: [
            ['Spring', 10],
            ['Summer', 30],
            ['Winter', 50],
            ['Fall', 10],
        ],
        type : 'donut'
    },
    donut: {
        title: "Popular Dates",
        onclick: function (d, i) { console.log(d, i); },
        onmouseover: function (d, i) { console.log(d, i); },
        onmouseout: function (d, i) { console.log(d, i); }
    }
});





});















