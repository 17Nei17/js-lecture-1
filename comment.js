
  var button = document.getElementById('log');
  button.addEventListener ('click', function(event){
    fetch ("https://neitest.herokuapp.com/identification", {
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


