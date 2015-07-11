var user = prompt("Would you like to convert from Celsius to Fahrenheit?")
if(user == "yes") {
  var celsius = prompt("Please enter a temperature.")
    alert(celsius * 9/5 + 32 + " Fahrenheit");
} else {
  var fahrenheit = prompt("Please enter a tempurature.")
    alert((fahrenheit - 32) * 5/9 + " Celsius");
}
