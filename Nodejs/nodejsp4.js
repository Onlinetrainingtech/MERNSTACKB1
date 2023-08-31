function Number(x,y)
{
    if(x>y)
    {
        console.warn(`${x} is greater ${y}`)
    }
else
{
    console.warn(`${x} is less than or equal to ${y}`)
}
}
x=100
y=200
Number(x,y)