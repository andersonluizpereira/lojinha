const User = require('./../../schemas/user')

module.exports = (req, res) => {

	let data = {
		
		email: req.body.email
	}


			User.register(data, req.body.password, (error, account) => {
		if (error) {
			return res.redirect('/')
		}

		return res.redirect('/user')
	})
} 