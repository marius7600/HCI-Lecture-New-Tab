/*
Open every reference in a new tab.
*/
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].target = "_blank";
}

/*
wait for site to load
*/
var interval = setInterval(function () {
  if (document.readyState === "complete") {
    // open Menue
    clickByXPath("/html/body/div[1]/div[11]");
    // disable animations
    clickByXPath("/html/body/div[4]/nav/ol/li[2]");
    // close Menue
    clickByXPath('//*[@id="close"]');
  }
}, 4000);

/*
Click on Element by XPath
*/
function clickByXPath(path) {
  var element = document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  if (element) {
    /*
    wait for element to be clickable
    */
    var interval = setInterval(function () {
      if (element.click) {
        element.click();
        clearInterval(interval);
      }
    }, 2000);
  }
}
