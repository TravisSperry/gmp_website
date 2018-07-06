var ajax = {},
    apiUrl = document.head.querySelector("[name=gmp-api-url]").content,
    baseUrl = document.head.querySelector("[name=site-url]").content

ajax.x = function () {
  if (typeof XMLHttpRequest !== 'undefined') {
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true
      return xhr;
  }
  var versions = [
      "MSXML2.XmlHttp.6.0",
      "MSXML2.XmlHttp.5.0",
      "MSXML2.XmlHttp.4.0",
      "MSXML2.XmlHttp.3.0",
      "MSXML2.XmlHttp.2.0",
      "Microsoft.XmlHttp"
  ];

  var xhr;
  for (var i = 0; i < versions.length; i++) {
      try {
          xhr = new ActiveXObject(versions[i]);
          break;
      } catch (e) {
      }
  }
  return xhr;
};

ajax.get = function (url, data, callback, async) {
  var query = [];
  for (var key in data) {
    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
  }
  ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async);
};

ajax.send = function (url, callback, method, data, async) {
  if (async === undefined) {
    async = true;
  }
  var x = ajax.x();
  x.open(method, url, async);
  x.onreadystatechange = function () {
    if (x.readyState == 4) {
      callback(x.responseText);
    }
  };
  if (method == 'POST') {
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  }
  x.send(data);
};
