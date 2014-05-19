$(function(){

  console.log('ready');

  $( "#date1").datepicker({
    onSelect: function(dateText, inst){
      var dateAsString = dateText;
      console.log(dateAsString);
      var dateAsObject = $(this).datepicker("getDate");
    $(".leaving").append(dateAsObject);
    }
  });

  $( "#date2").datepicker({
    onSelect: function(dateText, inst){
      var dateAsString = dateText;
      console.log(dateAsString);
      var dateAsObject = $(this).datepicker("getDate");
    $(".returning").append(dateAsObject);
    }
  });



});











