
/*
    var xhttp =new XMLHttpRequest();
    var respJSON=[];
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            resp=this.responseText;
            var respJSON= JSON.parse(resp);
            html =document.getElementById('list');
            html.innerHTML="<th >official Name</th> <th>Capital</th>   <th>Region</th> <th>Lenguage</th><th>Population</th> <th>Flag</th> ";
            console.log(respJSON);
            
            for(var i=0;i<respJSON.length;i++){
                html.innerHTML+="<tr><td onclick='ajaxBbox()' id="+i+">"+respJSON[i].name.official+"</td> <td id="+i+">"+respJSON[i].capital+"</td> <td id="+i+">"+respJSON[i].region+"</td> <td id="+i+">"+respJSON[i].languages+"</td><td id="+i+">"+respJSON[i].population+"</td>  <td id="+i+"><img src ="+respJSON[i].flags.png+"></img></td> <tr>"
            }
        }
    }
    xhttp.open("GET","https://restcountries.com/v3.1/all",true);
    xhttp.send();
*/
    
   
    function ajaxBbox(){
        $(document).click(function(event) {
            var text="";
            var text = $(event.target).text();
        var xhttp =new XMLHttpRequest();
        var respJSON=[];
        xhttp.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200){
                resp=this.responseText;
                var respJSON= JSON.parse(resp);
                bootbox.alert(respJSON.extract_html);
            }
          
        }
        
        xhttp.open("GET","https://en.wikipedia.org/api/rest_v1/page/summary/"+text,true);
        xhttp.send();
         
        
    }); 
    }
    
    function reqListener() {
        var data = JSON.parse(this.responseText);
        html =document.getElementById('list');
        html.innerHTML="<th >official Name</th> <th>Capital</th>   <th>Region</th> <th>Lenguage</th><th>Population</th> <th>Flag</th> ";
       
        for(var i=0;i<data.length;i++){
            html.innerHTML+="<tr><td onclick='ajaxBbox()' id="+i+">"+data[i].name.official+"</td> <td id="+i+">"+data[i].capital+"</td> <td id="+i+">"+data[i].region+"</td> <td id="+i+">"+data[i].languages+"</td><td id="+i+">"+data[i].population+"</td>  <td id="+i+"><img src ="+data[i].flags.png+"></img></td> <tr>"
        }
      }
      
      function reqError(err) {
        console.log('Fetch Error :-S', err);
      }
      
      var oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      oReq.onerror = reqError;
      oReq.open('get', 'https://restcountries.com/v3.1/all', true);
      oReq.send();