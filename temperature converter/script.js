const button=document.getElementById('btn')

button.addEventListener('click',convert)

function convert(){
    const value=document.getElementById('value').value;
    const fromdegree=document.getElementById('fromdegree').value;
    const todegree=document.getElementById('todegree').value;
    const result=document.getElementById('result');
    if(value=="" || value == null){
        alert("*Value must be entered.")
        return false;
    }
    else if(fromdegree==todegree){
        alert("please specify a valid unit.");
        return false;
    }
    else if(fromdegree=='Celcious' && todegree=='Fahrenheit'){
        const ans=CeltoFahrenheit(value);
        result.innerHTML=(ans+' °F')
    }
    else if(fromdegree=='Celcious'&& todegree=='Kelvin'){
        const ans=CeltoKelvin(value);
        result.innerHTML=(ans+' Kelvin');
    }
    else if(fromdegree=='Fahrenheit' && todegree=='Celcious'){
        const ans=fahrtoCelcious(value);
        result.innerHTML=(ans+' °C')
    }
    else if(fromdegree=='Fahrenheit'&& todegree=='Kelvin'){
        const ans=FahrtoKelvin(value);
        result.innerHTML=(ans+' Kelvin');
    }
    else if(fromdegree=='Kelvin'&& todegree=='Celcious'){
        const ans=KeltoCelcious(value);
        result.innerHTML=(ans+' °C');
    }
    else if(fromdegree=='Kelvin'&& todegree=='Fahrenheit'){
        const ans=KeltoFahrenheit(value);
        result.innerHTML=(ans+' °F');
    }
}

function CeltoFahrenheit(value){
    const val=parseInt(value);
    const ans=((val*1.8)+32);
    return ans;
}
function fahrtoCelcious(value){
    const val=parseInt(value);
    const ans=((val-32)*5)/9;
    return ans
}
function CeltoKelvin(value){
    const val=parseInt(value);
    const ans=(val+273.15);
    return ans
}
function FahrtoKelvin(value){
    const val=parseInt(value);
    const ans=(((val-32)/1.8)+273.15);
    return ans
}
function KeltoCelcious(value){
    const val=parseInt(value);
    const ans=(val-273.15);
    return ans
}
function KeltoFahrenheit(value){
    const val=parseInt(value);
    const ans=((((val-273.15)*9)/5)+32);
    return ans
}