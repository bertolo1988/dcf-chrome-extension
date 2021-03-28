npm i 
npm run clean 
npm i
npm run build
cp -R dist/ dcf-chrome-extension/
zip -r dcf-chrome-extension dcf-chrome-extension/
rm -rf dcf-chrome-extension/

