# GOST6482-2011.RU

## Dev and deploy

```shell
cd %project_dir%
git checkout beget
npm install
npm run dev
npm run build
git add -A
git commit -m "commit text"
git push origin beget

ssh %beget_server%
cd gost6482-2011.ru/public_html
git pull
git checkout beget
```
