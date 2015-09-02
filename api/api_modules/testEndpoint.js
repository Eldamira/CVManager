(function () {
	'use strict';

	/*module.exports = function (req, res) {
		res.status(200).json({ message: 'Hi Machan :)' });
	};*/
	module.exports.testReturn = function () {

		return 15;
	};
	module.exports.test = function (req, callback) {
		callback('Hi Machan :)');
	};

})();