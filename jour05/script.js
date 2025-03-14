$("#btn_connexion").on("click",function(even){
    if($("#conn_email").val()===""){
        $("#msg_email").show();
        even.preventDefault(); // Permet de ne pas recharger la page
    } else{
        $("#msg_email").hide();
    }

    if ($("#conn_password").val()===""){
        $("#msg_pass").show();
        even.preventDefault(); // Permet de ne pas recharger la page
    }else{
        $("#msg_pass").hide();
    
    }
});

$("#btn_inscription").on("click", function(event){
    if($("#insc_email").val()===""){
        $("#msg_email").show();
        event.preventDefault();
    }
    else{
        $("#msg_email").hide();
    }

    if($("#insc_prenom").val()===""){
        $("#msg_prenom").show();
        event.preventDefault();
    }else{
        $("#msg_prenom").hide();
    }

    if($("#insc_nom").val()===""){
        $("#msg_nom").show();
        event.preventDefault();
    }else{
        $("#msg_nom").hide();
    }

    if($("#insc_pass").val()===""){
        $("#msg_pass").show();
        event.preventDefault();
    }else{
        $("#msg_pass").hide();
    }

    if($("#insc_adresse").val()===""){
        $("#msg_adresse").show();
        event.preventDefault();
    }else{
        $("#msg_adresse").hide();
    }

    if($("#insc_postal").val()===""){
        $("#msg_postal").show();
        event.preventDefault();
    }else{
        $("#msg_postal").hide();
    }

});

