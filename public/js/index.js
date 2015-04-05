// index.js
(function () {
  "use strict";

  /**
   * Submits an order
   * @param parameters
   */
  function submitOrder(parameters) {
    var validate = parameters.validate;
    var size = parameters.size;
    var crust = parameters.crust;
    var toppings = parameters.toppings;
    alert("not implemented");
  }

  $(document).ready(function () {

    $("#orderForm").on("submit", function () {
      submitOrder({validate: true, size: "large", crust: "thin", toppings: ["pepperoni", "sausage"]});
      return false;
    });

  });

  var dog = new Animal();
  dog.name = "Lucky";
  dog.legCount = 3;
  dog.feed("Lamb Shank");

  var toInsert = "<div>\n  <ul>\n    <li>Lorem ipsum dolor.</li>\n    <li>Assumenda eligendi, molestias.</li>\n    <li>Eius nostrum, quaerat.</li>\n    <li>Odit, repellat reprehenderit!</li>\n    <li>Atque, corporis, dolore.</li>\n  </ul>\n</div>";

  var toExecute = "var x = 0;\nx++;\nx = 5;";

  var ex = "[0-9A-Za-z ]*";
})();

