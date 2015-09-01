/*小鸟飞到左边*/
$(function(){

	var bird = {
		elem: $("#bird2"),
		fly: function(){
			var me = this;
			var width = $('.boxShow').width();
			me.elem.addClass('birdFly').transition({
				right: width
			}, 15000, 'linear', function(){
				me.elem.css({'right':0});
				me.fly();
			});
		}
	};

	bird.fly();


});
