exports.meta = {
  png:'image/png',
  jpg:'image/jpeg',
  gif:'image/gif',
  html:'text/html',
  htm:'text/html',
  md:'text/html',
  txt: 'text/plan',
  woff: 'font/woff',
  js: 'text/javascript',
  css: 'text/css'
}

exports.getMime = function(type){
  return this.meta[type] || null;
}
