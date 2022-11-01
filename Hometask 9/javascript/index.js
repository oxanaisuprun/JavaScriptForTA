//Task 1
$("a[href^='https://']").attr('target', '_blank');

//Task 2
$("h2.head").css("background-color", "green" );
$("h2 span.inner").css("font-size", "35px");

//Task 3
$("h3+div").after($("h3"));

//Task 4
$("[type=checkbox]").change(function () { 
    if ($("[type=checkbox]:checked").length == 3)
        $(":checkbox(:checked)").attr("disabled", true);
    else
        $(":checkbox:not(:checked)").attr("disabled", false);
    
});
