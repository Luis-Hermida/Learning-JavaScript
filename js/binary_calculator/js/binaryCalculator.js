function onButtonPress(e, keyAction) {
  if (keyAction) {
    var action = keyAction;
  } else {
    var btn = e.target || e.srcElement;
    var action = document.getElementById(btn.id).innerHTML;
  }
  var res = document.getElementById("res");

  switch (action.toLowerCase()) {
    case "0":
    case "1":
    case "+":
    case "-":
    case "×":
    case "÷":
      res.innerHTML += action;
      break;
    case "c":
      res.innerHTML = "";
      break;
    case "=":
      var expr = res.innerHTML;
      var nums = /(\d+)/g;

      // Replace special characters to handle eval(expr)
      expr = expr.replace("×", "*").replace("÷", "/");

      // Replace all base 2 nums with base 10 equivs
      expr = expr.replace(nums, function (match) {
        return parseInt(match, 2);
      });

      // eval in base 10 and convert to base 2
      res.innerHTML = Math.floor(eval(expr).toString(2));
      break;
    default:
      console.error("should not be executed");
      break;
  }
}

var buttons = document.getElementsByTagName("button");
for (let button of buttons) {
  button.onclick = onButtonPress;
}

document.addEventListener("keypress", function (event) {
  let code;

  if (event.key !== undefined) {
    code = event.key;
  } else if (event.keyIdentifier !== undefined) {
    code = event.keyIdentifier;
  } else if (event.keyCode !== undefined) {
    code = event.keyCode;
  }

  switch (code.toLowerCase()) {
    case "0":
      onButtonPress(null, "0");
      break;
    case "1":
      onButtonPress(null, "1");
      break;
    case "+":
      onButtonPress(null, "+");
      break;
    case "-":
      onButtonPress(null, "-");
      break;
    case "*":
      onButtonPress(null, "×");
      break;
    case "/":
      onButtonPress(null, "÷");
      break;
    case "c":
      onButtonPress(null, "c");
      break;
    case "=":
      onButtonPress(null, "=");
      break;
    case "enter":
      onButtonPress(null, "=");
      break;
    default:
      break;
  }
});
