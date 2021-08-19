

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {


    
        if (this.readyState == 4 && this.status == 200)
        
        {
            let data = JSON.parse(this.responseText);
            var rollText = data["values"][1];
     
     document.getElementById("text").innerHTML +=
 rollText 
    }



    
    };
    
    xmlhttp.open(
    "GET",
    "https://sheets.googleapis.com/v4/spreadsheets/1nHfof0d4jRFoTM7UdUqZ0GGVi388_62EMAfuSr6fJKo/values/Sheet1?alt=json&key=AIzaSyBG04zpNB-Dz6bkEGpwU81-X3dHvQSB388",
    true
    
    );
    xmlhttp.send();
    
    
    
