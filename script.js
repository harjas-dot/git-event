let imgArray = ["segway.jpg","jfkmes.jpg","backcolor.jpg","Reunto.jpg", "segway.jpg","jfkmes.jpg","backcolor.jpg","Reunto.jpg"];
let contentArray=["fgdsghsdtfrg","tghbgavrtg","FRGBGB","rghrtghgvr","rgsvgfrvrf"]
let headingArray=["fgdsghsdtfrg","tghbgavrtg","FRGBGB","rghrtghgvr","rgsvgfrvrf"]
let NextBtn = document.querySelector(".Next");
let PrevBtn = document.querySelector(".Prev");

let n = 0; //Image Counter

function pictureChangeNext(){
    if(n>=0 && n<5){
        document.querySelector(".leftImg").src=imgArray[n+1];
        document.querySelector(".centerImg").src=imgArray[n+2];
        document.querySelector(".rightImg").src=imgArray[n+3];
        document.querySelector(".content").innerHTML=contentArray[n+2];
        document.querySelector(".name").innerHTML=headingArray[n+2];
        n = n+1;
        console.log(n);
    }
}

function pictureChangePrev(){

    if(n>0 && n<=5){
        n = n-1;
        document.querySelector(".leftImg").src=imgArray[n];
        document.querySelector(".centerImg").src=imgArray[n+1];
        document.querySelector(".rightImg").src=imgArray[n+2];

        console.log(n)
    }
}

NextBtn.addEventListener("click", pictureChangeNext);

PrevBtn.addEventListener("click", pictureChangePrev);
