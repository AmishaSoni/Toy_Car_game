
   

var y;
 var m=0;
function start()
{
   y= setInterval(run,100);

    function run()
    {
        if(m==1200)
        {
            clearInterval(y);
            m=0;
        }
        else
        {
            m+=5;
            var car_id=document.getElementById("car");
            car_id.style.marginLeft=m+"px";
        }
        
    }
}

function stop()
{
clearInterval(y);
}


















