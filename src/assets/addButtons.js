export default function addbuttons(element){
    var acceptButton = document.createElement("button");
    acceptButton.value= "accept";
    var cancelButton = document.createElement("button");
    cancelButton.value= "cancel";  
    document.body.style.overflow = "hidden";
    
    acceptButton.append(document.createTextNode("Accept"));      
    cancelButton.append(document.createTextNode("Cancel"));
    var buttons = [acceptButton,cancelButton];
    var buttonsWrapper = document.createElement("div");

    buttonsWrapper.style.position = "absolute";
    buttonsWrapper.style.width = "100%";
    buttonsWrapper.style.bottom = "20px";  
    buttonsWrapper.style.boxSizing = "border-box";
    buttonsWrapper.style.margin = "0px auto";   
    buttonsWrapper.append(acceptButton,cancelButton);
    element.append(buttonsWrapper); 
    buttons.forEach((button)=>{
        button.style.width = "50%";        
    })

    buttons.forEach((button)=>{       
        button.addEventListener("click",(e)=>{   
            console.log(button);       
            //handleClick(e.target.value);
        })
    })
}