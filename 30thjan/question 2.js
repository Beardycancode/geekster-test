var n = prompt("enter range");
n=parseInt(n);
var count;

for(i=2;i<=n;i++)
{
    count = true;
    for(j=2;j<=parseInt(i/2);j++)
    {
        if(i%j==0)
        {
            count=false;
            break;
        }
    }
    if(count)
    document.write(i+" ");
}
