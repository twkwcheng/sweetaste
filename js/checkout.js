$(function() {
  $(".next").on("click",function(){
    // var btn_content = $.trim($(this).text());
    // alert(btn_content);
    var current_section = $(this).parents("section");
    current_section.removeClass("active");
    current_section.next().addClass("active");
  });
  $("section.invoice .virtual_real .item a").on("click",function(){
    var btn_content = $.trim($(this).text());
    // alert(btn_content);
    if ($(this).parent().hasClass("active")===false) {
      $(this).parents("section").removeClass("active");
      if(btn_content==="郵寄發票") {
        $("section.invoice_real").addClass("active");
      } else {
        $("section.invoice_virtual").addClass("active");
      }
    }
  });
});