$(document).on('ready',function(){

	// Send({}, 'http://192.168.5.106/upb/json_lista_siliders.php')

/*Renderizado del menu*/
	initMenu();	
/*Renderizado del Slider*/
	// StartSliders();
/*Renderizacion de Noticias*/
	initNews();
/*Renderizacion de los Posts*/
	// initPosts(1);
/*Renderizacion de los Mapas*/
	init_maps();	
// Renderizacion de los tweets
	loadTwitterTimeline();
});


/*---------------------------------------------------------------------------------------------------
									Rederizacion del MENU SECUNDARIO
---------------------------------------------------------------------------------------------------*/

	/*var template_buttons = $('#publications aside #menu').html().trim();
	var data_buttons = models().menu_buttons;

	var html = Mustache.to_html(template_buttons, data_buttons);
	$('#publications aside #menu').html(html);*/


/*---------------------------------------------------------------------------------------------------
									Rederizacion de los BOTONES SOCIALES
---------------------------------------------------------------------------------------------------*/
/*	var template_zocial = $('#publications #public #redes_sociales').html().trim();
	var data_zocial = models().zocial;

	var html = Mustache.to_html(template_zocial, data_zocial);
	$('#publications #public #redes_sociales').html(html);*/



	



function Send(content,objetive){
	$.ajax({
			url: objetive,
			type: 'POST',
			data: content,
			dataType:'json',
			before: function(){
				console.log('JSON antes ------------------------>>>>.');
				console.log(content);
				console.log('pagina objetivo');
				console.log(objetive);
			},
			success: function(data) {
				console.log('ABAJO LA RESPUESTA');
				// actualizaSlider(data);		
			},
			
			error: function(jqXHR,status,error){
				console.log(jqXHR);
				console.log(status);
				console.log(error);

			}
	});
}

            	


