window.addEventListener(
  "DOMContentLoaded",
  function loaded(event) {
    window.removeEventListener("DOMContentLoaded", loaded, false);

    const color = document.getElementById("backColorChange");
    const celsius = document.getElementById("celsius");
    const farenheit = document.getElementById("farenheit");

    color.addEventListener("change", function (event) {
      let val = event.target.value;
      document.body.style.backgroundColor = val;
    });

    celsius.addEventListener("blur", function (event) {
      let value = event.target.value;
      console.log(value);
      if (value != "" && !isNaN(value)) {
        farenheit.value = (value * 9) / 5 + 32;
        farenheit.style.color = "black";
      } else if (isNaN(value)) {
        farenheit.value = "Valeur numerique seulement !!!";
        farenheit.style.color = "red";
      }
    });

    farenheit.addEventListener("blur", function (event) {
      let value = event.target.value;
      console.log(value);
      if (value != "" && !isNaN(value)) {
        celsius.value = (value - 32) / (9 / 5);
        celsius.style.color = "black";
      } else if (isNaN(value)) {
        celsius.value = "Valeur numerique seulement !!!";
        celsius.style.color = "red";
      }
    });
  },
  false
);
