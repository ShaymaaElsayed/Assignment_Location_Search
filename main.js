let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let createAccount = document.getElementById('createAccount');
let demo = document.getElementById('demo');



/*pag1*/ 
// function Click(){
//     location.assign('./success.html')
// };

function searchInput(){
    
let arr=location.search.split("&")         //["userName=shaymaa","password=4444"]
for(let i=0; i<arr.length-1; i++){
    let data = arr[i].split("=")[1];       //["userName","shaymaa"],["passwoed""4444"]
    console.log(data)
    // document.write(data);
    demo.innerHTML =data;
    
}
};
searchInput();
