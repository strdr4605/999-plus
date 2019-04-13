const sortAscBtn = document.getElementById("sortAsc");
const sortDesBtn = document.getElementById("sortDes");
const removeBoosterBtn = document.getElementById("removeBooster");

sortAscBtn.onclick = function(element) {
  const value = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: `sorting/sortAsc.js`
    });
  });
};

sortDesBtn.onclick = function(element) {
  const value = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: `sorting/sortDes.js`
    });
  });
};

removeBoosterBtn.onclick = function(element) {
  const value = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: `sorting/removeBooster.js`
    });
  });
};
