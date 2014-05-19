$(function(){

  console.log('ready');

  $( "#date1").datepicker({
    onSelect: function(dateText, inst){
      var dateAsString = dateText;
      console.log(dateAsString);
      var dateAsString = $(this).datepicker("getDate");
      $(".leaving").append('<li class="times">' + moment(dateAsString).format("dddd, MMMM Do YYYY") + '</li>').fadeIn();
    }
  });

  $( "#date2").datepicker({
    onSelect: function(dateText, inst){
      var dateAsString = dateText;
      console.log(dateAsString);
      var dateAsString = $(this).datepicker("getDate");
    $(".returning").append('<li class="times">' + moment(dateAsString).format("dddd, MMMM Do YYYY") +'</li>').fadeIn();
    }
  });



});











