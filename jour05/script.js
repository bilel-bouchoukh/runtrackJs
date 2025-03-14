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

    alert($("#conn_password").val());
});

$("#btn_inscription").on("click", function(event){

    let password = $("#insc_pass").val();
    let password_length = password.length;

    let prenom = $("#insc_prenom").val();
    let prenom_length = prenom.length;

    let nom = $("#insc_nom").val();
    let nom_length = nom.length;

    if($("#insc_email").val()===""){
        $("#msg_email").show();
        event.preventDefault();
    }
    else{
        $("#msg_email").hide();
    }

    if(prenom_length<3){
        $("#msg_longueur_prenom").show();
        event.preventDefault();
    }
    else{
        $("#msg_longueur_prenom").hide();
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

    if(nom_length<5){
        $("#msg_longueur_nom").show();
        event.preventDefault();
    }
    else{
        $("#msg_longueur_nom").hide();
    }

    /*if(password_length<8){
        $("#msg_longeur_mdp").show();
        event.preventDefault();
    }
    else{
        $("#msg_longeur_mdp").hide();
    }*/

    if($("#insc_pass").val()===""){
        $("#msg_pass").show();
        event.preventDefault();
    }else{
        $("#msg_pass").hide();
    }

    $("#insc_pass").each(function () {
        var validated =  true;
        if(this.value.length < 8)
            validated = false;
        if(!/\d/.test(this.value))
            validated = false;
        if(!/[a-z]/.test(this.value))
            validated = false;
        if(!/[A-Z]/.test(this.value))
            validated = false;
        if(/[^0-9a-zA-Z]/.test(this.value))
            validated = false;
        $('#regex_pass').text(validated ? "" : "Le mot de passe doit contenir une majuscule, un chiffre et caractère spécial");
        // use DOM traversal to select the correct div for this input above
    });

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

