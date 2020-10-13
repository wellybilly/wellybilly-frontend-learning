> npm install -g @vue/cli
> vue create 06-extracting-reusable-components

Issue: New vue-cli application fails to compile due to eslint-loader #4231
Soluton:
1) > npm install eslint
2) update the package.json by replacing the eslint-loader to ""eslint": "^6.8.0"," in dependency section. 