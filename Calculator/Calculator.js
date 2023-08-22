// getting the display field element
let v=document.getElementById('i');
    totalexp='';
    x='';
    flag=0;
    //function for adding input to display
    function addtodisplay(num,d)
    {
        totalexp=totalexp+num;
        x=x+d
            v.value=x;
    }
    // to clear display
    function Clearr()
    {
        totalexp=''
        x='';
        v.value=totalexp;
    }
    //to calculate result and show
    function calculate()
    {
        if(flag)
        {flag=0;
            totalexp=totalexp+')';
            totalexp=eval(totalexp);
        v.value=totalexp;
        totalexp='';
        x='';
        }
        else{
            totalexp=eval(totalexp);
        v.value=totalexp;
        totalexp='';
        x='';
        }
    }
    //function for square root
    function sqrte(str)
{
    n=str;
    n=n+'('
    totalexp=totalexp+n;
    x=x+'√';
        v.value=x;
        flag=1;

}