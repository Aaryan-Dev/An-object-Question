// You are given a number stored in a variable with the nameN

// You are also, given a string, whose length is stored in a variable with the nameK, and the string is stored in a variable with the namestr

// You have to map all lower case English characters, starting from the value stored inN.

// For example, if the value stored inN = 30, then the mapping of the characters will be as follows

// a-30
// b-31
// c-32
// d-33
// e-34
// f-35
// g-36
// h-37
// i-38
// j-39
// k-40
// l-41
// m-42
// n-43
// o-44
// p-45
// q-46
// r-47
// s-48
// t-49
// u-50
// v-51
// w-52
// x-53
// y-54
// z-55
// Finally, you have to print the sum of all the characters, present in the stringstr, according to the values mapped above

// For example, if the value stored instr = "abc", then the required output will be

// 30 + 31 + 32 = 93, which is the required output


function mapCharAndSum(N,K,str) {
    
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    
    let obj = {}
    sum = 0
    for(i=0; i<K; i++){
        
        for(j=0; j<alpha.length; j++){
            key = str[i]
            if(str[i]==alpha[j]){
                obj[key]=j + N
                sum = sum + obj[key];
            }
        }
    }
    
    console.log(sum);
    }
        
    