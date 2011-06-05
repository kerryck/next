document.body.onkeydown = function(evt){
    console.log(evt.altKey, evt.keyCode);
    if(evt.altKey){
        if(evt.keyCode === 187){
            console.log("sending");
            chrome.extension.sendRequest({changePage: true, changeAmmount: 1});
        }else if (evt.keyCode === 189){
             console.log("sending");
            chrome.extension.sendRequest({changePage: true, changeAmmount: -1});
        }
    }
};
