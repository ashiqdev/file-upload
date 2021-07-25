$(document).ready(function(touch){
    $(".custom-select").each(function(touch){
      $(this).wrap("<span class='select-wrapper'></span>");
      $(this).after("<span class='holder'></span>");
    });
    $(".custom-select").change(function(touch){
      var selectedOption = $(this).find(":selected").text();
      $(this).next(".holder").text(selectedOption);
    }).trigger('change');
  });