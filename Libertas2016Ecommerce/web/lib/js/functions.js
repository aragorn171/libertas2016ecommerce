jQuery.noConflict();

jQuery(window).load(function () {

    var v_header = '<div class="header-top padding-top-bottom">';
    v_header += '<div class="row">';
    v_header += '<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">';
    v_header += '<p>Seja Bem Vindo ao e-drinks Bebidas <b>Já é cadastrado?</b></p>';
    v_header += '</div>';
    v_header += '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">';
    v_header += '<span class="pull-right"><i class="fa fa-phone" aria-hidden="true"></i> (35) 99999-9999</span>';
    v_header += '</div>';
    v_header += '<div class="col-xs-2 col-sm-4 col-md-4 col-lg-4">';
    v_header += '<form class="form-header">';
    v_header += '<div class="form-group">';
    v_header += '<div class="input-group">';
    v_header += '<input type="text" class="form-control">';
    v_header += '<span class="input-group-btn">';
    v_header += '<button class="btn btn-default" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>';
    v_header += '</span>';
    v_header += '</div>';
    v_header += '</div>';
    v_header += '</form>';
    v_header += '</div>';
    v_header += '</div>';
    v_header += '</div>';
    v_header += '<div class="header-center margin-bottom">';
    v_header += '<div class="row">';
    v_header += '<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 logo">';
    v_header += '<img src="imagens/logo.png" alt=""/>';
    v_header += '</div>';
    v_header += '<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 menu">';
    v_header += '<ul>';
    v_header += '<li><a>VINHOS</a></li>';
    v_header += '<li><a>CEVAS</a></li>';
    v_header += '<li><a>CHAMPAGNES</a></li>';
    v_header += '<li><a>DESTILADOS</a></li>';
    v_header += '<li><a>ENERGÉTICOS</a></li>';
    v_header += '<li><a>RUM</a></li>';
    v_header += '<li><a>LICOR</a></li>';
    v_header += '<li><a>SAQUÊ</a></li>';
    v_header += '</ul>';
    v_header += '</div>';
    v_header += '</div>';
    v_header += '</div>';

    jQuery("#header").html(v_header);
});


