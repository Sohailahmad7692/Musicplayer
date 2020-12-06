// document.getElementById('searchclick').addEventListener('onclick',searchbarfn)
// function searchbarfn(){
//     var input=document.getElementById('searchbar').innerHTML;
//     input=input.toLowerCase();
//     var ele=document.getElementsByClassName('input');
//     ele.scrollIntoView();
// }
document.getElementById('searchclick').onclick=function(){searchbarfn()}
function searchbarfn(){
    var input=document.getElementById('searchbar').value;
    input=input.toLowerCase();
    var ele=document.getElementsByClassName('khairiyat');
    ele.scrollto(true);
}