var menuItem = {
    "id": "translate",
    "title": "使用google翻译",
    "contexts": ["selection"]
}
chrome.contextMenus.create(menuItem)

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId === "translate" && clickData.selectionText) {
        var createData = {
            url: "https://translate.google.cn/?sl=zh-CN&tl=en&text=" + clickData.selectionText + "&op=translate",
            type: "popup",
            top: 5,
            left: 5,
            width: 1000,
            height: 500,
        }
        chrome.windows.create(createData)
    }
})
