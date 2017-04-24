'use strict';

var viewer = null;

var img_arr = {};

var sprite_size = {
	x : 440,
	y : 334,
};

for(var i = 0; i < 10; i++) {
	
	img_arr[i] = {};
	
	for(var j = 0; j < 10; j++) {
		
		img_arr[i][j] = {};
		
	}
}

var getSprite = function(index) {
	
	index = parseInt(index) % 100;
	
	var _pos = (index / 10).toFixed(1);
	
	return _pos;
	
};

var loadSpritePos = function(index) {
	
	var _pos = getSprite(index);
	
	var _i = Math.floor(_pos);
	var _j = parseInt((_pos - _i) * 10);
	
	return {
		x : -(_j * sprite_size.x),
		y : -(_i * sprite_size.y),
	};//'background-position'
	
};

var loadSprite = function(dir) {
	
	dir = parseInt(dir || 1);
	
	var index = parseInt(viewer.attr('data-sprite') || -1);
	
	var _next = index + dir;
	
	if(_next > 100) {
		_next = 0;
	} else if(_next < 0) {
		_next = 100;
	}
	
	var _pos = loadSpritePos(_next);
	
	viewer
		.css({
			'background-position' : _pos.x + 'px ' + _pos.y + 'px',
		})
		.attr('data-sprite', _next)
	;
	
};

$(function(){
	
	viewer = $('#product-roller .viewer').eq(0);
	
	loadSprite(1);
	
	/*
	viewer.on('click', function(event){
		event.preventDefault();
		
		loadSprite(1);
		
	});
	*/
	
	var speed = 0;
	
	var intr = null;
	
	viewer.swipe({
		//Generic swipe handler for all directions
		
		//threshold : 200,
		//maxTimeThreshold : 5000,
		
		/*
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			console.log(arguments);
			//[MouseEvent, "left", 227, 856, 0, Object, "left"]
			
			if(direction == 'left') {
				
				loadSprite(1);
				
			} else if(direction == 'right') {
				
				loadSprite(-1);
				
			}
			
		},
		*/
		
		swipeStatus:function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection) {
			
			//console.log(arguments);
			
			clearInterval(intr);
			
			speed++;
			
			if((speed % 2) == 1) {
				
				if(currentDirection == 'left') {
					
					loadSprite(1);
					
				} else if(currentDirection == 'right') {
					
					loadSprite(-1);
					
				}
				
			}
			
		}
		
	});
	
	
	intr = setInterval(function(){
		
		loadSprite(1);
		
	}, 90);
	
	
	//console.log(getSprite(63));
	
});