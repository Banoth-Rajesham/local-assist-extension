// Listen for the extension's icon to be clicked
chrome.action.onClicked.addListener((tab) => {
  // This tells Chrome to open the side panel in the current window
  chrome.sidePanel.open({ windowId: tab.windowId });
});