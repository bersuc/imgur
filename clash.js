const cr = require('clashroyale');
cr.getProfile('2J8U0PRJ')
    .then(profile => console.log(profile));
cr.getClan('C9YC9U').then(clan => console.log(clan));