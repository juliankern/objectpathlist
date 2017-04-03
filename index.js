var _ = require('lodash');

function object2pathlist(data) {
    var pathlist = {};

    getKeysForVar(pathlist, null, data)

    return pathlist;
    
    function getKeysForVar(pathlist, currentKey, data) {
        for (var key in data) {
            if (_.isObject(data[key])) {
                getKeysForVar(pathlist, (currentKey ? currentKey + '.' : '') + key, data[key])
            } else {
                pathlist[(currentKey ? currentKey + '.' : '') + key] = data[key];
            }
        }

        return pathlist;
    }
}

function pathlist2object(pathlist) {
    var keys = Object.keys(pathlist);
    var data = {};

    for (var i in keys) {
        _.set(data, keys[i], pathlist[keys[i]]);
    }

    return data;
}

module.exports = {
    toPathlist: object2pathlist,
    toObject: pathlist2object
};