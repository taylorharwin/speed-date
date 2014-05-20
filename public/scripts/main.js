$(function(){

  var pickerOpts = {
    showOn: 'button',
    beforeShow: function (input, inst) {
        setTimeout(function () {
            inst.dpDiv.css({
                top:500,
                left:500,
                float:'right'
              });
          }, 0);
      }
  };

  console.log('ready');

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


$("#jan").on('click', function(){
  $("#calbin1").datepicker(pickerOpts);
});

$("#feb").on('click', function(){
  $("#calbin2").datepicker(pickerOpts);
});


});















