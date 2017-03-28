function quote() {
  $.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&lang=en&format=jsonp&jsonp=?",
      success: function( response ) {
        $(".quoteArea").html(
          '<h3 id="author">' + response.quoteAuthor + '</h3>' +
          '<p id="text">' + response.quoteText + '</p >'
        );
        $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?text==' + response.quoteAuthor + ': ' + response.quoteText)
      }
  });
}

$("button").click(function(){
  quote();
});


(function(){
  quote();
})();
