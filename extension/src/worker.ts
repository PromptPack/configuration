chrome.runtime.onInstalled.addListener(() => {
  console.log("PromptPack Extension installed.");
});

// Listen for hotkey commands
chrome.commands.onCommand.addListener((command) => {
  if (command === "toggleSidebar") {
    console.log("Alt+P pressed — sending TOGGLE_SIDEBAR message");
    // Send message to all tabs
    chrome.tabs.query({}, (tabs) => {
      for (const tab of tabs) {
        if (tab.id) {
          chrome.tabs.sendMessage(tab.id, { type: "TOGGLE_SIDEBAR" });
        }
      }
    });
  }
});
