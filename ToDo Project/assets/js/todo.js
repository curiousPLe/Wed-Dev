//Check off specific todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//Click on X remove entire to
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
	event.stopPropagation();
	
})
//Add ToDo Task 
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val(); 
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+todoText+"</li>");
		$(this).val("");
	};
});
//Drag Container
$(function(){
	$(".draggable").draggable();
});
//Toggle Input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
//Resize
//Add another ToDo table 