function init_maps() {
	var latlng_lp = new google.maps.LatLng(-16.574288,-68.127079);
	var latlng_cbba = new google.maps.LatLng(-17.398894,-66.218496);

	var settings_lp = {
		zoom: 15,
		center: latlng_lp,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};

	var settings_cbba = {
		zoom: 15,
		center: latlng_cbba,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};

	var map_lp = new google.maps.Map(document.getElementById("sede_lp"), settings_lp);
	var map_cbba = new google.maps.Map(document.getElementById("sede_cocha"), settings_cbba);

	var contentString_lp = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading">UPB Campus La Paz</h1>'+
		'<div id="bodyContent">'+
		'<p>Universidad Privada Boliviana, Compromiso de Exelencia.</br>Camino a Achocalla Km 3,5</p>'+
		'</div>'+
		'</div>';
	var contentString_cbba = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h1 id="firstHeading" class="firstHeading">UPB Campus Cochabamba</h1>'+
		'<div id="bodyContent">'+
		'<p>Universidad Privada Boliviana, Compromiso de Exelencia.</br>Camino a algun lugar</p>'+
		'</div>'+
		'</div>';

	var infowindow_lp = new google.maps.InfoWindow({
		content: contentString_lp
	});

	var infowindow_cbba = new google.maps.InfoWindow({
		content: contentString_cbba
	});
	
	var companyImage_lp = new google.maps.MarkerImage('images/maps/lpz.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var companyImage_cbba = new google.maps.MarkerImage('images/maps/cbba.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var companyShadow = new google.maps.MarkerImage('images/logo_shadow.png',
		new google.maps.Size(130,50),
		new google.maps.Point(0,0),
		new google.maps.Point(65, 50));


	var companyPos_lp = new google.maps.LatLng(-16.574288, -68.127079);
	var companyPos_cbba = new google.maps.LatLng(-17.398894,-66.218496);

	var companyMarker_lp = new google.maps.Marker({
		position: companyPos_lp,
		map: map_lp,
		icon: companyImage_lp,
		shadow: companyShadow,
		title:"Advice",
		zIndex: 3});

	var companyMarker_cbba = new google.maps.Marker({
		position: companyPos_cbba,
		map: map_cbba,
		icon: companyImage_cbba,
		shadow: companyShadow,
		title:"Advice",
		zIndex: 3});
	
	google.maps.event.addListener(companyMarker_lp, 'click', function() {
		infowindow_lp.open(map_lp,companyMarker_lp);
	});
	google.maps.event.addListener(companyMarker_cbba, 'click', function() {
		infowindow_cbba.open(map_cbba,companyMarker_cbba);
	});
}


// FUNCION PARA CARGAR EL TIMELINE DE TWITTER

function loadTwitterTimeline(){
	// Guardamos la referencia de la lista para optimizar el codigo.
	var $coments = $('#coment_slides');
	console.log('Cargaremos los tuits');
    $.ajax({
        // URL del API de busqueda de Twitter
        url: 'http://search.twitter.com/search.json',
        // El request es a un dominio diferente por lo que debe ser un JSONP
        dataType: 'jsonp',
        // Ponemos los parametros como strings y jQuery los transfora de la forma correcta
        data: {
        	page: 1,
            q: 'from:freddier OR @freddier'
        },
        // Hacer algo en caso de error
        error: function() {
            console.log('Conexion Ajax Fallida');
        },
        // Si todo salio bien, en data tenemos la respuesta de Twitter
        success: function(data) {
            // Los tuits estan dentro de data.results
            console.log(data);
            var template = $coments.html().trim();
            $coments.html('');

           	var html="";
            $.each(data.results, function(key, tuit) {
            	var tweet = {
            		fecha : tuit.created_at.substring(0,16),
					autor : '@'+tuit.from_user,
					contenido : tuit.text
            	}
            	var tuit_template = Mustache.to_html(template, tweet);
            	html += tuit_template;

            	if ((key+1)%3==0 && key > 1) {
            		var insert = '<div class="slide" id="slide'+((key+1)/3)+'">'+html+'</div>';
            		$coments.append(insert);
            		html = '';
            	};
            });
            var controls ='<span class="control left">‹</span><span class="control right">›</span>';
            $coments.append(controls);

            var options = {
				auto : true,
				period : 50000,
				duration : 1200,
				effect : 'slide',
				direction : 'left',
				markers : 'off',
				arrows : 'on',
				stop : 'off'
			}
			$('#coments').Carousel(options);
        }


    });
	

    $('#social_coments #siguiente').click(function(){
    	$('span.control.right').click();
    });
	$('#social_coments #anterior').click(function(){
		$('span.control.left').click();
	});

	$('#social_coments #elect #elect-face').click(function(){
		$('#social_coments #elect #elect-twitter').removeClass('large');
		$('#social_coments #elect #elect-twitter').addClass('bg-color-twitter');
		$('#social_coments #elect #elect-face').addClass('large');
	});
	$('#social_coments #elect #elect-twitter').click(function(){
		$('#social_coments #elect #elect-face').removeClass('large');
		$('#social_coments #elect #elect-face').addClass('bg-color-face');
		$('#social_coments #elect #elect-twitter').addClass('large');
	});

}

/*---------------------------------------------------------------------------------------------------
									Rederizacion del MENU
---------------------------------------------------------------------------------------------------*/
function initMenu(){
	var template_menu = $('#menu-template').html().trim();
	var data_menu = models().menu_principal;
	var html = Mustache.to_html(template_menu, data_menu);
	$('#menu-template').html(html);
}
/*---------------------------------------------------------------------------------------------------
									Rederizacion del SLIDER
---------------------------------------------------------------------------------------------------*/
function initSlider(data){
	console.log('Se renderizaa el slider');
	var template_slider = $('#slider-template').html().trim();
	// var data_slider = models().slider;
	var data_slider = data;

	var html = Mustache.to_html(template_slider, data_slider);
	$('#slider-template').html(html);
	//Animacion
	options = {
		auto : true,
		period : 3000,
		duration : 2000,
		effect : 'fade',
		direction : 'left',
		markers : 'on',
		arrows : 'on',
		stop : 'on'
	}
	$('#slider').Carousel(options);
}
/*---------------------------------------------------------------------------------------------------
									Rederizacion de las NOTICIAS
---------------------------------------------------------------------------------------------------*/
function initNews(){
	// Eventos
	var template_eventos = $('#news #eventos').html().trim();
	var data_eventos = models().news.events;

	var html = Mustache.to_html(template_eventos, data_eventos);
	$('#news #eventos').html(html);
	// Ofertas
	var template_ofertas = $('#news #ofertas').html().trim();
	var data_ofertas = models().news.deals;

	var html = Mustache.to_html(template_ofertas, data_ofertas);
	$('#news #ofertas').html(html);
	// Investigacion
	var template_investigacion = $('#news #investigacion').html().trim();
	var data_investigacion = models().news.research;

	var html = Mustache.to_html(template_investigacion, data_investigacion);
	$('#news #investigacion').html(html);
	// Animacion
	var op1 = {
		period: 3000,
        duration: 1000,
		direction: 'down'
	};
	var op2 = {
		period: 4000,
        duration: 1500,
		direction: 'up'
	};
	var op3 = {
		period: 5000,
        duration: 2000,
		direction: 'left'
	};
	$('#news #eventos').tileBlockSlider(op1);
	$('#news #ofertas').tileBlockSlider(op2);
	$('#news #investigacion').tileBlockSlider(op3);
}

/*---------------------------------------------------------------------------------------------------
									Rederizacion de los POSTS
---------------------------------------------------------------------------------------------------*/
function initPosts(page, option){
	var template_posts = $('aside #template_post').html().trim();
	var data_posts = models().posts(page);
	console.log('las publicaciones');
	console.log(data_posts);

	var html = Mustache.to_html(template_posts, models().posts(page));

	console.log('el HTML');
	// console.log(html);
	if (option == 'append') {
		$('#publications').append(html);
	}
	else{
		$('#publications').html('');
		$('#publications').html(html);	
	}
}
/*---------------------------------------------------------------------------------------------------
									Acciones del Scroll Infinito
---------------------------------------------------------------------------------------------------*/
var count = 2; var count_max = 3;
$('#posts #more').click(function(){
	console.log('Contador....'+count);
	if (count >= 1 && count <= count_max) {
		initPosts(count,'append');
		count++;
	}
});

/*---------------------------------------------------------------------------------------------------
									Fin De la RENDERIZACION
---------------------------------------------------------------------------------------------------*/



/*---------------------------------------------------------------------------------------------------
									CONECCIONES A LA BASE DE DATOS
---------------------------------------------------------------------------------------------------*/
function StartSliders(){
	$.ajax({
        // type: 'GET'
        dataType: 'json',
        data: {},
        url: 'cadenas_JSON/json_lista_sliders.php',
        error: function(a,b,c) {
            console.log('Conexion Ajax Fallida');
            console.log(a);
            console.log(b);
            console.log(c);
        },
        success: function(data) {
            initSlider(data);
            console.log(data);
        }
    });
}