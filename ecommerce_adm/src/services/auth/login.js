const User = require('./../../schemas/user')

module.exports = (req, res) => {
	User.authenticate()(req.body.email, req.body.password, (error, user, opts) => {
		
				
		console.log(user)
		console.log(error)
		console.log(req.body.email +" "+req.body.password)

		if (error || user == false) {

			return res.redirect('/auth')
		}

		return req.login(user, (error) => {
			if (error) {
				return res.redirect('/auth')
			}

			return res.redirect('/')
		})
	})	
}