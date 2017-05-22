var oxitonas_certas = ["Será", "Pajé", "Ceará", "Tracajá","Amapá",
					   "Sofá", "Vatapá", "Pontapé", "Também", "Ninguém",
					   "Você", "Bongô","Jiló","Urubu","Caqui",
					   "Anzol", "Computador", "Civil", "Funil", "Cristal",
					   "Curió", "Ali", "Condor", "Hangar", "Harém",
					   "Café", "Paiol", "Recém", "Refém", "Sutil",
					   "Maracujá", "Maringá", "Mocotó", "Armazém","Dendê",
					   "Filé", "Sapoti", "Bidê", "Crochê", "Purê"];

var oxitonas_erradas = ["Sera", "Paje", "Ceara", "Tracaja","Amapa",
						"Sofa", "Vatapa", "Pontape", "Tambem", "Ninguem",
						"Voce", "Bongo","Jilo","Urubú","Caquí",
						"Anzól", "Computadôr", "Civíl", "Funíl", "Cristál",
						"Curio", "Alí", "Condôr", "Hangár", "Harem",
						"Cafe","Paiól", "Recem", "Refem", "Sutíl",
						"Maracuja", "Maringa", "Mocoto", "Armazem", "Dende",
						"File", "Sapotí", "Bide", "Croche", "Pure"];
//----------------------------------------------------------------
var paroxitonas_certas = ["Tórax", "Bíceps","Horário","Critério", "Fácil",
						  "Cáries","Lápis","Glúten", "Caráter", "Vírus",
						  "Parada", "Hifens", "Camisa","Ponte", "Garrafa",
						  "Estéril", "Fácil", "Zíper", "Fóssil", "Flúor",
						  "Éden", "Elétron", "Cromossomo", "Caracteres", "Cível",
						  "Ônix", "Pênsil", "Têxtil", "Âmbar", "Erudito",
						  "Filantropo", "Míssil", "Néctar", "Níquel", "Nêutron",
						  "Bônus", "Bênção", "Sintaxe", "Próton", "Mórmon"];

var paroxitonas_erradas = ["Torax", "Biceps","Horario","Criterio", "Facil",
							"Caries", "Lapis", "Gluten", "Carater", "Virus",
							"Paráda", "Hífens", "Camísa","Pônte", "Garráfa",
							"Esteril", "Facil", "Ziper", "Fossil", "Fluor",
							"Eden", "Eletron", "Cromossômo", "Caractéres", "Civel",
							"Onix", "Pensil", "Textil", "Ambar", "Erudíto",
							"Filantrôpo", "Missil", "Nectar", "Niquel", "Neutron",
							"Bonus", "Benção", "Sintáxe", "Proton", "Mormon"];
//----------------------------------------------------------------
var proparoxitonas_certas = ["Ônibus", "Próximo", "Álcool","Máscara","Náufrago",
							 "Cérebro", "Trágico", "Límpido", "Sólido", "Cômodo",
							 "Prólogo","Relâmpago","Lâmpada", "Gástrico","Lógico",
							 "Alcoólatra", "Álibi", "Andrógino", "Cônjuge", "Míope",
							 "Ângulo", "Anêmona", "Húngaro", "Íngreme", "Pântano",
							 "Bígamo", "Leucócito", "Protótipo", "Bávaro", "Ávido",
							 "Estereótipo","Efêmero", "Antídoto","Nômade", "Vértice"];

var proparoxitonas_erradas = ["Onibus", "Proximo", "Alcool","Mascara","Naufrago",
							  "Cerebro", "Tragico", "Limpido", "Solido", "Comodo",
							  "Prologo","Relampago","Lampada", "Gastrico","Logico",
							  "Alcoolatra", "Alibi", "Androgino", "Conjuge", "Miope",
							  "Angulo", "Anemona", "Hungaro", "Ingreme", "Pantano",
							  "Bigamo", "Leucocito", "Prototipo", "Bavaro", "Avido",
							  "Estereotipo", "Efemero", "Antidoto", "Nomade", "Vertice"];	
//----------------------------------------------------------------	
var monossilabos_certos = [];

var monossilabos_errados = [];


var ve;	//Variável do vetor 
var	i;	//Variável certo errado
var j;	//Variável da regra			
				
				
var	terte=0;
var terta=0;
var terto=0;

