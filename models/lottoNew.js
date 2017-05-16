var mongoose = require('mongoose') ;

var Schema = mongoose.Schema;

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

module.exports = mongoose.model('lottoNew', lottoNew);
