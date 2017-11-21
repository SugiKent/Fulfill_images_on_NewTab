chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.method) {
    case 'setItem':
      sendResponse({data: localStorage.setItem(request.key, request.value)});
      break;
  }
});
