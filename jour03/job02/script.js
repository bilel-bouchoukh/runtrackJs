$("#btn_melanger").on("click",Randomize);


function Randomize(){
    let nbImg = $("#container").children("img").length;
    let tab = [];
    while (tab.length<nbImg){
        let nbrand = 1 + Math.floor(Math.random()*6);

        if (!tab.includes(nbrand)){
           tab.push(nbrand);
        }
    }



    clearimg();

    for (let number of tab){
        $("#container").append($('<img src="arc' + number + '.png">'))
    }
}

function clearimg(){
    $("#container").children("img").each(function(){
        $(this).remove();
    });
}

