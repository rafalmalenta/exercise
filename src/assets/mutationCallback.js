export default function mutationCallback (mutations,observer){
    for (let i=0; i < mutations.length; i++){
      for (let j=0; j < mutations[i].addedNodes.length; j++){            
        if (mutations[i].addedNodes[j].nodeType === 1 && mutations[i].addedNodes[j].tagName === 'BODY'){                             
            dispatchEvent(new Event("BODYReady"));               
            observer.disconnect();
          }
      }
    }
  }   