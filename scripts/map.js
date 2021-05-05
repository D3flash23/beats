let myMap;

const init = () => {
	myMap = new ymaps.Map("map",{
		center: [45.065833, 39.083608],
		zoom:11,
		controls:[]
	})

	const coords = [
		[45.062969,39.025605],
		[45.049283,38.950638],
		[45.011504,38.993819],
		[45.027847,39.042333]
	];
	const myCollection = new ymaps.GeoObjectCollection({},{
	draggable:false,
	iconLayout: 'default#image',
	iconImageHref:"/img/icon/marker.svg",
	iconImageSize: [30, 42],
   iconImageOffset: [-3, -42]
 	});

	 coords.forEach(coord => {
		 myCollection.add(new ymaps.Placemark(coord));
	 });

	 myMap.geoObjects.add(myCollection);

	 myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
