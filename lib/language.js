// Load modules


// Declare internals

var internals = {};


exports.errors = {
    root: 'value',
    key: '"{{!key}}" ',
    messages: {
        wrapArrays: true
    },
    any: {
        unknown: gettext('is not allowed'),
        invalid: gettext('contains an invalid value'),
        empty: gettext('is not allowed to be empty'),
        required: gettext('is required'),
        allowOnly: gettext('must be one of {{valids}}'),
        default: gettext('threw an error when running default method')
    },
    alternatives: {
        base: gettext('not matching any of the allowed alternatives')
    },
    array: {
        base: gettext('must be an array'),
        includes: gettext('at position {{pos}} does not match any of the allowed types'),
        includesSingle: gettext('single value of "{{!key}}" does not match any of the allowed types'),
        includesOne: gettext('at position {{pos}} fails because {{reason}}'),
        includesOneSingle: gettext('single value of "{{!key}}" fails because {{reason}}'),
        includesRequiredUnknowns: gettext('does not contain {{unknownMisses}} required value(s)'),
        includesRequiredKnowns: gettext('does not contain {{knownMisses}}'),
        includesRequiredBoth: gettext('does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)'),
        excludes: gettext('at position {{pos}} contains an excluded value'),
        excludesSingle: gettext('single value of "{{!key}}" contains an excluded value'),
        min: gettext('must contain at least {{limit}} items'),
        max: gettext('must contain less than or equal to {{limit}} items'),
        length: gettext('must contain {{limit}} items'),
        ordered: gettext('at position {{pos}} fails because {{reason}}'),
        orderedLength: gettext('at position {{pos}} fails because array must contain at most {{limit}} items'),
        sparse: gettext('must not be a sparse array'),
        unique: gettext('position {{pos}} contains a duplicate value')
    },
    boolean: {
        base: gettext('must be checked')
    },
    binary: {
        base: gettext('must be a buffer or a string'),
        min: gettext('must be at least {{limit}} bytes'),
        max: gettext('must be less than or equal to {{limit}} bytes'),
        length: gettext('must be {{limit}} bytes')
    },
    date: {
        base: gettext('must be a number of milliseconds or valid date string'),
        min: gettext('must be larger than or equal to "{{limit}}"'),
        max: gettext('must be less than or equal to "{{limit}}"'),
        isoDate: gettext('must be a valid ISO 8601 date'),
        ref: gettext('references "{{ref}}" which is not a date')
    },
    function: {
        base: gettext('must be a Function')
    },
    object: {
        base: gettext('must be an object'),
        child: gettext('child "{{!key}}" fails because {{reason}}'),
        min: gettext('must have at least {{limit}} children'),
        max: gettext('must have less than or equal to {{limit}} children'),
        length: gettext('must have {{limit}} children'),
        allowUnknown: gettext('is not allowed'),
        with: gettext('missing required peer "{{peer}}"'),
        without: gettext('conflict with forbidden peer "{{peer}}"'),
        missing: gettext('must contain at least one of {{peers}}'),
        xor: gettext('contains a conflict between exclusive peers {{peers}}'),
        or: gettext('must contain at least one of {{peers}}'),
        and: gettext('contains {{present}} without its required peers {{missing}}'),
        nand: gettext('!!"{{main}}" must not exist simultaneously with {{peers}}'),
        assert: gettext('!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}'),
        rename: {
            multiple: gettext('cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"'),
            override: gettext('cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists')
        },
        type: gettext('must be an instance of "{{type}}"')
    },
    number: {
        base: gettext('must be a number'),
        min: gettext('must be larger than or equal to {{limit}}'),
        max: gettext('must be less than or equal to {{limit}}'),
        less: gettext('must be less than {{limit}}'),
        greater: gettext('must be greater than {{limit}}'),
        float: gettext('must be a float or double'),
        integer: gettext('must be an integer'),
        negative: gettext('must be a negative number'),
        positive: gettext('must be a positive number'),
        precision: gettext('must have no more than {{limit}} decimal places'),
        ref: gettext('references "{{ref}}" which is not a number'),
        multiple: gettext('must be a multiple of {{multiple}}')
    },
    string: {
        base: gettext('is required'),
        min: gettext('length must be at least {{limit}} characters long'),
        max: gettext('length must be less than or equal to {{limit}} characters long'),
        length: gettext('length must be {{limit}} characters long'),
        alphanum: gettext('must only contain alpha-numeric characters'),
        token: gettext('must only contain alpha-numeric and underscore characters'),
        regex: {
            base: gettext('is invalid'),
            name: gettext('with value "{{!value}}" fails to match the {{name}} pattern')
        },
        email: gettext('must be a valid email'),
        uri: gettext('must be a valid uri'),
        uriCustomScheme: gettext('must be a valid uri with a scheme matching the {{scheme}} pattern'),
        isoDate: gettext('must be a valid ISO 8601 date'),
        guid: gettext('must be a valid GUID'),
        hex: gettext('must only contain hexadecimal characters'),
        hostname: gettext('must be a valid hostname'),
        lowercase: gettext('must only contain lowercase characters'),
        uppercase: gettext('must only contain uppercase characters'),
        trim: gettext('must not have leading or trailing whitespace'),
        creditCard: gettext('must be a credit card'),
        set: gettext('is invalid'),
        sp: gettext('is invalid'),
        ref: gettext('references "{{ref}}" which is not a number'),
        ip: gettext('must be a valid ip address with a {{cidr}} CIDR'),
        ipVersion: gettext('must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR')
    }
};
