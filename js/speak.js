var menuItem = {
    "id": "tts",
    "title": "朗读",
    "contexts": ["selection"]
}
chrome.contextMenus.create(menuItem)

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId === "tts" && clickData.selectionText) {
        console.log(chrome.tts)
        chrome.tts.speak(clickData.selectionText, {"rate": 0.7})
    }
})
