import "./styles/style.sass";
import renderGDPRBox from "./assets/renderGDPRBox"
import mutationCallback from "./assets/mutationCallback"


(function(){   
   
    if(document.querySelector("body"))
      {
        /*jezeli osadzimy plugin w body, mutationObserver nie wykryje pojawienia się body
        więc jeżeli istnieje przechodzę do renderowania GDPR
        */
        dispatchEvent(new Event("BODYReady"));
      }
    else {
      /* Jeżeli nie istnieje czekam aż się pojawi
      */
      var observer = new MutationObserver( mutationCallback );     
      observer.observe(document.documentElement, {
        childList: true,// ten jeden warunek wystarczy dla znalezienia body kiedy        
      });      
    }     
    
    window.addEventListener("BODYReady",function(){   
      renderGDPRBox()
      });      
})()