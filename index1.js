var image = ["img/1.jpg","img/2.jpg","img/3.jpg"];
var imgTag = document.querySelector("img");

var count =0;

function next(){
    count++;
    if(count>=image.length){
        count =0;
        imgTag.src = image[count];
    }
    else{
        imgTag.src = image[count];
    }

}
function prev(){
    count--;
    if(count<0){
        count =image.length - 1;
        imgTag.src = image[count];
    }
    else{
        imgTag.src = image[count];
    }


}