function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

window.totalIt = function() {
  var input = document.getElementsByName("product");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += 1;
    }
  }
  if (total >= 3) {
    document.getElementById("total").value = "$" + (total * 10).toFixed(2);
  } else {
    document.getElementById("total").value = "$" + (total * 15).toFixed(2);
  }
}

function cal_total(val) {

  exist_val = document.getElementById("total").value;
  final_value = parseFloat(val) + parseFloat(exist_val)
  document.getElementById("total").value = Math.abs(final_value);
}


window.totalPrisDessert = function() {
  var input = document.getElementsByName("dessert");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("total").value = "$" + total.toFixed(2);
}
