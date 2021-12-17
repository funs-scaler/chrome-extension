var menuItem = {
    "id": "backcolor",
    "title": "设置背景颜色",
    "contexts": ["all"]
}
chrome.contextMenus.create(menuItem)

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId === 'backcolor') {

        chrome.tabs.insertCSS(null, {file: "css/backcolor.css"})
    }
})

