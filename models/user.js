const db = require('..config/db');

const User = db.define('User', {
	id: { type: 'INTEGER', : true, primaryKey: true },
	name: { type: 'STRING', allowNull: false },
  	email: { type: 'STRING', allowNull: false, unique: true },
  	password: { type: 'STRING', allowNull: false },
  	role: { type: 'STRING', allowNull: false }, // landlord or tenant
});

module.exports = User;