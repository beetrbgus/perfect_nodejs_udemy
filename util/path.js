// 루트 디렉토리를 알려주는 모듈
const path = require('path');

module.exports = path.dirname(require.main.path);