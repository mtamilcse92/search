/**
 * DataController
 *
 * @description :: Server-side logic for managing data
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var _ = require('lodash');

module.exports = {



    /**
     * `DataController.create()`
     */
    create: function(req, res) {
        Data.create(req.params.all(), function(err, create) {
            if (err) {
                return res.send(err, 500);
            }
            res.json({ value: create });
        });
    },


    /**
     * `DataController.show()`
     */
    show: function(req, res) {
        var name = req.param('name');
        console.log(name);
        var collection, foundA = [],
            foundB = [],
            foundC = [],
            foundD = [],
            foundE = [],
            final = [],
            locationA = [],
            locationB = [],
            locationC = [],
            locationD = [],
            locationE = [];
        Data.findOne(1, function(err, found) {
            if (err) {
                return res.send(err, 500);
            }
            _.forEach(name, function(value) {
                // console.log(value);
                results = _.map(
                    _.filter(found.sectionA, { "name": value }),
                    function(val) {
                        foundA.push(val);
                        locationA.push(val.location);
                        // console.log("location " + val.location);
                    }
                );
            });
            _.forEach(name, function(value) {
                console.log(value);
                results = _.map(
                    _.filter(found.sectionB, { "name": value }),
                    function(val) {
                        foundB.push(val);
                        locationB.push(val.location);
                        // console.log("location " + val.location);
                    }
                );
            });
            _.forEach(name, function(value) {
                console.log(value);
                results = _.map(
                    _.filter(found.sectionC, { "name": value }),
                    function(val) {
                        foundC.push(val);
                        locationC.push(val.location);
                        // console.log("location " + val.location);
                    }
                );
            });
            _.forEach(name, function(value) {
                console.log(value);
                results = _.map(
                    _.filter(found.sectionD, { "name": value }),
                    function(val) {
                        foundD.push(val);
                        locationD.push(val.location);
                        // console.log("location " + val.location);
                    }
                );
            });
            _.forEach(name, function(value) {
                console.log(value);
                results = _.map(
                    _.filter(found.sectionE, { "name": value }),
                    function(val) {
                        foundE.push(val);
                        locationE.push(val.location);
                        // console.log("location " + val.location);
                    }
                );
            });
            locationA.sort();
            locationB.sort();
            locationC.sort();
            locationD.sort();
            locationE.sort();
            var sortValue = [];
            var BC = [];
            var DE = [];
            BC.push(foundB);
            BC.push(foundC);
            DE.push(foundD);
            DE.push(foundE);
            var last = [];
            if (locationA[0] <= 2 && locationB[0] <= 3) {
                sortValue.push(_.first(foundA));
                if (_.last(locationB) <= 3 && _.last(locationC) <= 3) {
                  console.log("first");
                    sortValue.push((_.sortBy(_.flatten(BC), 'location')));
                    sortValue.push((_.sortBy(_.flatten(DE), 'location')));
                    sortValue.push((_.sortBy(_.flatten(last), 'location')).reverse());
                    console.log(_.flatten(sortValue));
                    final.push(_.flatten(sortValue));
                } else if (locationA.includes(2) || locationA.includes(3)) {
                  console.log("second");
                    sortValue.push((_.sortBy(_.flatten(BC), 'location')));
                    last.push(_.without(foundA, _.first(foundA)));
                    sortValue.push((_.sortBy(_.flatten(last), 'location')).reverse());
                    sortValue.push((_.sortBy(_.flatten(DE), 'location')));
                    console.log(_.flatten(sortValue));
                    final.push(_.flatten(sortValue));
                } else {
                  console.log("third");
                    sortValue.push((_.sortBy(_.flatten(BC), 'location')));
                    last.push(_.without(foundA, _.first(foundA)));
                    sortValue.push((_.sortBy(_.flatten(last), 'location')).reverse());
                    sortValue.push((_.sortBy(_.flatten(DE), 'location')).reverse());
                    console.log(_.flatten(sortValue));
                    final.push(_.flatten(sortValue));
                }

            } else if (locationB.includes(2) || locationC.includes(3)) {
              console.log("fourth");
                sortValue.push((_.sortBy(_.flatten(foundA), 'location')));
                sortValue.push((_.sortBy(_.flatten(BC), 'location')).reverse());
                sortValue.push((_.sortBy(_.flatten(DE), 'location')));
                console.log(_.flatten(sortValue));
                final.push(_.flatten(sortValue));
            } else {
              console.log("fifth");
                sortValue.push((_.sortBy(_.flatten(foundA), 'location')));
                sortValue.push((_.sortBy(_.flatten(BC), 'location')).reverse());
                sortValue.push((_.sortBy(_.flatten(DE), 'location')).reverse());
                console.log(_.flatten(sortValue));
                final.push(_.flatten(sortValue));
            }
            collection = _.concat(foundA, foundB, foundC, foundD);
            res.json({ value: final });
        });
    },


    /**
     * `DataController.update()`
     */
    update: function(req, res) {
        Data.update(req.param('id'), req.params.all(), function(err, update) {
            if (err) {
                return res.send(err, 500);
            }
            res.json({ value: update });
        });
    },


    /**
     * `DataController.delete()`
     */
    destroy: function(req, res) {
        Data.destroy(req.param('id'), function(err, destroy) {
            if (err) {
                return res.send(err, 500);
            }
            res.json({ value: "deleted" });
        });
    }
};
