var express = require('express');
var router = express.Router();
var car = require('../models/car_model.js');

const defaultCallback = (err, dbResult, res) => {
    if (err) {
        res.send(err);
    } else {
        res.send(dbResult);
    }
}

router.get('/', (req, res) => car.getAll( (err, dbResult) => defaultCallback(err, dbResult, res) ));

router.get('/:id', (req, res) => car.getById( req.params.id, (err, dbResult) => defaultCallback(err, dbResult, res) ));

router.post('/', (req, res) => car.add( req.body, (err, dbResult) => defaultCallback(err, dbResult, res) ));

router.put('/:id', (req, res) => car.update( req.params.id, req.body, (err, dbResult) => defaultCallback(err, dbResult, res) ));

router.delete('/:id', (req, res) => car.delete( id, (err, dbResult) => defaultCallback(err, dbResult, res) ));

module.exports = router;
