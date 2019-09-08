import "./styles/style.sass";


(function(){    
    var body ;
    var div = document.createElement('div');
    function mutationCallback (mutations,observer){
      for (let i=0; i < mutations.length; i++){
        for (let j=0; j < mutations[i].addedNodes.length; j++){            
          if (mutations[i].addedNodes[j].nodeType === 1 && mutations[i].addedNodes[j].tagName === 'BODY'){ 
              console.log("rdy")                    
              window.dispatchEvent(new Event("BODYReady"));               
              observer.disconnect();
            }
        }
      }
    }   

    window.observer = new MutationObserver( mutationCallback );     
      window.observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });      
      window.addEventListener("BODYReady",function(){       
        //renderGDPRBox()
      });      
})()