const rawResellerInfo = require(`./${__reseller__}.js`);

let resellerInfo = {};

for(let lang in rawResellerInfo.byLangs) {
  resellerInfo[lang] = {...rawResellerInfo.common, ...rawResellerInfo.byLangs[lang]};
}

export default resellerInfo;
