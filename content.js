// when it gets a message from background.js e.g a click on the icon
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = "text";
  	  var textAsVoice = new SpeechSynthesisUtterance(getSelectionText());
  	  window.speechSynthesis.speak(textAsVoice);
    }
  }
);

function getSelectionText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        return document.selection.createRange().text;
    } else {
    	return "Nothing highlighted."
    }
}