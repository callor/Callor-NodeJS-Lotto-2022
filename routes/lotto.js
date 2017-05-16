/**
 * http://usejsdoc.org/
 */

var moment = require('moment');


module.exports = function(app,lottoNew,lottoData) {

	app.get('/lottoView',function(req,res){
	
		lottoData.find(function(err,data){
			res.status(200).render('lottoView',{lottos:data});
		}).sort({sno:1}).count(function(err,count) {console.log(count)} )
	})
	
	
	
	app.get('/lotto', function(req, res) {
		var numbers = new Array();
		for (i = 0; i < 45; i++) {
			numbers[i] = i + 1;
		}
		var shuffle = require(__dirname + '/shuffle.js');
		numbers = shuffle.shuffle(numbers);

		var lottos = Array();
		for (var i = 0; i < 6; i++) {
			lottos[i] = numbers[i];
		}

		lottos.sort(function(a, b) {
			return a - b
		});

		moment.locale('ko'); // 시간 클래스

		var lottoDTO = new lottoNew;
		lottoDTO.title = 'lottoNew'; // 속성 대입해주고
		lottoDTO.author = 'callor';

		// 현재 날짜를 구한다
		lottoDTO.make_date = moment().format('LLLL');

		// req 로 부터 접속자 IP 주소를 가져온다
		var req_ip = req.headers['x-forwarded-for']
				|| req.connection.remoteAddress || req.socket.remoteAddress
				|| req.connection.socket.remoteAddress;

		lottoDTO.ip_address = req_ip;

		lottoDTO.lotto_num.no1 = lottos[0];
		lottoDTO.lotto_num.no2 = lottos[1];
		lottoDTO.lotto_num.no3 = lottos[2];
		lottoDTO.lotto_num.no4 = lottos[3];
		lottoDTO.lotto_num.no5 = lottos[4];
		lottoDTO.lotto_num.no6 = lottos[5];
		
//		lottos[0] = 2
//		lottos[1] = 17
//		lottos[2] = 19
//		lottos[3] = 24
//		lottos[4] = 37
//		lottos[5] = 41
		

		lottoData.findOne({
			$and: [
					{no1:lottos[0]},
					{no2:lottos[1]},
					{no3:lottos[2]},
					{no4:lottos[3]},
					{no5:lottos[4]},
					{no6:lottos[5]}
			      ]
		}, function (err, data) {
				
//		lottoDTO.save(function(err) { // 저장(추가)
			// console.log('Ok Save');
			console.log(data);
			res.render('lotto.ejs', {
				lottos : lottos,
				today : moment().format('YYYY년 MM월 DD일 HH:MM:SS'),
//				today : moment().format('LLLL'),
				userip : req_ip,
				getdate : data == undefined ? '' : data.sdate,
				getno : data == undefined ? '' : data.sno,
			});
		}).count(function(err,count){console.log(count)});
	});

	app.get('/timer', function(req, res) {
		moment.locale('en'); // 시간 클래스

		// 현재 날짜를 구한다
//		timer = moment().format('YYYY-MM-DD HH:MM:SS');
//		timer = moment().format('LLLL');
		res.status(200).send('Today: ' + timer);
		console.log(timer);

	})

}
