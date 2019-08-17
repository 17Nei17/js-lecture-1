
// var form = document.querySelector('#file-form');
/*

form.addEventListener('submit', event=> {
    event.preventDefault();
    var formData = new FormData(this);
    formData.append('parentEntityId', '5d35ef5608d39b00048a139a');
    fetch ('/upload',{
        method:'POST',
        body:formData,
        })
       .then(res=>res.json())
       .then(res=>console.log(res));
})
*/
function PictureLoad (method,data) {
    fetch ('api/upload', {
        method:method,
        body:data,
    }).then(
        resp => resp.json()
    ).then(
        json => console.log(json),
    );
}

var forme = document.querySelector('#file-form') ;
    forme.addEventListener ('submit' , function(ev) {
    var formData = new FormData(this);
    formData.append('parentEntityId', '5d35ef5608d39b00048a139a');
   ev.preventDefault();
})
