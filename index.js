const express = require('express');
const app = express();

const port = 4000;
// const config = require('./config');

// const client = require('twilio')(config.accountID, config.authToken);

// app.get('/login', (req, res) => {
// 	client
// 		.verify
// 		.services(config.serviceID)
// 		.verifications
// 		.create({
// 			to: `+${req.query.phonenumber}`,
// 			channel: req.query.channel
// 		})
// 		.then((data) => {
// 			res.status(200).send(data);
// 		}).catch((err) => {
// 			res.status(500).send(err);
// 		})
// });

// app.get('/verify', (req, res) => {
// 	client
// 		.verify
// 		.services(config.serviceID)
// 		.verificationChecks
// 		.create({
// 			to: `+${req.query.phonenumber}`,
// 			code: req.query.code
// 		})
// 		.then((data) => {
// 			res.status(200).send(data);
// 		}).catch((err) => {
// 			res.status(500).send(err);
// 		})
// })

app.listen(port, () => {
	console.log(`Server is running at ${port}`);
})