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


$(".month").on('click', function(){
  var toAdd = $('calbin')
    var newCal = $("#calbin2").datepicker(pickerOpts);
    // $('#calbin2').addChild(newCal);
  });


// $("#feb").on('click', function(){
//   $("#calbin2").datepicker(pickerOpts);
// });


});















