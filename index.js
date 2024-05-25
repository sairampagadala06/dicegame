var r1=Math.floor(Math.random()*6)+1;
var randomimg='images/'+"dice"+r1+".png";
var changeimg=document.querySelectorAll("img")[0];
changeimg.setAttribute("src",randomimg);
var r2=Math.floor(Math.random()*6)+1;
var randomimg2='images/'+"dice"+r2+".png";
var changeimg2=document.querySelectorAll("img")[1];
changeimg2.setAttribute("src",randomimg2);
if(r1>r2)
{
    document.querySelector("h1").innerText ="Player11 won";
}
else if(r2>r1)
    {
        document.querySelector("h1").innerHTML ="Player22 won";
    }
    else
    {
        document.querySelector("h1").innerHTML ="Draw!!";
    }
