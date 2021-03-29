rm -rf node_modules/
rm -rf dist/
rm dcf-chrome-extension.zip
npm install
npm run build
cp -R dist/ dcf-chrome-extension/
zip -r dcf-chrome-extension dcf-chrome-extension/
rm -rf dcf-chrome-extension/

