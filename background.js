/*
chrome.contextMenus.create({
    id: "copy-text",
    title: "Copy to Risk Analyser",
    contexts: ["selection"]
  });
  
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "copy-text") {
        //document.execCommand("copy");
        let selectedText = window.getSelection().toString();
        console.log(selectedText);
        console.log("copy-text");
    }
    console.log("copy-text");
});
*/
