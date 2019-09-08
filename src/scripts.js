import "./styles/style.sass";
import renderGDPRBox from "./assets/renderGDPRBox"
function mutationCallback (mutations,observer){
  for (let i=0; i < mutations.length; i++){
    for (let j=0; j < mutations[i].addedNodes.length; j++){            
      if (mutations[i].addedNodes[j].nodeType === 1 && mutations[i].addedNodes[j].tagName === 'BODY'){                             
          dispatchEvent(new Event("BODYReady"));               
          observer.disconnect();
        }
    }
  }
}   

(function(){   
   
    if(document.querySelector("body"))
      {
        /*jezeli osadzimy plugin w body mutationObserver nie wykryje pojawienia się body
         
        */
        dispatchEvent(new Event("BODYReady"));
      }
    else {
      var observer = new MutationObserver( mutationCallback );     
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      });      
    }  
    var div = document.createElement('div');    

    
    window.addEventListener("BODYReady",function(){   
       console.log("fire");       
       renderGDPRBox()
      });      
})()