var xhttp =new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        resp=this.responseText;
        console.log(resp);
    }
}
xhttp.open("GET","https://restcountries.com/v3.1/all",true);
xhttp.send();