import assignStylesToGDPR from "./assignStylesToGDPR";
import addButtons from "./addButtons"

export default function renderGDPRBox(){
    //checkIfShouldrender()
    var GDPRBox = document.createElement("div");
    GDPRBox.title = "GDPR consent";
    
    assignStylesToGDPR(GDPRBox);
    addButtons(GDPRBox);
   
    document.querySelector("body").append(GDPRBox); 
    
}