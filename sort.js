const sortBtn = document.getElementById("sort");
console.log(sortBtn);

sortBtn.onclick = function(element) {
  const value = element.target.value;
  console.log("Sort clicked");
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      // code: `console.log("${value}")`,
      file: `sorting.js`
    });
  });
};
