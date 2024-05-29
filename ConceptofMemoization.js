//Memoization is a programming technique used to optimize the performance of functions by caching the results 
//of expensive function calls and returning the cached result when the same inputs occur again. It's particularly useful for functions that are 
//computationally expensive but frequently called with the same arguments

function square(n,times)
{
    if(times==0)
    {
        return 1;
    }
    else{
        return n*square(n,times-1);
    }
}

function memoize(fn){
    const cache = {};
    return function(...args){
        const key = args.toString();
        if(cache[key])   //similar to DSA memoization of dp if(dp[i][target]!=-1){return dp[i][target];}
        {
            console.log("Fetching value from cache")
            return cache[key];
        }
        else{
            const result = fn(...args);//sending arguments to the function sent as an arguement to function memoise
            cache[key]=result;
            return cache[key];
        }
    }
}
const anwer = memoize(square);  //function curring call memoise with squaure calls first function inner function can be called any times with any parameter
console.log(anwer(2,2));  //square of 2 is 4
console.log(anwer(5,5));  // 5 power of 5 is 3125