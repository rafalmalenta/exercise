export default function cookieNotExist(name){

    var decodedCookie = decodeURIComponent(document.cookie);
    //na wypadek gdyby aplikacja posiadala inne ciastka tworzę funkcję do znaleziania 
    //ciasteczka o nazwie consent
    var consent;
    var cookieArray = decodedCookie.split('; ');
    
    cookieArray.some(cookie=>{       
        if(cookie.search(name) == 0){           
            consent = cookie.split("=")[1];
            return;
        }
    });    

    if (consent)
        return false;
    else
        return true
    
}