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
    var newCal = $("#calbin1").datepicker({
      onSelect: function(dateText, inst){
        var dateAsString = dateText;
        console.log(dateAsString);
        var dateAsString = $(this).datepicker("getDate");
        $(".plan1").append('<li class="times">' + moment(dateAsString).format("dddd, MMMM Do YYYY") + '</li');
        chart.load({columns:[['Bookings by Month',,9,6,8,7,2,2,10,11,6,7,8,2]]});
      }
    });
  });

$("#jun").on('click', function(){
    $("#calbin2").toggle();
  $("#calbin2").datepicker({
    defaultDate: '+1m',
      onSelect: function(dateText, inst){
        var dateAsString = dateText;
        console.log(dateAsString);
        var dateAsString = $(this).datepicker("getDate");
        $(".plan2").append('<li class="times">' + moment(dateAsString).format("dddd, MMMM Do YYYY") + '</li');
      chart.load({columns:[['Bookings by Month',9,6,8,7,2,3,10,11,6,7,8,2]]});
      }
    });
});


var chart = c3.generate({
    bindto: '#chart',
    size: {
        height: 280,
        width: 280
    },
        data: {
          columns: [
      ['Bookings by Month',9,6,8,7,1,2,10,11,6,7,8,2]
      ],
    }
    });

});















