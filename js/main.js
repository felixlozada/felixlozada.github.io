// Menu responsive

let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu nav');

let cerrado = true;

menuIcon.addEventListener('click', ()=>{
	if (cerrado) {
		cerrado = false;

		menu.style.height = '80vh';
		menu.style.opacity = '1';
	}else{
		cerrado = true;

		menu.style.height = '0vw';
		menu.style.opacity = '0';
	}	
});

// Slider Modal

// Variables Modal
// let modal = document.querySelector('.modal');
// let modalImg = document.querySelector('.modal-img');
// let close = document.querySelector('.close');

// // Variables de imagenes
// let trabajos = document.querySelectorAll('.contenedor-trabajo');

// // Variables del slider
// let btnLeft = document.querySelector('.btn-left');
// let btnRight = document.querySelector('.btn-right');

// // Recorrer todos los trabajos para agragar la funcion a cada uno
// trabajos.forEach((trabajo)=>{
// 	trabajo.addEventListener('click', ()=>{

// 		// Crear variable de los hijos
// 		var images = trabajo.children;

// 		/* 
// 			Recorremos la variable images para crear las imagenes y
// 			agregarlas al modal
// 			*/
// 			for(i=0; i < images.length; i++){
// 				let image = document.createElement('img');

// 				image.src = images[i].src;

// 				modalImg.appendChild(image);
// 			}

// 		// Mostramos el modal
// 		modal.style.display = "flex";

// 		setTimeout(()=>{
// 			modal.style.opacity = "1";
// 		}, 400);

// 		// Comprobamos si hay mas de una imagen en el trabajo
// 		if (images.length > 1) {

// 			btnRight.style.display = "block";

// 			btnLeft.style.display = "block";

// 			// Variables del slider
// 			let imagesModal = modalImg.children;
// 			let tamañoImage = imagesModal[0].clientWidth;
// 			let contador = 0;

// 			// Actualizar tamaño
// 			window.addEventListener('resize', () => {
// 				tamañoWidth = slide[0].clientWidth;
// 			});

// 			btnLeft.addEventListener('click', ()=>{
// 				if(contador <= 0){
// 					contador = imagesModal.length - 1;

// 					modalImg.style.transform = 'translate(' + (- tamañoImage * contador) + 'px)';
// 				}else{
// 					contador--;

// 					modalImg.style.transform = 'translate(' + (- tamañoImage * contador) + 'px)';
// 				}

// 				console.log(contador);
// 			});

// 			btnRight.addEventListener('click', ()=>{
// 				if(contador == imagesModal.length - 1){
// 					contador = 0;

// 					modalImg.style.transform = 'translate(0px)';
// 				}else{
// 					contador++;
// 				}

// 				modalImg.style.transform = 'translate(' + (- tamañoImage * contador) + 'px)';

// 				console.log(contador);
// 			});

// 		}else{

// 		// Si no hay mas de una imagen se esconden los botones del slider
// 		btnRight.style.display = "none";

// 		btnLeft.style.display = "none";
// 	}

// });
// });

// // Cerrar modal
// close.addEventListener('click', ()=>{
// 	modal.style.opacity = "0";
// 	modalImg.style.transform = 'translate(0px)';
// 	contador = 0;

// 	setTimeout(()=>{
// 		modal.style.display = "none";

// 		let images = document.querySelectorAll('.modal-img img');

// 		for(i=0; i < images.length; i++){
// 			images[i].remove();
// 		}

// 	}, 500);
// });