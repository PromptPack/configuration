console.log("PromptPack content script loaded.");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "TOGGLE_SIDEBAR") {
    console.log("TOGGLE_SIDEBAR received in content script");
    alert("Sidebar toggled!"); // Placeholder for UI injection later
  }
  sendResponse({ ok: true });
});
