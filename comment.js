
  var button = document.getElementById('log');
  button.addEventListener ('click', function(event){
    fetch ("https://homeworkpract.herokuapp.com/", {
        method:'GET',
        headers:{
            "Content-type":"/json",
        },
    }).then(
        resp=>resp.json()
    ).then (
        json=>console.log (json)
    );

})


