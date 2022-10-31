let next = document.querySelector("#next");
let pre = document.querySelector("#pre");
let images = ['1.jpg','2.jpg','3.jpg','4.jpg'];
let i = 1;
console.log(i);
next.addEventListener('click',()=>{
console.log(i);
    if(i>=images.length){
document.querySelector(".image").setAttribute("src",`${images.length}.jpg`);
    }else{
        i +=1;
document.querySelector(".image").setAttribute("src",`${i}.jpg`);
    }

})




pre.addEventListener('click',()=>{
if(i<=1){
    document.querySelector(".image").setAttribute("src",`${1}.jpg`);
}else{
    
    document.querySelector(".image").setAttribute("src",`${i-=1}.jpg`);
}
})
