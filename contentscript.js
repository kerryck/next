(function(){
    document.body.addEventListener('keydown', function(evt){
        if(evt.ctrlKey){
            if(evt.keyCode === 190){ // 190 is the keycode for ">"
                chrome.extension.sendRequest({
                    changePage: true,
                    changeBy: 1
                });
            } else if (evt.keyCode === 188){ // 188 is the keyCode for "<"
                chrome.extension.sendRequest({
                    changePage: true,
                    changeBy: -1
                });
            }
        }
    });
})();