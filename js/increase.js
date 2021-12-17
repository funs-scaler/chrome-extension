var menuItem = {
    "id": "increase",
    "title": "增大字体",
    "contexts": ["all"]
}
chrome.contextMenus.create(menuItem)

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId === 'increase') {
        chrome.tabs.executeScript(null, {code: "var old = window.getComputedStyle(document.body).fontSize;\n" +
                "var index = old.indexOf('p');\n" +
                "var size = parseInt(old.substring(0, index));\n" +
                "var newSize = size + 10 + 'px';\n" +
                "document.body.style.fontSize = newSize;"})
    }

})



