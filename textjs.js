

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {


    
        if (this.readyState == 4 && this.status == 200)
        
        {
            let data = JSON.parse(this.responseText).feed.
            entry;
            var rollText = data[0]["gsx$a"]["$t"];
     
     document.getElementById("demo1").innerHTML +=

 "<div>" +

 rollText +

 "</div>"

             
    }


    {
        let dataa = JSON.parse(this.responseText).feed.
        entry;
        var rollText = dataa[1]["gsx$a"]["$t"];
 
 document.getElementById("demo2").innerHTML +=

"<div>" +

rollText +

"</div>"

         
}



   
        
    
    };
    
    xmlhttp.open(
    "GET",
    "https://spreadsheets.google.com/feeds/list/1nHfof0d4jRFoTM7UdUqZ0GGVi388_62EMAfuSr6fJKo/1/public/values?alt=json",
    true
    
    );
    xmlhttp.send();
    
    
    
