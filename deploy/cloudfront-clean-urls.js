function handler(event) {
  var request = event.request;
  var host = request.headers.host && request.headers.host.value;
  var uri = request.uri;
  var querystring = request.querystring || {};

  function querySuffix() {
    // CloudFront supplies URL-encoded query names and values; preserve them.
    var pairs = [];
    for (var key in querystring) {
      if (querystring[key].multiValue) {
        var values = querystring[key].multiValue;
        for (var i = 0; i < values.length; i++) {
          pairs.push(key + "=" + values[i].value);
        }
      } else if (querystring[key].value === "") {
        pairs.push(key);
      } else {
        pairs.push(key + "=" + querystring[key].value);
      }
    }
    return pairs.length ? "?" + pairs.join("&") : "";
  }

  if (host === "vepolink.com") {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "https://www.vepolink.com" + uri + querySuffix() }
      }
    };
  }

  if (uri === "/wqms" || uri === "/wqms/") {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "/water-quality-monitoring/" + querySuffix() }
      }
    };
  }

  var deferredRoutes = ["/login", "/support", "/ops/support"];
  for (var routeIndex = 0; routeIndex < deferredRoutes.length; routeIndex++) {
    var route = deferredRoutes[routeIndex];
    if (uri === route || uri.indexOf(route + "/") === 0) {
      return {
        statusCode: 404,
        statusDescription: "Not Found",
        headers: {
          "cache-control": { value: "no-store" },
          "content-type": { value: "text/plain; charset=utf-8" },
          "x-robots-tag": { value: "noindex, nofollow" }
        },
        body: "Not Found"
      };
    }
  }

  var lastSegment = uri.substring(uri.lastIndexOf("/") + 1);
  if (lastSegment && lastSegment.indexOf(".") === -1) {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        // Keep the redirect on this host, even for a repeated leading slash.
        location: { value: uri.replace(/^\/+/, "/") + "/" + querySuffix() }
      }
    };
  }

  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
  }

  return request;
}
