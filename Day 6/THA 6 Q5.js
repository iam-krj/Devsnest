var a1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var flag = 1;
var k = 0;
var i,j,item;
for ( i=0; i<a1.length; i++)
{
        for ( j=i; j<a1.length; j++)
        {
                if (a1[i] == a1[j])
               { console.log(a1[i])
                 k++;}
                if (flag<k)
                {
                  flag=k;
                  item = a1[i];
                }
        }
        k=0;
}
console.log(item+" ( " +flag +" times ) ") ;