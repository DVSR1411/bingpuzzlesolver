/*!
* Bing Puzzle Solver
* (c) 2025 D.V.Sathwik Reddy
* License: MIT
*/
document.getElementById("solve").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["solver.js"]
  });
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});
