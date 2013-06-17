// Menus de navegacion

/*---------------------------------------------------------
					Menu PRINCIPAL
---------------------------------------------------------*/
function models(){
var mp={
	menu:[
		{	
			title : 'Informacion',
			link : '#',
			icon : 'icon-lines',
			submenu : [
				{
					subTitle : 'Pregrado Cochabamba',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Estudiar en la UPB',
							tryLink : ''
						},
						{
							tryTitle : 'Campus',
							tryLink : ''
						},
						{
							tryTitle : 'Oferta Pregrado',
							tryLink : ''
						},
						{
							tryTitle : 'Admisiones',
							tryLink : ''
						},
						{
							tryTitle : 'Servicios Tecnológicos',
							tryLink : ''
						},
						{
							tryTitle : 'UPB Virtual',
							tryLink : ''
						},
						{
							tryTitle : 'SeUPB',
							tryLink : ''
						},
						{
							tryTitle : 'Bolsa de Trabajo',
							tryLink : ''
						}
					]
				},
				{
					subTitle : 'Pregrado La Paz',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Estudiar en la UPB',
							tryLink : ''
						},
						{
							tryTitle : 'Campus',
							tryLink : ''
						},
						{
							tryTitle : 'Oferta Pregrado',
							tryLink : ''
						},
						{
							tryTitle : 'Admisiones',
							tryLink : ''
						},
						{
							tryTitle : 'Servicios Tecnológicos',
							tryLink : ''
						},
						{
							tryTitle : 'UPB Virtual',
							tryLink : ''
						},
						{
							tryTitle : 'SeUPB',
							tryLink : ''
						},
						{
							tryTitle : 'Bolsa de Trabajo',
							tryLink : ''
						}
					]
				},
				{
					subTitle : 'Postgrado',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Oferta',
							tryLink : ''
						},
						{
							tryTitle : 'Servicios Tecnológicos',
							tryLink : ''
						},
						{
							tryTitle : 'UPB Virtual',
							tryLink : ''
						},
						{
							tryTitle : 'Centros de Postgrado',
							tryLink : ''
						}
					]
				}
			]
		},
		{	
			title : 'Docentes',
			link : '#',
			icon : 'icon-user-3',
			submenu : [
				{
					subTitle : 'Calendario Académico',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Pregrado',
							tryLink : ''
						},
						{
							tryTitle : 'Postgrado',
							tryLink : ''
						},
						{
							tryTitle : 'Programas',
							tryLink : ''
						}

					]
				},
				{
					subTitle : 'Investigación',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Centro de Investigación',
							tryLink : ''
						},
						{
							tryTitle : 'Revista',
							tryLink : ''
						},
						{
							tryTitle : 'Publicaciones',
							tryLink : ''
						}
					]
				},
				{
					subTitle : 'Servicios Tecnológicos',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Biblioteca UPB',
							tryLink : ''
						},
						{
							tryTitle : 'Sistema de Información',
							tryLink : ''
						},
						{
							tryTitle : 'Tutoria Virtual',
							tryLink : ''
						},
						{
							tryTitle : 'Administración Universitaria',
							tryLink : ''
						}
					]
				}
			]
		},
		{	
			title : 'Estudiantes',
			link : '',
			icon : 'icon-user-2',
			submenu : [
				{
					subTitle : 'Servicios Tecnológicos',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Calendario Académico',
							tryLink : ''
						},
						{
							tryTitle : 'Tutoria Virtual',
							tryLink : ''
						},
						{
							tryTitle : 'Sistemas de Información',
							tryLink : ''
						},
						{
							tryTitle : 'Biblioteca UPB',
							tryLink : ''
						}
					]
				},
				{
					subTitle : 'Servicios La Paz',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Rutas del Bus',
							tryLink : ''
						},
						{
							tryTitle : 'Aulas',
							tryLink : ''
						},
						{
							tryTitle : 'Guia de asignación de materias',
							tryLink : ''
						}
					]	
				},
				{
					subTitle : 'Curriculum',
					subLink : '#'
				}
			]
		},
		{	
			title : 'Graduados',
			link : '',
			icon : 'icon-briefcase',
			submenu : [
				{
					subTitle : 'Graduados',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Asociación de Graduados',
							tryLink : ''
						},
						{
							tryTitle : 'Bolsa de Trabajo',
							tryLink : ''
						}
					]
				},
				{
					subTitle : 'Oferta Académica',
					subLink : '#'
				},
				{
					subTitle : 'Investigación',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Decanato',
							tryLink : ''
						},
						{
							tryTitle : 'Centros de Investigación',
							tryLink : ''
						},
						{
							tryTitle : 'Revista',
							tryLink : ''
						},
						{
							tryTitle : 'Publicaciones',
							tryLink : ''
						}
					]
				},
				{
					subTitle : 'Servicios Tecnológicos',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Recupera tu acceso',
							tryLink : ''
						},
						{
							tryTitle : 'Actualización de Información',
							tryLink : ''
						},
						{
							tryTitle : 'Biblioteca UPB',
							tryLink : ''
						}
					]
				}
			]
		},
		{	
			title : 'Padres de Familia',
			link : '',
			icon : ' icon-eye-2',
			submenu : [
				{
					subTitle : 'Vida Estudiantil Cochabamba',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Guia Estudiantil',
							tryLink : ''
						},
						{
							tryTitle : 'Intercambio',
							tryLink : ''
						},
						{
							tryTitle : 'Cultura y Deportes',
							tryLink : ''
						},
						{
							tryTitle : 'Orientación y Consejería',
							tryLink : ''
						},
							{
							tryTitle : 'Bolsa de Trabajo',
							tryLink : ''
						},
						{
							tryTitle : 'Proceso de graduación',
							tryLink : ''
						}
					]
				},
				{
					subTitle : 'Vida Estudiantil La Paz',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Guia Estudiantil',
							tryLink : ''
						},
						{
							tryTitle : 'Intercambio',
							tryLink : ''
						},
						{
							tryTitle : 'Cultura y Deportes',
							tryLink : ''
						},
						{
							tryTitle : 'Orientación y Consejería',
							tryLink : ''
						},
							{
							tryTitle : 'Bolsa de Trabajo',
							tryLink : ''
						},
						{
							tryTitle : 'Proceso de graduación',
							tryLink : ''
						}
					]
				},
				{
					subTitle : 'Información Académica',
					subLink : '#',
					tryMenu : [
						{
							tryTitle : 'Calificación',
							tryLink : ''
						},
						{
							tryTitle : 'Horarios',
							tryLink : ''
						},
						{
							tryTitle : 'Calendario Académico',
							tryLink : ''
						},
						{
							tryTitle : 'Contactos',
							tryLink : ''
						}
					]
				}
			]
		},
		{	
			title : 'Sistema',
			link : '#',
			icon : 'icon-laptop',
			submenu : [
				{
					subTitle : 'UPB Virtual',
					subLink : '#'
				},
				{
					subTitle : 'Intranet',
					subLink : '#'
				},
				{
					subTitle : 'Webmail',
					subLink : '#'
				}
			]
		}
		]
	}


	var path_sliders='images/';
	var sl={
	slides:[
		{	
			id : '1',
			title : 'Slider 1',
			description : 'Lorem ipsum do',
			image : path_sliders+'s1.jpg',
			link : '#'
		},
		{
			id : '2',
			title : 'Slider 2',
			description : 'Lorem ipsum do',
			image : path_sliders+'s2.jpg',
			link : '#'
		},
		{
			id : '3',
			title : 'Slider 3',
			description : 'Lorem ipsum do',
			image : path_sliders+'s3.jpg',
			link : '#'
		}
	]
	}



	var path_news='images/icons/';
	var nw={
		events : {
			items: [
			{
				id : '1',
				icon : path_news+'e1.png',
				link : '#',
				title : 'GreenPYME',
				description : 'Lanzamiento del programa ecológico... '
			},
			{
				id : '2',
				icon : path_news+'e2.png',
				link : '#',
				title : 'Colación de Grado',
				description : 'IXV Colación de Grado en Cochabamba'
			},
			{
				id : '3',
				icon : path_news+'e3.png',
				link : '#',
				title : 'Revista',
				description : 'Lanzamiento de la revista OH Rector.'
			}
			]
		}
		,
		deals :{
			items: [
			{
				id : '1',
				icon : path_news+'o1.png',
				link : '#',
				title : 'Inicio de Gestión',
				description : 'Acto de Inaguracion del año académmico'
			},
			{
				id : '2',
				icon : path_news+'o2.png',
				link : '#',
				title : 'Becas',
				description : 'Becas MBA Full Time, versión X.'
			},
			{
				id : '3',
				icon : path_news+'o3.png',
				link : '#',
				title : 'Galeria de Fotos',
				description : 'Recuerdos del 2012 en Fotografías'
			}
			]
		}
		,
		research :{
			items: [
			{
				id : '1',
				icon : path_news+'i1.png',
				link : '#',
				title : 'Revista',
				description : 'Lanzamiento de la #12 Revista de Inv. y Tecnología'
			},
			{
				id : '2',
				icon : path_news+'i2.png',
				link : '#',
				title : 'Taller',
				description : 'Expertos en Mercado seguro dan taller'
			},
			{
				id : '3',
				icon : path_news+'i3.png',
				link : '#',
				title : 'Reportaje',
				description : 'Coyuntura Económica en Bolivia'
			}
		]
		}
	}
	
	var path_icons='images/icons/';
	var ml ={
		buttons:[
			{
				caption : 'Nosotros',
				color : 'greenDark',
				image : path_icons+'finder.png'
			},
			{
				caption : 'Pregrado Cochabamba',
				color : 'orangeDark',
				image : path_icons+'map.gps.png'
			},
			{
				caption : 'Pregrado La Paz',
				color : 'red',
				image : path_icons+'map.gps.png'
			},
			{
				caption : 'Postgrado',
				color : 'blueDark',
				image : path_icons+'user.tie.png'
			},
			{
				caption : 'Investigación',
				color : 'pinkDark',
				image : path_icons+'crop.png'
			},
			{
				caption : 'Consultoría y Capacitación',
				color : 'blue',
				image : path_icons+'column.two.png'
			},
			{
				caption : 'Extensión Universitaria',
				color : 'greenLight',
				image : path_icons+'group.png'
			}
		]
	};
	var path_posts = 'images/posts/';
	var pt = {
		pages : [
			{
				page : 1,
				posts : [
					{
						category : 'Informática',
						title : 'Congreso sobre Estandares Web',
						image : path_posts+'p1.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 13, 2013',
						linkAutor : '#',
						nameAutor : 'jvacx rend'
					},
					{
						category : 'Bio Tecnología',
						title : 'Medicina Matemática',
						image : path_posts+'p2.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 12, 2013',
						linkAutor : '#',
						nameAutor : 'Victor Aguilar'
					},
					{
						category : 'Ingeniería Civil',
						title : 'Nuevas Normas Internacionales',
						image : path_posts+'p3.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 7, 2013',
						linkAutor : '#',
						nameAutor : 'Monica Canaza'
					},
					{
						category : 'Sociología',
						title : 'Coyuntura Boliviana',
						image : path_posts+'p4.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 1, 2013',
						linkAutor : '#',
						nameAutor : 'Hernan Rengel'
					},
					{
						category : 'Informática',
						title : 'Tratados de IS',
						image : path_posts+'p5.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Enero 15, 2013',
						linkAutor : '#',
						nameAutor : 'Denisse Montes'
					},
					{
						category : 'Economía',
						title : 'Inflación y nuevos gastos',
						image : path_posts+'p6.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Enero 7, 2013',
						linkAutor : '#',
						nameAutor : 'Aurelio Carvajal'
					},
				]
			},
			{
				page : 2,
				posts : [
					{
						category : 'Telemática',
						title : 'Congreso sobre Estandares Web',
						image : path_posts+'p1.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 13, 2013',
						linkAutor : '#',
						nameAutor : 'jvacx rend'
					},
					{
						category : 'Bio Telemática',
						title : 'Medicina Matemática',
						image : path_posts+'p2.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 12, 2013',
						linkAutor : '#',
						nameAutor : 'Victor Aguilar'
					},
					{
						category : 'Ingeniería Telemática',
						title : 'Nuevas Normas Internacionales',
						image : path_posts+'p3.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 7, 2013',
						linkAutor : '#',
						nameAutor : 'Monica Canaza'
					},
					{
						category : 'Telemática',
						title : 'Coyuntura Boliviana',
						image : path_posts+'p4.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 1, 2013',
						linkAutor : '#',
						nameAutor : 'Hernan Rengel'
					},
					{
						category : 'Telemática',
						title : 'Tratados de IS',
						image : path_posts+'p5.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Enero 15, 2013',
						linkAutor : '#',
						nameAutor : 'Denisse Montes'
					},
					{
						category : 'Telemática',
						title : 'Inflación y nuevos gastos',
						image : path_posts+'p6.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Enero 7, 2013',
						linkAutor : '#',
						nameAutor : 'Aurelio Carvajal'
					},
				]
			},
			{
				page : 3,
				posts : [
					{
						category : 'Conferencia',
						title : 'Congreso sobre Estandares Web',
						image : path_posts+'p1.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 13, 2013',
						linkAutor : '#',
						nameAutor : 'jvacx rend'
					},
					{
						category : 'Bio Conferencia',
						title : 'Medicina Conferencia',
						image : path_posts+'p2.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 12, 2013',
						linkAutor : '#',
						nameAutor : 'Victor Aguilar'
					},
					{
						category : 'Ingeniería Conferencia',
						title : 'Nuevas Normas Internacionales',
						image : path_posts+'p3.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 7, 2013',
						linkAutor : '#',
						nameAutor : 'Monica Canaza'
					},
					{
						category : 'Conferencia',
						title : 'Coyuntura Boliviana',
						image : path_posts+'p4.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Febrero 1, 2013',
						linkAutor : '#',
						nameAutor : 'Hernan Rengel'
					},
					{
						category : 'Conferencia',
						title : 'Tratados de IS',
						image : path_posts+'p5.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Enero 15, 2013',
						linkAutor : '#',
						nameAutor : 'Denisse Montes'
					},
					{
						category : 'Conferencia',
						title : 'Inflación y nuevos gastos',
						image : path_posts+'p6.jpg',
						description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
						date : 'Enero 7, 2013',
						linkAutor : '#',
						nameAutor : 'Aurelio Carvajal'
					},
				]
			}
		]
	};

	var path_zocial = "images/redes/";
	var rs = {
		zocial : [
		{
			title : 'Facebook',
			link : '#',
			icon : path_zocial+'face.png',
			rate : '10%'
		},
		{
			title : 'Google+',
			link : '#',
			icon : path_zocial+'gplus',
			rate : '60%'
		},
		{
			title : 'Twitter',
			link : '#',
			icon : path_zocial+'twitter',
			rate : '70%'
		},
		{
			title : 'Youtube',
			link : '#',
			icon : path_zocial+'youtube',
			rate : '55%'
		},
		{
			title : 'Gmail',
			link : '#',
			icon : path_zocial+'gmail',
			rate : '50%'
		}
		]
	}
	var current_page;
	function conect(content,objetive,tipo,option){
		console.log(content); 
		console.log("content ["+content+"], objetive ["+objetive+"], tipo ["+tipo+"], option ["+option+"]"); 
		$.ajax({
				url: objetive,
				type: 'POST',
				data: content,
				dataType:'json',
				success: function(data) {
					return data;				
				},
				
				error: function(jqXHR,status,error){
					console.log(jqXHR);
					console.log(status);
					console.log(error);

				}
		});
	}



	
	return {
		menu_principal: mp,
		slider : sl,
		news : nw,
		menu_buttons : ml,
		posts : function (nro_page){
					$.each(pt.pages, function(key, page){
						if(nro_page==page.page){
							current_page=page;
						}
				});
		return current_page;
	},
		zocial : rs
	}
}
		

