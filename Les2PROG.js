let huidigeTijd = new Date(2023, 9, 20, 20, 10);
if(huidigeTijd.getHours() > 9 && huidigeTijd.getHours() < 16 ){
    console.log("Ik moet op school zijn!")
}

var schooldag = "maandag"
if (schooldag == "maandag" || schooldag == "dinsdag" || schooldag == "woensdag" || schooldag == "donderdag" || schooldag == "vrijdag"){
    console.log("Je moet naar school!")    
}
