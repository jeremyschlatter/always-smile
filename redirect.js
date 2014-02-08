chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Don't redirect again if this url is already a redirect.
    if (details.url.match(/redirect=true/)) {
      return;
    }
    var match = details.url.match(/^(http|https):\/\/www.amazon.com\/([\S\s]*)/);
    return {redirectUrl: match[1] + "://smile.amazon.com/" + match[2]};
  },
  {urls: ["*://www.amazon.com/*"]},
  ["blocking"]
);