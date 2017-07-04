$(document).ready(function(){

function addItems(){



    $(".add").on("click", function(){
        var  input = $(".input").val();
        var button = $("button");
        var list = $(".list");
        var li = $("<li></li>");
        var text = document.createTextNode(input);
        li.append(text);
        list.append(li);

        $(".input").val("");

        var span = $("<span></span>").text("Usuń");
        span.addClass("delete");
        li.append(span);

        var remove = $(".delete");
        remove.on("click", function(){
        $(this).hide();
        $(this).parent().hide();    
        });

    })
}
addItems();

});
