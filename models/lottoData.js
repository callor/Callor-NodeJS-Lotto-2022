var mongoose = require('mongoose') ;

var Schema = mongoose.Schema;

var lottoData = new Schema({

	sno:String,
	sdate:String,
	no1:Number,
	no2:Number,
	no3:Number,
	no4:Number,
	no5:Number,
	no6:Number,
	bonus:Number,
	top1:Number,
	top1_m:Number,
	top2:Number,
	top2_m:Number,
	top3:Number,
	top3_m:Number,
	top4:Number,
	top4_m:Number,
	top5:Number,
	top5_m:Number
		
});

module.exports = mongoose.model('lottonos', lottoData);