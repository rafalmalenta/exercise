import assignStylesToGDPR from "./assignStylesToGDPR";
import addButtons from "./addButtons";
import cookieNotExist from "./cookieNotExist";

export default function renderGDPRBox(){
    if(cookieNotExist("consent")){   

        var GDPRBox = document.createElement("div");
        GDPRBox.title = "GDPR consent";
        document.querySelector("body").append(GDPRBox);        
        assignStylesToGDPR(GDPRBox);
        addButtons(GDPRBox);   
        
    }
        
}