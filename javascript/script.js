let n=5;
let data="";
for(i=1;i<=n;i++)
{
    let str="*";
    data += str.repeat(i)+"\n";
}
 document.getElementById("output").textContent=data;