function fase1(){	


	while(terte==0){document.getElementById("telaexplicacao").style.display="none";

	terte++;
	}
	//função principal do jogo.				
	var elemento = document.getElementById("butto");
		elemento.style.visibility="hidden";	
		document.getElementById("resp").innerHTML ="";
		document.getElementById("resp").style.color ="#009933";
	
 		var elem_butaoc = document.getElementById("but_certo");
		var elem_butaoe = document.getElementById("but_errado");
		elem_butaoc.setAttribute("onclick","verificar(0)");
		elem_butaoe.setAttribute("onclick","verificar(1)");

			document.getElementById("num_fase").innerHTML = "Fase 1";
			document.getElementById("titulo_regra").innerHTML = "Acentuação de Palavras Oxítonas";
 			document.getElementById("regra").innerHTML = "Devem ser acentuadas as palavras Oxítonas terminadas em a(as), e(es), o(os) e em(ens).";
 			document.getElementById("ex1").innerHTML = "Café";
 			document.getElementById("ex2").innerHTML = "Bongô";
 			document.getElementById("ex3").innerHTML = "Sofá";
 			document.getElementById("ex4").innerHTML = "Chaminé";
 			i=Math.floor(Math.random() * 2);

 				if (i===0) {

 					ve=Math.floor(Math.random() * 40);
 					document.getElementById("palavra_sort").innerHTML = oxitonas_certas[ve];

 				} else {

 					ve=Math.floor(Math.random() * 40);
 					document.getElementById("palavra_sort").innerHTML = oxitonas_erradas[ve];
 				}

	}


	function fase2(){

		while(terta==0){document.getElementById("telaexplicacao").style.display="block";

		terta++;
		}
		
		//função principal do jogo.				
	var elemento = document.getElementById("butto");
		elemento.style.visibility="hidden";	
		document.getElementById("resp").innerHTML ="";
		document.getElementById("resp").style.color ="#009933";
	
 		var elem_butaoc = document.getElementById("but_certo");
		var elem_butaoe = document.getElementById("but_errado");
		elem_butaoc.setAttribute("onclick","verificar(0)");
		elem_butaoe.setAttribute("onclick","verificar(1)");
	
			document.getElementById("num_fase").innerHTML = "Fase 2";
 			document.getElementById("titulo_regra").innerHTML = "Acentuação de Palavras Paroxítonas";
		 	document.getElementById("regra").innerHTML = "As palavras Paroxítonas devem ser acentuadas se terminarem em i(is), us, r, l, x, n, um(uns), ão(ãos), ã(ãs), ps, on(ons).";
			document.getElementById("ex1").innerHTML = "Lápis";
 			document.getElementById("ex2").innerHTML = "Zíper";
 			document.getElementById("ex3").innerHTML = "Bíceps";
 			document.getElementById("ex4").innerHTML = "Caráter";
 			i=Math.floor(Math.random() * 2);

 				if (i===0) {

 					ve=Math.floor(Math.random() * 40);
 					document.getElementById("palavra_sort").innerHTML = paroxitonas_certas[ve];

 				} else {

 					ve=Math.floor(Math.random() * 40);
 					document.getElementById("palavra_sort").innerHTML = paroxitonas_erradas[ve];
 				}

 			}

 		function fase3(){	
		 	 
		 	 while(terto==0){document.getElementById("telaexplicacao").style.display="block";

		terto++;
		}
			
 			//função principal do jogo.				
	var elemento = document.getElementById("butto");
		elemento.style.visibility="hidden";	
		document.getElementById("resp").innerHTML ="";
		document.getElementById("resp").style.color ="#009933";
	
 		var elem_butaoc = document.getElementById("but_certo");
		var elem_butaoe = document.getElementById("but_errado");
		elem_butaoc.setAttribute("onclick","verificar(0)");
		elem_butaoe.setAttribute("onclick","verificar(1)");

			document.getElementById("num_fase").innerHTML = "Fase 3";
 			document.getElementById("titulo_regra").innerHTML = "Acentuação de Palavras Proparoxítonas";
 			document.getElementById("regra").innerHTML = "Todas as palavras Proparoxítonas devem ser acentuadas.";
 			document.getElementById("ex1").innerHTML = "Ônibus";
 			document.getElementById("ex2").innerHTML = "Íngreme";
 			document.getElementById("ex3").innerHTML = "Míope";
 			document.getElementById("ex4").innerHTML = "Máscara";
 			i=Math.floor(Math.random() * 2);

 				if (i===0) {

 					ve=Math.floor(Math.random() * 35);
 					document.getElementById("palavra_sort").innerHTML = proparoxitonas_certas[ve];

 				} else {

 					ve=Math.floor(Math.random() * 35);
 					document.getElementById("palavra_sort").innerHTML = proparoxitonas_erradas[ve];
 				}
 		}

 	
