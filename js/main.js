
// main JS
$(document).ready(function() {

  $("#btn-inicio").click(function() {
    TweenMax.to(".iniciar", .5, {
      marginTop: "-350px",
      height: "90vh",
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

    setTimeout(function(){
      $('#protocolo').trigger('touchstart');
    },1000);

  }); //esse é o clique no botão de inicio

  $('#protocolo').on('touchstart', function() {
    $(this).focus();
    console.log('protocolo');
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
  });

  $("#protocolo").on('keyup', function() {
    if($(this).val().length == 16) {
      $("#senha").prop('disabled', false).focus();
      $(".grupo-senha").removeClass('bloqueado');
    } else {
      $("#senha").prop('disabled', true);
      $(".grupo-senha").addClass('bloqueado');
    }
  });

  $("#senha").on('keyup', function() {
    if($(this).val().length == 8) {
      $("#btn-fim").removeClass('bloqueado').addClass('ativado').focus();
      $("#senha").blur();
    } else {
      $("#btn-fim").addClass('bloqueado').removeClass('ativado');
    }
  });



}); //fim do docReady
