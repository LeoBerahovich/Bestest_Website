var link1Clicks = 0;
var beeHovers = 0;


function hideLink2(){
    document.getElementById('realLink2').style.visibility = "hidden";
}

function happy(){
    document.getElementById("content3").className = "content4";
    document.getElementById("beeText").style.visibility = "hidden";
    document.getElementById("beeText2").style.visibility = "hidden";
    document.getElementById("honey").style.visibility = "hidden";
}

function moveLink() {
    link1Clicks += 1;
    if (link1Clicks == 1){
        document.getElementById('link1').className = 'link2';
    }else if (link1Clicks == 2){
        document.getElementById('link1').className = 'link3';
    }else if (link1Clicks == 3){
        document.getElementById('link1').className = 'link4';
    }else if (link1Clicks == 4){
        document.getElementById('link1').className = 'link1';
    }else if (link1Clicks == 5){
        document.getElementById('link1').innerHTML = "nevermind";
    }else{
        document.getElementById('link1').style.visibility = "hidden";
    }

}

function warningUpdate(){
    beeHovers += 1;
    if (beeHovers == 1){
        document.getElementById('guilt').innerHTML = "What are you doing!"
    }else if (beeHovers == 2){
        document.getElementById('guilt').innerHTML = "Please, I beg you stop!";
    }else if (beeHovers == 3){
        document.getElementById('guilt').innerHTML = "The Bees will eat all my honey!";
    }else if (beeHovers == 4){
        document.getElementById('guilt').innerHTML = "Why do you hate me?";
    }else if (beeHovers == 5){
        document.getElementById('guilt').innerHTML = "You have ruined my life.";
    }else{
        document.getElementById('guilt').innerHTML = "Just Leave.";
        document.getElementById('realLink2').style.visibility = "visible";
    }
}