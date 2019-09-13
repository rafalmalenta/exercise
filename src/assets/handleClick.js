export default function handleClick(clickedTargetValue, GDPR){
    var time24FromNow = new Date;
    time24FromNow.setTime(time24FromNow.getTime()+(1000*60*60*24));    
    document.cookie = `consent=${clickedTargetValue}; expires=${time24FromNow}`;
    GDPR.remove(); 
    document.body.style.overflow = "scroll";  
   

}