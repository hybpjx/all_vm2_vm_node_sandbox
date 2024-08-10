const sdenv = require('sdenv-extend').sdenv();
const window = sdenv.memory.sdWindow;

const webkitRequestFileSystem = function webkitRequestFileSystem(type, size, successCallback, errorCallback) {
  if (typeof successCallback === 'function') {
    window.setTimeout(successCallback, 0);
  }
};
sdenv.tools.setNativeFuncName(webkitRequestFileSystem, 'webkitRequestFileSystem')
window.webkitRequestFileSystem = webkitRequestFileSystem;
