
function is_array(arr) {
    return Array.isArray(arr);
}

function array_Clone(array){

    let i = array.length;
    let arrayCopy = [];
    while (i--) {
        arrayCopy[i] =  array[i];
    }
    return arrayCopy;
}

function first_element(arr,n)
{
    let arr2=[];
    for(let i=0;i<n;i++)
    {
        arr2[i]=arr[i];
    }
    return arr2;
}


function concat(arr)
{
    let s="";
    for(let i=0;i<arr.length-1;i++)
    {
        s=s+arr[i]+',';
    }
    s=s+arr[arr.length-1];
    return s;
}


function frequent(arr) {

    let n=arr.length;
    arr.sort();
    let max_count = 1, res = arr[0];
    let curr_count = 1;
    for (let i = 1; i < n; i++)
    {
        if (arr[i] == arr[i - 1])
            curr_count++;
        else
        {
            if (curr_count > max_count)
            {
                max_count = curr_count;
                res = arr[i - 1];
            }
            curr_count = 1;
        }
    }
    if (curr_count > max_count)
    {
        max_count = curr_count;
        res = arr[n - 1];
    }
    return res;
}


console.log(is_array([1,3,4,5,5,6]));
console.log(array_Clone([1,2,3,4,5]));
console.log(first_element([1,2,3,4,5],3));
console.log(concat(["one","two","three"]));
console.log(frequent([3,'a','a','a',2,3,'a',3,'a',2,4,9,3]));