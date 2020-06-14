function changeStarColor(event) {
    let element = document.getElementById(event.target.id);
    let starId = parseInt(element.id);
    let strId ="";
    let i =1;
    while (i<=starId){
        strId =i.toString();
        let gold = document.getElementById(strId);
        gold.style.color = "black";
        gold.style.backgroundColor  = "gold";
        i++;
    }
}

function removeRating(x){
    if(parseInt(x.id) !== star){
        x.style.backgroundColor = "";
        let i =1;
        while(i <= parseInt(x.id)){
            let tileId = i.toString();
            let tile = document.getElementById(tileId);
            tile.style.backgroundColor ="";
            i++;
        }
    }
}

let star = null;
function setRating(event) {
    star = parseInt(event.target.id);
    let stars = document.getElementsByClassName("rating-title");
    for(let i=0; i < stars.length; i++){
        if(stars[i].style.color === "gold"){
            stars[i].style.color = "gold";
        }
    }
}