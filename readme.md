# Browserslist Config Bootstrap

[![npm version](https://badge.fury.io/js/browserslist-config-bootstrap.svg)](https://www.npmjs.com/package/browserslist-config-bootstrap)  
A shareable Browserslist configuration mirroring Bootstrap's defaults.

## Installation

Install the package via npm:

```bash
npm install browserslist-config-bootstrap
```

## Usage

Add the configuration to your `browserslist` field in `package.json`:

```json
"browserslist": [
    "extends browserslist-config-bootstrap"
]
```

Alternatively, create a `.browserslistrc` file in your project root and add:

```
extends browserslist-config-bootstrap
```

## Scripts

The package includes a build script:

```bash
npm run build
```

## Links

- [Browserslist Documentation](https://github.com/browserslist/browserslist)
- [Bootstrap](https://getbootstrap.com)
- [npm Package](https://www.npmjs.com/package/browserslist-config-bootstrap)
