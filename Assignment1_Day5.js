
function reverseString(){
    let str = "Madam";
    let rev = "";

    for(let i = str.length - 1; i >= 0; i--){
        rev = rev + str.charAt(i);
    }
    console.log(rev);
}
reverseString();

function palindrome(){
    let str = "Madam";
    let rev1 = str
    let rev = "";

    for(let i = str.length - 1; i >= 0; i--){
        rev = rev + str.charAt(i);
    }
    console.log(rev);
    if(str == rev){
        return true;
    }else{
        return false;
    }
}
console.log(palindrome());
