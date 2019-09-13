export default function AssignStylesToGDPR(element){
    
    var GDPRCSS = element.style;
   
    GDPRCSS.top = "50%";
    GDPRCSS.left = "50%";
    GDPRCSS.display = "block";
    GDPRCSS.boxSizing = "border-box";
    GDPRCSS.marginLeft = "-300px";    
    GDPRCSS.marginTop = "-150px";    
    GDPRCSS.width = "600px";
    GDPRCSS.height = "300px";
    GDPRCSS.zIndex = 2000;
    GDPRCSS.position = "fixed";

}