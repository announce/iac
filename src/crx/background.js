'use strict'
const app = require('./app')

/**
 * https://developer.chrome.com/docs/extensions/reference/api/contextMenus
 * https://developer.chrome.com/docs/extensions/reference/api/tabs
 */
const main = () => {
  const redirect = (pageUrl, tab) => {
    const url = app.convertRedirectionUrl(pageUrl)
    if (url.href === pageUrl) {
      console.log('Skipping redirection as target is the same to the given URL:', url)
      return
    }
    chrome.tabs.update(tab.id, {
      url: url.href
    })
  }

  chrome.runtime.onInstalled.addListener(() => {
    console.log('chrome.runtime.onInstalled:', app.scriptName)
    chrome.contextMenus.create({
      title: `[iAC] Toggle the language switch`,
      contexts: ['page'],
      id: app.scriptName
    })
  })

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log('chrome.contextMenus.onClicked:', info, tab)
    if (info.menuItemId === app.scriptName && 'pageUrl' in info) {
      return redirect(info.pageUrl, tab)
    }
  })
}

main()
