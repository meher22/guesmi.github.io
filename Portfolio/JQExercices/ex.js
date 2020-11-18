
$(document).ready(function() {
    //ex1
    $("#tester1").click(function(){
        if ($("#prenom").is(":visible")) { alert("prenom est visible"); }
        if ($("#prenom").is(":hidden")) { alert("prenom est caché"); }
    });
    //ex2 
    $("#tester2").click(function(){
        $("<p>GUESMI Meher</p>").insertAfter('.ma_classe');
    });
    //ex3
    $("#afficher_texte").click(function(){
        alert ("Le texte contenu dans le textarea est " + $("#mon_textarea").val());
    });
    //ex4
    document.getElementById('no_paste').addEventListener('keydown',
    function (foo)
    {
        if (foo.keyCode == 86) // Code clé du copier/coller
        {
        alert('Le collage de texte n est pas autorisé !');
        foo.preventDefault();
        }
    });
    //ex5
    function supprimer_dernier_caractere(elm) {
        var val = $(elm).val();
      var cursorPos = elm.selectionStart;
      $(elm).val(
         val.substr(0,cursorPos-1) + // before cursor - 1
        val.substr(cursorPos,val.length) // after cursor
      )
      elm.selectionStart = cursorPos-1; // replace the cursor at the right place
      elm.selectionEnd = cursorPos-1;
      }
        // Supprime le dernier caractère s'il n'est pas alphanumérique sur evt keyup
        $('body').delegate('input.only_alpha_num','keyup',function(){
          if(!$(this).val().match(/^[0-9a-z]*$/i)) // a-z et 0-9 uniquement
            supprimer_dernier_caractere(this);
        });
    //ex6
    $("#mon_image").hover(
        function () {
          $(this).attr('src','http://memo-web.fr/wp-content/uploads/2019/05/image1.jpg');  
        },
        function () {
           $(this).attr('src','http://memo-web.fr/wp-content/uploads/2019/05/image2.jpg');  
        }
     );
    //ex7
    $( "#moncalendrier").datepicker({ showOn: "both",                           
        buttonImage: "calendar.png",
        buttonImageOnly: true,
        buttonText:'Cliquer pour choisir une date',
        onClose: function(dateText, inst) {  }, $options });
    $('#moncalendrier').focus();
    //ex8
    $("#monimage").hover(
        function(){
         // La souris passe sur l'élément
         $("#temp").remove()
         $(this).append("<div id='temp'></div>"); // Création d'un div temporaire qui va héberger l'image en surimpression
         bgimg = "url(2.png)";
         $(this).find("#temp").css({position:"absolute",background:"transparent "+bgimg+" no-repeat",opacity:0});
         $(this).find("#temp").stop().animate({opacity:1},500);  }, 
      function(){
         // La souris sort de l'élément
           $(this).find("#temp").stop().animate({opacity:0},500,function(){$(this).remove()});
        }
    );
    //ex9
    $('#memo_127').hover(
        function(){ $(this).animate({ opacity : '.75' }); },
        function(){ $(this).animate({ opacity : '1' }); }
    );
    //ex10
    $('html').click(function(event){
        if(event.target.id == 'id_de_mon_element') {
          alert ("j'ai cliqué sur mon élément");
        } else {
          alert ("j'ai cliqué à l'extérieur de mon élément");
        }
    });
    //ex11
    $(function() {
        var today = new Date();
        var ladate = Date.parse(today);
        var lannee = today.getFullYear();
        var dateprintemps = Date.parse(new Date(lannee, 2, 21));
        var dateete = Date.parse(new Date(lannee, 5, 21));
        var dateautomne = Date.parse(new Date(lannee, 8, 21));
        var datehiver = Date.parse(new Date(lannee, 11, 21));
        if (ladate >= dateprintemps && ladate < dateete) {
            $("#monimage2").css({ backgroundImage: "url('img/Fond-Printemps.jpeg')" });
        } else if (ladate >= dateete && ladate < dateautomne) {
            $("#monimage2").css({ backgroundImage: "url('img/Fond-Ete.jpg')" });
        } else if (ladate >= dateautomne && ladate < datehiver) {
            $("#monimage2").css({ backgroundImage: "url('img/Fond-Automne.jpg')" });
        } else if (ladate >= datehiver || ladate < dateprintemps) {
            $("#monimage2").css({ backgroundImage: "url('img/Fond-Hiver.png')" });
        }
    });
    //ex12
    $('.maclassegenerale').not(".maclasseaexclure").css({"background":"url(btPlay.png)  no-repeat 5px 5px"});
    //ex13
    $("#tester3").click(function(){
        var nb_element_de_class;
        nb_element_de_class=$(".ma_classe").length;
        alert (nb_element_de_class);
    });
    //ex14
    $("#tester4").click(function(){
        var mavaleur = parseInt($("#monDiv1").css('height')) - parseInt($("#monDiv2").css('margin-top'));
        alert("la valeur est de " + mavaleur);
    });
    //ex15
    $(function() {
        $(".elementtextarea").attr('readonly', 'readonly');
    });
    //ex17
    $('#redirection').click(function() {
        $('html,body').animate({scrollTop: $("#monancre").offset().top}, 'slow'      );
      });
    //ex20
    $('#titre').keyup(function(e) {    
        if(e.keyCode == 13) {
               alert('Hey ! Tu as appuyé sur la touche entrée !!'); 
      }
     }); 
    //ex22
    var new_element = jQuery('<div id="new_elt">?</div>');
    new_element.css({
        background: 'gray',
        width     : '50px',
        height    : '30px',
        padding   : '3px'
    });
    $('body').append(new_element);
    //ex23
    $(".div_fils").click (
        function (event){
          alert ('click fils!');
         event.stopPropagation(); 
        }
    );
    //ex24
    $("#mondiv").parent().children('div').each(function(i){
        alert (i +' : '+$(this).html());
    });
    //ex26
    $('#tester5').click(function() {
        $(".monimage").each(function(){ 
            $(this).css({"background":""});
        });
    });
    //ex27
    $('#element option[value="Marseille"]').attr("selected", "selected");
    //ex28
    $("#monDiv").fadeOut('slow').queue(function() {
        $("#monDeuxiemeDiv").fadeIn('slow');
        $(this).dequeue();
     });
    //ex30
    function FaireClignoterImage (){ $("#image-neon").fadeOut(200).delay(300).fadeIn(200); } 
    setInterval(FaireClignoterImage,700);






    

});
