/**
 * Allowed types and their internal representation
 */
QueryBuilder.types = {
    'string':   'string',
    'integer':  'number',
    'double':   'number',
    'date':     'datetime',
    'time':     'datetime',
    'datetime': 'datetime',
    'boolean':  'boolean'
};

/**
 * Allowed inputs
 */
QueryBuilder.inputs = [
    'text',
    'textarea',
    'radio',
    'checkbox',
    'select'
];

/**
 * Runtime modifiable options with `setOptions` method
 */
QueryBuilder.modifiable_options = [
    'display_errors',
    'allow_groups',
    'allow_empty',
    'default_condition',
    'default_filter'
];

/**
 * CSS selectors for common components
 */
var Selectors = QueryBuilder.selectors = {
    group_container:      '.rules-group-container',
    rule_container:       '.rule-container',
    filter_container:     '.rule-filter-container',
    operator_container:   '.rule-operator-container',
    value_container:      '.rule-value-container',
    error_container:      '.error-container',
    condition_container:  '.rules-group-header .group-conditions',

    rule_header:          '.rule-header',
    group_header:         '.rules-group-header',
    group_actions:        '.group-actions',
    rule_actions:         '.rule-actions',

    rules_list:           '.rules-group-body>.rules-list',

    group_condition:      '.rules-group-header [name$=_cond]',
    rule_filter:          '.rule-filter-container [name$=_filter]',
    rule_operator:        '.rule-operator-container [name$=_operator]',
    rule_value:           '.rule-value-container [name*=_value_]',

    add_rule:             '[data-add=rule]',
    delete_rule:          '[data-delete=rule]',
    add_group:            '[data-add=group]',
    delete_group:         '[data-delete=group]'
};

/**
 * Template strings (see `template.js`)
 */
QueryBuilder.templates = {};

/**
 * Localized strings (see `i18n/`)
 */
QueryBuilder.regional = {};

/**
 * Default operators
 */
QueryBuilder.OPERATORS = {
    equal:            { type: 'equal',            nb_inputs: 1, multiple: false, apply_to: ['string', 'number', 'datetime', 'boolean'] },
    not_equal:        { type: 'not_equal',        nb_inputs: 1, multiple: false, apply_to: ['string', 'number', 'datetime', 'boolean'] },
    in:               { type: 'in',               nb_inputs: 1, multiple: true,  apply_to: ['string', 'number', 'datetime'] },
    not_in:           { type: 'not_in',           nb_inputs: 1, multiple: true,  apply_to: ['string', 'number', 'datetime'] },
    less:             { type: 'less',             nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
    less_or_equal:    { type: 'less_or_equal',    nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
    greater:          { type: 'greater',          nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
    greater_or_equal: { type: 'greater_or_equal', nb_inputs: 1, multiple: false, apply_to: ['number', 'datetime'] },
    between:          { type: 'between',          nb_inputs: 2, multiple: false, apply_to: ['number', 'datetime'] },
    not_between:      { type: 'not_between',      nb_inputs: 2, multiple: false, apply_to: ['number', 'datetime'] },
    begins_with:      { type: 'begins_with',      nb_inputs: 1, multiple: false, apply_to: ['string'] },
    not_begins_with:  { type: 'not_begins_with',  nb_inputs: 1, multiple: false, apply_to: ['string'] },
    contains:         { type: 'contains',         nb_inputs: 1, multiple: false, apply_to: ['string'] },
    not_contains:     { type: 'not_contains',     nb_inputs: 1, multiple: false, apply_to: ['string'] },
    ends_with:        { type: 'ends_with',        nb_inputs: 1, multiple: false, apply_to: ['string'] },
    not_ends_with:    { type: 'not_ends_with',    nb_inputs: 1, multiple: false, apply_to: ['string'] },
    is_empty:         { type: 'is_empty',         nb_inputs: 0, multiple: false, apply_to: ['string'] },
    is_not_empty:     { type: 'is_not_empty',     nb_inputs: 0, multiple: false, apply_to: ['string'] },
    is_null:          { type: 'is_null',          nb_inputs: 0, multiple: false, apply_to: ['string', 'number', 'datetime', 'boolean'] },
    is_not_null:      { type: 'is_not_null',      nb_inputs: 0, multiple: false, apply_to: ['string', 'number', 'datetime', 'boolean'] }
};

/**
 * Default configuration
 */
QueryBuilder.DEFAULTS = {
    filters: [],
    plugins: [],

    filter_builder: false,
    display_errors: true,
    allow_groups: -1,
    allow_empty: false,
    conditions: ['AND', 'OR'],
    default_condition: 'AND',
    inputs_separator: ' , ',
    select_placeholder: '------',
    display_empty_filter: true,
    default_filter: null,
    optgroups: {},

    default_rule_flags: {
        filter_readonly: false,
        operator_readonly: false,
        value_readonly: false,
        no_delete: false
    },

    default_group_flags: {
        condition_readonly: false,
        no_delete: false
    },

    templates: {
        group: null,
        rule: null,
        filterSelect: null,
        operatorSelect: null
    },

    lang_code: 'en',
    lang: {},

    operators: [
        'equal',
        'not_equal',
        'in',
        'not_in',
        'less',
        'less_or_equal',
        'greater',
        'greater_or_equal',
        'between',
        'not_between',
        'begins_with',
        'not_begins_with',
        'contains',
        'not_contains',
        'ends_with',
        'not_ends_with',
        'is_empty',
        'is_not_empty',
        'is_null',
        'is_not_null'
    ],

    icons: {
        add_group:    'glyphicon glyphicon-plus-sign',
        add_rule:     'glyphicon glyphicon-plus',
        remove_group: 'glyphicon glyphicon-remove',
        remove_rule:  'glyphicon glyphicon-remove',
        error:        'glyphicon glyphicon-warning-sign'
    }
};
