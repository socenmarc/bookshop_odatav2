# bookshop_odatav2

Simple CAP bookshop scenario with odata v2 adapter ready to be deployed to CF

Thanks to Gregor Wolf for his support with https://answers.sap.com/questions/13013845/-11.html.

## Requirements
* [Node.js](https://nodejs.org/en/) v10 or higher
* [Git](https://git-scm.com)
* [SQLite DB](https://www.sqlite.org/download.html) (Windows only; pre-installed on Mac/Linux)

#### Optional (if you want to import the code into an editor)
* [VS Code](https://code.visualstudio.com)
* [Add CDS extension to VS](https://cap.cloud.sap/docs/get-started/in-vscode#add-cds-editor)

## Download and Installation

#### Set npm registry
```sh
npm set @sap:registry=https://npm.sap.com
```

#### Install `cds` development kit
```sh
# `@sap`-scoped packages are set via .npmrc
npm install -g @sap/cds-dk
cds  #> test-run it
```
Got issues?  Check out the [documentation](https://cap.cloud.sap/docs/get-started/).

#### Clone, build and run

```sh
git clone https://github.com/SAP-samples/cloud-cap-samples samples && cd samples && npm i`
cd bookshop
npm install
npm run deploy
npm run build
npm run startv2
```

## Test

- <http://localhost:4004> to test with Fiori sandbox
- <http://localhost:4004/catalog> to test OData v4 services.
- <http://localhost:4004/v2/catalog> to test OData v2 services.
