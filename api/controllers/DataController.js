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
        var collection,
            foundA = [],
            foundB = [],
            foundC = [],
            foundD = [],
            foundE = [],
            foundF = [],
            foundG = [],
            foundH = [],
            foundI = [],
            foundJ = [],
            final = [],
            locationA = [],
            locationB = [],
            locationC = [],
            locationD = [],
            locationE = [],
            locationF = [],
            locationG = [],
            locationH = [],
            locationI = [],
            locationJ = [];
        locationF = [];
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
                // console.log(value);
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
                // console.log(value);
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
                // console.log(value);
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
                // console.log(value);
                results = _.map(
                    _.filter(found.sectionE, { "name": value }),
                    function(val) {
                        foundE.push(val);
                        locationE.push(val.location);
                        // console.log("location " + val.location);
                    }
                );
            });
            _.forEach(name, function(value) {
                // console.log(value);
                results = _.map(
                    _.filter(found.sectionF, { "name": value }),
                    function(val) {
                        foundF.push(val);
                        locationF.push(val.location);
                    }
                );
            });
            _.forEach(name, function(value) {
                // console.log(value);
                results = _.map(
                    _.filter(found.sectionG, { "name": value }),
                    function(val) {
                        foundG.push(val);
                        locationG.push(val.location);
                    }
                );
            });
            _.forEach(name, function(value) {
                // console.log(value);
                results = _.map(
                    _.filter(found.sectionH, { "name": value }),
                    function(val) {
                        foundH.push(val);
                        locationH.push(val.location);
                    }
                );
            });
            _.forEach(name, function(value) {
                // console.log(value);
                results = _.map(
                    _.filter(found.sectionI, { "name": value }),
                    function(val) {
                        foundI.push(val);
                        locationI.push(val.location);
                    }
                );
            });
             _.forEach(name, function(value) {
                // console.log(value);
                results = _.map(
                    _.filter(found.sectionJ, { "name": value }),
                    function(val) {
                        foundJ.push(val);
                        locationJ.push(val.location);
                    }
                );
            });
            locationA.sort();
            locationB.sort();
            locationC.sort();
            locationD.sort();
            locationE.sort();
            locationF.sort();
            locationG.sort();
            locationH.sort();
            locationI.sort();
            locationJ.sort();
            var sortValue = [];
            var BC = [];
            var DE = [];
            BC.push(foundB);
            BC.push(foundC);
            DE.push(foundD);
            DE.push(foundE);
            var last = [];





            if (locationA[0] <= 2 || locationB[0] <= 3) {

                // sortValue.push(_.first(foundA));
                if (_.last(locationB) <= 3 || _.last(locationC) <= 3) {
                    console.log("first");

                    if (locationA[0] <= 2) {
                        var vall = [1, 2];
                        _.forEach(vall, function(value) {
                            console.log(value);
                            results = _.map(
                                _.filter(foundA, { "location": value }),
                                function(val) {
                                    sortValue.push(val);
                                    console.log("val" + val);
                                }
                            );
                        });

                    }
                    var loc = [1, 2];
                    var copy = foundA;
                    var balance = [];
                    _.forEach(loc, function(value) {
                        console.log(value);
                        balance.push(_.pull(copy, _.find(foundA, { "location": value })));
                    });
                    console.log(balance);
                    // last.push(_.without(foundA, _.first(foundA)));
                    last.push(_.flatten(_.uniqBy(balance, 'location')));
                    sortValue.push((_.sortBy(_.flatten(BC), 'location')));
                    sortValue.push((_.sortBy(_.flatten(DE), 'location')));
                    sortValue.push((_.sortBy(_.flatten(foundF), 'location')));
                    sortValue.push((_.sortBy(_.flatten(last), 'location')).reverse());
                    console.log(_.flatten(sortValue));
                    final.push(_.flatten(sortValue));
                } else if (locationA.includes(3) || locationA.includes(4)) {
                    console.log("second");
                    // last.push(_.without(foundA, _.first(foundA)));

                    if (locationB.includes(2) || locationC.includes(3)) {
                        sortValue.push((_.sortBy(_.flatten(BC), 'location')));
                        sortValue.push((_.sortBy(_.flatten(foundA), 'location')).reverse());
                        sortValue.push((_.sortBy(_.flatten(DE), 'location')).reverse());
                        if (locationD.includes(3) || locationE.includes(3)) {
                            sortValue.push((_.sortBy(_.flatten(foundF), 'location')).reverse());
                        } else {
                            sortValue.push((_.sortBy(_.flatten(foundF), 'location')));
                        }
                    } else {
                        sortValue.push((_.sortBy(_.flatten(foundA), 'location')));
                        sortValue.push((_.sortBy(_.flatten(BC), 'location')).reverse());
                        sortValue.push((_.sortBy(_.flatten(DE), 'location')));
                        if (locationD.includes(3) || locationE.includes(3)) {
                            sortValue.push((_.sortBy(_.flatten(foundF), 'location')).reverse());
                        } else {
                            sortValue.push((_.sortBy(_.flatten(foundF), 'location')));
                        }
                    }
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

                if (_.last(locationB) <= 3 || _.last(locationC) <= 3) {
                    sortValue.push((_.sortBy(_.flatten(BC), 'location')));
                    sortValue.push((_.sortBy(_.flatten(DE), 'location')));
                    final.push(_.flatten(sortValue));
                } else {
                    // sortValue.push((_.sortBy(_.flatten(foundA), 'location')).reverse());
                    sortValue.push((_.sortBy(_.flatten(BC), 'location')).reverse());
                    sortValue.push((_.sortBy(_.flatten(DE), 'location')));
                    console.log(_.flatten(sortValue));
                    final.push(_.flatten(sortValue));
                }

            } else if (foundA.length === 0) {

                if (foundB.length === 0) {

                    sortValue.push((_.sortBy(_.flatten(DE), 'location')));
                    sortValue.push((_.sortBy(_.flatten(foundF), 'location')).reverse());
                    console.log(_.flatten(sortValue));
                    final.push(_.flatten(sortValue));

                } else {
                    sortValue.push((_.sortBy(_.flatten(BC), 'location')));
                    sortValue.push((_.sortBy(_.flatten(DE), 'location')).reverse());
                    console.log(_.flatten(sortValue));
                    final.push(_.flatten(sortValue));
                }


            } else if (locationA.includes(3) || locationA.includes(4) || locationA.includes(5)) {
                console.log("fifth");
                sortValue.push((_.sortBy(_.flatten(foundA), 'location')));
                if (locationB.includes(2) || locationC.includes(2)) {
                    sortValue.push((_.sortBy(_.flatten(BC), 'location')).reverse());
                    sortValue.push((_.sortBy(_.flatten(DE), 'location')));
                    final.push(_.flatten(sortValue));
                } else {
                    sortValue.push((_.sortBy(_.flatten(BC), 'location')).reverse());
                    sortValue.push((_.sortBy(_.flatten(DE), 'location')).reverse());
                    console.log(_.flatten(sortValue));
                    final.push(_.flatten(sortValue));
                }

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
