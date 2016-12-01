$(function(){
	//头部-购物车
	
	$('#bar_software, #bar_car, .tool_mall, .tool_shop, .good_item').hover(function(){
		$(this).find('.drop_layer').show();
	},function(){
		$(this).find('.drop_layer').hide();
	});
	
	
	
	//banner大图
	$(".banner").slide({ titCell:".num ul" , mainCell:".bannerlist" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	$(".banner").slide({ titCell:".num ul" , mainCell:".bannerlist" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	$(".app").slide({ titCell:".num ul" , mainCell:".applist" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
	
	
	//返回顶部
	$(".btn_top").hide();
	$(".btn_top").live("click",function(){
		$('html, body').animate({scrollTop: 0},200);return false;
	})
	$(window).bind('scroll resize',function(){
		if($(window).scrollTop()<=200){
			$(".btn_top").hide();
		}else{
			$(".btn_top").show();
		}
	});
	
	//意见反馈--遮罩层
	//$("#adclick").click(function (){
//		$(".drop_layer").hide();
//		$(".advice_b").show().css("opacity", "1");
//		$("body").css("opacity", ".4"); //设置透明度
//		
//
//	});
//	

		$('#ClickMe').click(function() {
			//$('#code').center();
			//$('.advice_b').fadeIn();
			$('.advice_b').show();
			$('#goodcover').css("height",$(document).height());   
			$('#goodcover').css("width",$(document).width());     
			$('#goodcover').show();
		});
		$('#closebt').click(function() {
			$('.advice_b').hide();
			$('#goodcover').hide();//hide隐藏的效果是从下至上或从右下到左上的慢慢折叠缩小，而fadeOut的淡出效果是整体淡化直至消失。
		});
		jQuery.fn.center = function(loaded) {
			var obj = this;
			body_width = parseInt($(window).width());
			body_height = parseInt($(window).height());
			block_width = parseInt(obj.width());
			block_height = parseInt(obj.height());
	
			left_position = parseInt((body_width / 2) - (block_width / 2) + $(window).scrollLeft());
			if (body_width < block_width) {
				left_position = 0 + $(window).scrollLeft();
			};
	
			top_position = parseInt((body_height / 2) - (block_height / 2) + $(window).scrollTop());
			if (body_height < block_height) {
				top_position = 0 + $(window).scrollTop();
			};
	
			if (!loaded) {
	
				obj.css({
					'position': 'absolute'
				});
				obj.css({
					'top': ($(window).height() - $('#code').height()) * 0.5,
					'left': left_position
				});
				$(window).bind('resize', function() {
					obj.center(!loaded);
				});
				$(window).bind('scroll', function() {
					obj.center(!loaded);
				});
	
			} else {
				obj.stop();
				obj.css({
					'position': 'absolute'
				});
				obj.animate({
					'top': top_position
				}, 200, 'linear');
			}
		}
	
			
});	