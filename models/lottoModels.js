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

var lottoNew = new Schema({

    title: String,
    author: String,
    ip_address : String,
    lotto_num : {
                        'no1': {type: String, default: '-1'},
                        'no2': {type: String, default: '-1'},
                        'no3': {type: String, default: '-1'},
                        'no4': {type: String, default: '-1'},
                        'no5': {type: String, default: '-1'},
                        'no6': {type: String, default: '-1'}
                },
    make_date : { type: String, default: Date.now  }

});

exports.lottoData = mongoose.model('lottonos', lottoData);
exports.lottoNew = mongoose.model('lottoNew', lottoNew);
