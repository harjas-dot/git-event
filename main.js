let imgArray = ["images/Cultural Eve.JPG",
"images/EDM night.png",
"images/Mela.JPG",
"images/Gurpurab.JPG"
];
let contentArray=["Cultural eve (Sham-e-Virasat) is one of Virsa’s paramount events. Giddha, Bhangra wars,Traditional Walk take place on this day. Everyone relishes this event and is one of the ways to render the spirits of Punjabi culture.",
"Addy Berry, Mr.Singh and Rhythm were invited and whole cast of Yaar jigree and Kasooti degree was invited.Event was amazing and students had fun.",
"VIRSA MELA is a stage to showcase the most assorted and vivid culture in India. It will disclose you in elation and illuminate the festive mood. The village sight and the glint of lamps make the evening more stunning. The enthusiasm and contribution of participants make the environment more sensational.",
"Virsa hosts this event in the memory of Guru Nanak Dev Ji to seek his blessings and to thank the almighty and bring peace. Every year, Ragis sing divine and melodious hymns, swaying everyone in the rhythms of spirituality. This is followed by Guru ka Langar. Virsa keeps us deeply rooted and bound to our diverse culture."]
let headingArray=["Sham-e-Virasat",
"EDM and Bollywood Night",
"Virsa Mela",
"Gurpurab",
]
let NextBtn = document.querySelector(".Next");
let PrevBtn = document.querySelector(".Prev");

let n = 0; //Image Counter

function pictureChangeNext(){
    if(n>=0 || n<=3 ){
      n=n+1;
      if(n==4){
        n=0;
        document.querySelector(".leftImg").src=imgArray[3];
        document.querySelector(".centerImg").src=imgArray[n];
        document.querySelector(".rightImg").src=imgArray[n+1];
        document.querySelector(".content").innerHTML=contentArray[n];
        document.querySelector(".name").innerHTML=headingArray[n];
      }
      else{

        document.querySelector(".leftImg").src=imgArray[n-1];
        document.querySelector(".centerImg").src=imgArray[n];
        if(n==3){
          document.querySelector(".rightImg").src=imgArray[0];
        }
        else{
          document.querySelector(".rightImg").src=imgArray[n+1];
        }

        document.querySelector(".content").innerHTML=contentArray[n];
        document.querySelector(".name").innerHTML=headingArray[n];

      }
        console.log(n);
    }
}

function pictureChangePrev(){

    if(n>=0 || n<=3){

      if(n==0){
        n=3;
        document.querySelector(".leftImg").src=imgArray[n-1];
        document.querySelector(".centerImg").src=imgArray[n];
        document.querySelector(".rightImg").src=imgArray[0];
        document.querySelector(".content").innerHTML=contentArray[n];
        document.querySelector(".name").innerHTML=headingArray[n];
      }
      else{
        n = n-1;
        if(n==0){
          document.querySelector(".leftImg").src=imgArray[4];
        }
        else{
          document.querySelector(".leftImg").src=imgArray[n-1];
        }
        document.querySelector(".centerImg").src=imgArray[n];
        document.querySelector(".rightImg").src=imgArray[n+1];
        document.querySelector(".content").innerHTML=contentArray[n];
        document.querySelector(".name").innerHTML=headingArray[n];
      }
        console.log(n)
    }
}

NextBtn.addEventListener("click", pictureChangeNext);

PrevBtn.addEventListener("click", pictureChangePrev);