var o=0; 
var tes=0;
  function verificar(n){
		
	 //função de verificação certo/errado 
	if((n===0 && i===0) ||( n===1 && i===1) ){
		 
		document.getElementById("resp").innerHTML ="Resposta Correta";

		var elemento = document.getElementById("butto");
			elemento.style.background="#009933;";
			elemento.style.visibility="visible";

			
			if(tes<4){
				 elemento.setAttribute("onclick","fase1()");
				
				 if (o==0) {
				 	var nbola = document.getElementById("b1");
				 	nbola.setAttribute("src","bolav.png");
				 	o++;
				 	}

				 	else if(o==1){
				 	var nbola = document.getElementById("b2");
				 	nbola.setAttribute("src","bolav.png");
				 	o++;
				 	}

				 	else if(o==2){
				 	var nbola = document.getElementById("b3");
				 	nbola.setAttribute("src","bolav.png");
				 	o++;
					}

				 	else if(o==3){
				 	var nbola = document.getElementById("b4");
				 	nbola.setAttribute("src","bolav.png");
				 	o++;
					}

				 	else if(o==4){
				 	var nbola = document.getElementById("b5");
				 		nbola.setAttribute("src","bolav.png");
				 	o++;}

				 tes++;


			} else if(tes<9){
			
				 elemento.setAttribute("onclick","fase2()");

				 	var nbola = document.getElementById("b1");
				 	nbola.setAttribute("src","bola.png");
				 	var nbola = document.getElementById("b2");
				 	nbola.setAttribute("src","bola.png");
				 	var nbola = document.getElementById("b3");
				 	nbola.setAttribute("src","bola.png");
				 	var nbola = document.getElementById("b4");
				 	nbola.setAttribute("src","bola.png");
				 	var nbola = document.getElementById("b5");
				 	nbola.setAttribute("src","bola.png");

				 if (o==5) {
				 	var nbola = document.getElementById("b1");
				 	nbola.setAttribute("src","bolav.png");
				 	o++;
				 	}

				 	else if(o==6){
				 	var nbola = document.getElementById("b2");
				 	nbola.setAttribute("src","bolav.png");
				 	o++;
				 	}

				 	else if(o==7){
				 	var nbola = document.getElementById("b3");
				 	nbola.setAttribute("src","bolav.png");
				 	o++;
					}

				 	else if(o==8){
				 	var nbola = document.getElementById("b4");
				 	nbola.setAttribute("src","bolav.png");
				 	o++;
					}

				 	else if(o==9){
				 	var nbola = document.getElementById("b5");
				 		nbola.setAttribute("src","bolav.png");
				 	o++;}

				 tes++;

				 

			} else if(tes<14){

			
				 elemento.setAttribute("onclick","fase3()");
				 tes++;

			}
    
			
}

	else if((n===0 && i===1)||(n===1 && i===0)){

		document.getElementById("resp").innerHTML ="Resposta Errada";
		document.getElementById("resp").style.color ="red";
		var elem_butaoc = document.getElementById("but_certo");
		var elem_butaoe = document.getElementById("but_errado");
			elem_butaoc.setAttribute("onclick",null);
			elem_butaoe.setAttribute("onclick",null);
			/*elem_butao.style.cursor="";*/

			var elemento = document.getElementById("butto");
			elemento.style.visibility="visible";
			elemento.setAttribute("onclick","fase1()");


			if(tes<4){
				 elemento.setAttribute("onclick","fase1()");
				
				 if (o==0) {
				 	var nbola = document.getElementById("b1");
				 	nbola.setAttribute("src","bolar.png");
				 	o++;}

				 	else if(o==1){
				 	var nbola = document.getElementById("b2");
				 	nbola.setAttribute("src","bolar.png");
				 	o++;}

				 	else if(o==2){
				 	var nbola = document.getElementById("b3");
				 	nbola.setAttribute("src","bolar.png");
				 	o++;}

				 	else if(o==3){
				 	var nbola = document.getElementById("b4");
				 	nbola.setAttribute("src","bolar.png");
				 	o++;}

				 	else if(o==4){
				 	var nbola = document.getElementById("b5");
				 		nbola.setAttribute("src","bolar.png");
				 	o++;

				 }

				 tes++;

			} else if(tes<9){

			
				 elemento.setAttribute("onclick","fase2()");
				 tes++;

			} else if(tes<14){

			
				 elemento.setAttribute("onclick","fase3()");
				 tes++;

			}

 	}
 }

 function avanc(){

 	document.getElementById("telainicio").style.display="none";
 	document.getElementById("telaidentificacao").style.display="block";

 }


 function avanc2(){

 	document.getElementById("telaidentificacao").style.display="none";
 	document.getElementById("telafases").style.display="block";

 }

function volt2(){

	document.getElementById("telaidentificacao").style.display="none";
 	document.getElementById("telainicio").style.display="block";

}


 function avanc3(){

 	document.getElementById("telafases").style.display="none";
 	document.getElementById("telaintro").style.display="block";

 }

 function volt3(){

	document.getElementById("telafases").style.display="none";
 	document.getElementById("telaidentificacao").style.display="block";

}

 function avanc4(){

 	document.getElementById("telaintro").style.display="none";
 	document.getElementById("telajogo").style.display="block";

 }

 function volt4(){

	document.getElementById("telaintro").style.display="none";
 	document.getElementById("telafases").style.display="block";

}

 function abrirajuda(){

 	document.getElementById("telajogo").style.display="none";
 	document.getElementById("telaexplicacao").style.display="block";

 }

 function fecharajuda(){

 	document.getElementById("telaexplicacao").style.display="none";
 	document.getElementById("telajogo").style.display="block";


 }

