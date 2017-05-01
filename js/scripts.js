$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks = ["name1", "name2", "verb1", "verb2", "bodypart"];

    blanks.forEach(function(blank) {
      var inputs =$("input#" + blank).val();
      $("." + blank).text(inputs);
    });

    $("#story").show();

    event.preventDefault();
  });
});
