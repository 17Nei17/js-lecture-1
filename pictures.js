var express = require ('express');
var multer = require("multer");
var cloudinary = require('cloudinary');
var mongoClient = require('mongodb').mongoCliient;
var storage= multer.diskStorage({
    destination: (req,res,cb)=>{ 
        cb(null,'upload');
    },
    filename:(req,res,cb)=>{
        cb(null, file.fieldname + '-' + Date.now())
    }
})
cloudinary.config({
    cloud_name:'dhctditll',
    api_key:'184321579195359',
    api_secret:'QKtwJ4LzvPh9KmuHAjuX_rMl4ys'
});
var uploadHandler = multer ({storage: 'storage' });
var app= express();
app.use(express.static('public'));

var MONGO ='mongodb+srv://Nei:2020327n@cluster0-cbmpf.gcp.mongodb.net/test?retryWrites=true&w=majority'

app.get ('api/upload',(req, res)=>{
   res.json([{name:'cat', age:"10"},{name:'cat2', age:"120"}]);
})

app.post ('api/upload', uploadHandler.single('file'), (req,res)=>{
    var file= req.file;
    cloudinary.v2.uploader.upload(
        'data:' + file.mimetype + ';base64,' + file.buffer.toString('base64') ,
        (err, result)=> dbCreate(res,result)
    )
})

function dbCreate(resp,imgData) {
    mongoClient.connect( MONGO, (err,connection)=>{
        var myobj={
            url:imgData.secure_url,
            createData:Date.now,
        }
         connection.db('Cluster0').collection('uploads')
            .insertOne(myobj, (err,insertResult)=>{
                 if(err){
                    console.log(err)
                 }
            resp.json(imgData);
            connection.close();
        })
    })
}
