// Load modules

var Hoek = require('hoek');
var Ref = require('./ref');

// Type modules are delay-loaded to prevent circular dependencies


// Declare internals

var internals = {
    any: null,
    string: require('./string'),
    boolean: require('./boolean'),
    alt: null,
    object: null
};


exports.schema = function (config) {

    internals.any = internals.any || new (require('./any'))();
    internals.alt = internals.alt || require('./alternatives');
    internals.object = internals.object || require('./object');

    if (config &&
        typeof config === 'object') {

        if (config.isJoi) {
            return config;
        }

        if (Array.isArray(config)) {
            return internals.alt.try(config);
        }

        if (config instanceof RegExp) {
            return internals.string.regex(config);
        }

        return internals.object.keys(config);
    }

    if (typeof config === 'string') {
        return internals.string.valid(config);
    }

    if (typeof config === 'boolean') {
        return internals.boolean.valid(config);
    }

    if (Ref.isRef(config)) {
        return internals.any.valid(config);
    }

    Hoek.assert(config === null, 'Invalid schema content:', config);

    return internals.any.valid(null);
};


exports.ref = function (id) {

    return Ref.isRef(id) ? id : Ref.create(id);
};
