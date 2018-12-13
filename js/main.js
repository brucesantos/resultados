
// main JS
$(document).ready(function() {

  $("#btn-inicio").click(function() {
    TweenMax.to(".iniciar", .5, {
      marginTop: "-350px",
      height: "100vh",
      ease: Back.easeOut.config(1.4),
      force3D:true
    });
    TweenMax.staggerFrom(".montagemAnimada", .4, {
      y: 100,
      autoAlpha:0,
      delay:.5,
      ease:Back.easeOut,
      force3D:true
    }, .1);
    $("#btn-voltar").show();
    $("#btn-inicio").hide();
    $("#perdeu-etiqueta").fadeOut();
    $('.grupo-senha').addClass('bloqueado').find('input').prop('disabled', true);

    $(".capa").fadeTo(500, 0);
    setTimeout(function(){
      $('#Txt_Protocolo').trigger('touchstart');
    },1000);

  }); //esse é o clique no botão de inicio

  $('#Txt_Protocolo').on('touchstart', function() {
    $(this).focus();
  });

  $("#btn-voltar").click(function() {
    TweenMax.to(".iniciar", .5, {
      marginTop: 0,
      height: "initial",
      ease: Power4.easeOut,
      force3D:true
    });
    TweenMax.to(".montagemAnimada", .4, {
      visibility: "hidden",
      ease: Back.easeOut
    });
    $("#btn-voltar").hide();
    $("#btn-inicio").show();
    $("#perdeu-etiqueta").fadeIn();
    $(".capa").fadeTo(500, 100);
  });

  $("#Txt_Protocolo").on('keyup', function() {
    if($(this).val().length == 16) {
      $("#Txt_Senha").prop('disabled', false).focus();
      $(".grupo-senha").removeClass('bloqueado');
    } else {
      $("#Txt_Senha").prop('disabled', true);
      $(".grupo-senha").addClass('bloqueado');
    }
  });

  $("#Txt_Senha").on('keyup', function() {
    if($(this).val().length == 8) {
      $("#Btn_Consultar").removeClass('bloqueado').addClass('ativado').focus();
      $("#Txt_Senha").blur();
    } else {
      $("#Btn_Consultar").addClass('bloqueado').removeClass('ativado');
    }
  });



}); //fim do docReady
