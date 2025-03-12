let button = document.getElementById('button');
button.addEventListener('click',showhide);

function showhide(){
    let article = document.getElementById('citation');

    if(article.hidden === false){
        article.hidden = true;
    }
    else if (article.hidden === true){
        article.hidden = false
    }
    
    
    
}