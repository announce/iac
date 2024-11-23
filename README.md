# IAC

[![Build Status](https://travis-ci.org/announce/icac.svg?branch=master)](https://travis-ci.org/announce/icac)

## Description

A Chrome Extension to provide quick access to the localized `*.atlassian.com` sites:

* [www.atlassian.com/*](https://www.atlassian.com/) ←→ [www.atlassian.com/ja/*](https://www.atlassian.com/ja/)
* [confluence.atlassian.com/*](https://confluence.atlassian.com/) ←→ [ja.confluence.atlassian.com/*](https://ja.confluence.atlassian.com/)
* [support.atlassian.com/*](https://support.atlassian.com/) ←→ [support.atlassian.com/ja/*](https://support.atlassian.com/ja/)

## Installation

1. Visit and install the Chrome Extension at [**iAC - Chrome Web Store**](https://chrome.google.com/webstore/detail/icac/plbhlfecmbmkphfgcpoijlidjapddidj?utm_source=github).

## Prerequisite

* Docker (for the release process only)
* Node v20
* Yarn v1.x

## Development

Run the command below:

```bash
./icac start
```

For the release:

```bash
./icac release
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
