var menuItem = {
    "id": "resource",
    "title": "设置背景图",
    "contexts": ["all"]
}
chrome.contextMenus.create(menuItem)

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId === 'resource') {
        var imgUrl = chrome.extension.getURL("img/girl.jpeg");

        chrome.tabs.executeScript(null, {code: "document.body.style.backgroundImage='url(\"" + imgUrl + "\")';" +
                "document.body.style.backgroundRepeat='repeat';"})
    }
})

