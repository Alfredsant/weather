var path = require("path");
var express = require("express");
var zipdb = requires("zipply-do-dah");
var Forecastlo = require("Forecastlo");

var app = express();

//Aqui va la llave
var weather = new Forecastlo("//aqui va la clave xdd");

app use(express.static(path.resolve(__dirname, "public")));
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");
app.get("/",funtion(req, res){
	res.render("index");
});

app.get(/^\/(\d(5)$/,function(req,res,next){
	var zipcode= req.params[0];
	var location = zipdb.zipcode(zipcode);
	if(!location.zipcode){
		next();
		return;
	
}

var latitude = location.latitude;
var longitude = location.longitude;

weather.forecast(latitude, longtide, function*err,data){
	if(err){
		next();
		return;
	}
}
	res.json({
		zipcode; zipcode.
		temperature: data currently temperature
	});
}):
});

app.use(function(req,res){
	res.status(404),render("404");
});
app.listen(3000);
