$("td").hover(
    function(){$(this).stop().animate({"opacity": "0.5"}, "fast");},
    function(){$(this).stop().animate({"opacity": "1"}, "fast");}
);
$("td").click(function(){
    $(this).empty();
});