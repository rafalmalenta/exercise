export default function renderGDPRBox(){
    //checkIfShouldrender()
    var GDPRBox = document.createElement("div");
    GDPRBox.title = "GDPR consent";
    var acceptButton = document.createElement("button");  
    var cancelButton = document.createElement("button");  
    document.body.style.overflow = "hidden";
    
    acceptButton.append(document.createTextNode("Accept"));      
    cancelButton.append(document.createTextNode("Cancel"));
    var buttons = [acceptButton,cancelButton];
    var buttonsWrapper = document.createElement("div");
    //Style Wrappera
    buttonsWrapper.style.position = "absolute";
    buttonsWrapper.style.width = "100%";
    buttonsWrapper.style.bottom = "20px";  
    buttonsWrapper.style.boxSizing = "border-box";
    buttonsWrapper.style.margin = "0px auto";   
    buttonsWrapper.append(acceptButton,cancelButton);
    GDPRBox.append(buttonsWrapper); 
    buttons.forEach((button)=>{
        button.style.width = "50%";        
    })
    //Style boxa    
    GDPRBox.style.border = "3px solid red"
    GDPRBox.style.top = "50%";
    GDPRBox.style.left = "50%";
    GDPRBox.style.display = "block";
    GDPRBox.style.boxSizing = "border-box";
    GDPRBox.style.marginLeft = "-300px";    
    GDPRBox.style.marginTop = "-150px";    
    GDPRBox.style.width = "600px";
    GDPRBox.style.height = "300px";
    GDPRBox.style.zIndex = 2000;
    GDPRBox.style.position = "fixed";
   

    document.querySelector("body").append(GDPRBox);
}