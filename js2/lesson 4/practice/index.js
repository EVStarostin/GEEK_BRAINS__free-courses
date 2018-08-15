/* $('#myid').html("Lorem ipsum");
$("#myid").css("backgroundColor", "red");
$(".myclass").css("backgroundColor", "red");
$("#myid, p.myclass").addClass("newClass"); */

/* $(document).ready(function(){
    $(".btn-slide").on("click", function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
}); */

$(document).ready(function(){
    $(".pane .delete").on("click", function(){
        $(this).parents(".pane").animate({ opacity: 'hide' }, "slow");
    });
});
    
