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
    clickByXPath("/html/body/div[4]/nav/ol/li[2]");

    clearInterval(interval);
  }
}, 100);

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
    }, 100);
  }
}
