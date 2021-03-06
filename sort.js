const sortAscBtn = document.getElementById("sortAsc");
const sortDesBtn = document.getElementById("sortDes");
const removeBoosterBtn = document.getElementById("removeBooster");

sortAscBtn.onclick = element => {
  const value = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      file: `sorting/sortAsc.js`
    });
  });
};

sortDesBtn.onclick = element => {
  const value = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      file: `sorting/sortDes.js`
    });
  });
};

removeBoosterBtn.onclick = element => {
  const value = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      file: `sorting/removeBooster.js`
    });
  });
};

// Auto options

const autoSortAsc = document.getElementById("autoSortAsc");
chrome.storage.sync.get("autoSortAsc", data => {
  autoSortAsc.checked = data.autoSortAsc;
});
autoSortAsc.onclick = event => {
  chrome.storage.sync.set({ autoSortAsc: event.target.checked }, () => {
    console.log("autoSortAsc is " + event.target.checked);
  });
};

const autoBooster = document.getElementById("autoBooster");
chrome.storage.sync.get("autoBooster", data => {
  autoBooster.checked = data.autoBooster;
});
autoBooster.onclick = event => {
  chrome.storage.sync.set({ autoBooster: event.target.checked }, () => {
    console.log("autoBooster is " + event.target.checked);
  });
};
