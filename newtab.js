/*
Open every reference in a new tab.
*/
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].target = "_blank";
}

// open Menue
clickByXPath("/html/body/div[1]/div[11]");
// disable animations
clickByXPath("/html/body/div[4]/nav/ol/li[2]");
// close Menue
clickByXPath('//*[@id="close"]');

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
    element.click();
  }
}
