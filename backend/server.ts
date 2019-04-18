console.log('server is running');

var cors = require('cors');
var bodyParser = require('body-parser');
var express = require('express'),
    app = express(),
    port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port,'127.0.0.1');

var dbKapcsolat = require('knex')(
{
	client: 'mssql',
	connection:
	{
		host: "127.0.0.1",
		port: 2957, // az adatbázis portja
		user: "sa",
		password: 'Servantes1.',
		database: 'nodetest'
	}
});

app.route('/listaz').post(async function (req, resp)
{
	/*var mezõ1 = kérés.body.mezõ1;

	válasz.json({ válaszmezõ1: érték, válaszmezõ2: érték, ...});*/
	console.log('valami');
	
	let result = await dbKapcsolat.select().from('test2');
	resp.json(result);
});

app.route('/kuld').post(async function (req, resp)
{
	/*var mezõ1 = kérés.body.mezõ1;

	válasz.json({ válaszmezõ1: érték, válaszmezõ2: érték, ...});*/

	let insert = await dbKapcsolat('test2').insert({text: req.body.text, int_value:1,status:1, password: req.body.password});
	resp.json(insert);
});

app.route('/modosit').post(async function (req, resp)
{
	/*var mezõ1 = kérés.body.mezõ1;

	válasz.json({ válaszmezõ1: érték, válaszmezõ2: érték, ...});*/

	let insert = await dbKapcsolat('test2').update({text: req.body.text,password: req.body.password}).where({id: req.body.id});
	resp.json(insert);
});

app.route('/torles').post(async function (req, resp)
{
	/*var mezõ1 = kérés.body.mezõ1;

	válasz.json({ válaszmezõ1: érték, válaszmezõ2: érték, ...});*/

	let insert = await dbKapcsolat('test2').delete().where({id: req.body.id});
	resp.json(insert);
});