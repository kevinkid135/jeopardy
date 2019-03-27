$(".itemOption").hover(
    function(){$(this).stop().animate({"opacity": "0.5"}, "fast");},
    function(){$(this).stop().animate({"opacity": "1"}, "fast");}
);

$(".points").click(function(){
    $(this).fadeOut(300, () => {this.remove();})
});
$(".question").click(function(){
    $(this).fadeOut(300, () => {this.remove();})
});
$(".answer").click(function(){
    $(this).fadeOut(300, () => {this.remove();})
});
// $(".divText").click(function(){
//     $(this).fadeOut(300, () => {this.remove();})
// });
