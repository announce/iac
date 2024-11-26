# iAC

![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/plbhlfecmbmkphfgcpoijlidjapddidj)
![Chrome Web Store Last Updated](https://img.shields.io/chrome-web-store/last-updated/plbhlfecmbmkphfgcpoijlidjapddidj)
![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/plbhlfecmbmkphfgcpoijlidjapddidj)

## Description

A Chrome Extension to provide quick access to the localized `*.atlassian.com` sites:

* [www.atlassian.com/*](https://www.atlassian.com/) ←→ [www.atlassian.com/ja/*](https://www.atlassian.com/ja/)
* [confluence.atlassian.com/*](https://confluence.atlassian.com/) ←→ [ja.confluence.atlassian.com/*](https://ja.confluence.atlassian.com/)
* [support.atlassian.com/*](https://support.atlassian.com/) ←→ [support.atlassian.com/ja/*](https://support.atlassian.com/ja/)

This extension was originally named "iCAC" because it only supported CAC (confluence.atlassian.com). It has now been renamed "iAC" to represent "internationalized atlassian.com", reflecting its expansion to include several other subdomains.

## Installation

1. Visit and install the Chrome Extension via [**iAC - Chrome Web Store**](https://chrome.google.com/webstore/detail/icac/plbhlfecmbmkphfgcpoijlidjapddidj?utm_source=github).

## Prerequisite

* Docker (for the release process only)
* Node v20
* Yarn v1.x

## Development

Run the command below:

```bash
./iac start
```

For the release:

```bash
./iac release
```

Then you will get the crx zip file in `./var`.

## Project Links

* Upstream work: [trunk](https://github.com/announce/icac/compare/master...ymkjp:master)
* Demo app: [crx](https://chrome.google.com/webstore/detail/icac/plbhlfecmbmkphfgcpoijlidjapddidj?utm_source=github)
* Release: [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)

## Documents

* CRX
  * [Extensions / Develop  \|  Chrome for Developers](https://developer.chrome.com/docs/extensions/develop)
* ImageMagick
  * [Text Handling \- IM v6](http://www.imagemagick.org/Usage/text/#label_bestfit)
