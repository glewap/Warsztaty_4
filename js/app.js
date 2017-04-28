$(document).ready(function(){

  var form = $('form');

  form.on("submit", function(e){
    e.preventDefault();

    var title = $("#title").val();
    var author = $("#author").val();
    var publisher = $("#publisher").val();
    var genre = $("#genre").val();
    var isbn = $("#isbn").val();
    var created_at = $("#created_at").val();
    var updated_at = $("#updated_at").val();
    var url = $("#url").val();
    var id = $("#id").val();


  })

  $.ajax({
    url: "http://localhost:3000/books"
  }).done(function(response){
    response.forEach(function(el,i){
      
      var newEl = $('<li class="list-group-item">');

      var a = $("<a data-id='" + el.id + "'>");

      a.text(el.title);

      newEl.append(a);

      //newEl.text(el.title);
      
      var div = $('<div class="book-info">');
      
      newEl.append(div);
      
      $('ul').append(newEl);

      a.one("click", function(){
        console.log("klik");
        $.ajax({
          url: "http://localhost:3000/books/" + $(this).data('id')
        }).done(function(r){
          console.log(r);
          var div = $('a[data-id="' + r.id + '"]').next();
          div.text(r.author);
        });
      });

    });
  });
});