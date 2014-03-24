/**
 * @fileOverview A collection of functions for records.
 * @name Record Keeper
 */

/**
 * Gets the current record.
 */
function getRecord(){
}

/** Change the role of the employee. */
function recast(employeeId, newRole) {
}

/**
 * Change the role of the employee.
 * @param {integer} employeeId The id of the employee.
 * @param {string} [newRole] The new role of the employee.
 */
function recast(employeeId, newRole) {
}

/**
 * Modify the details of the employee.
 * @param {object} employee The employee.
 * @param {integer} newDetails
 * @config {string} [title] The new job title.
 * @config {number} [salary] The new salary.
 */
function modify(employee, newDetails) {
    if (newDetails.title != undefined)  employee.title = newDetails.title;
    if (newDetails.salary != undefined) employee.salary = newDetails.salary;
}

record = {
    /** Remove the record. */
    remove: function() {
    }
};

record = {
    row: {
        field: {
            /** Remove the record. */
            remove: function() {
            }
        }
    }
};

/** @ignore */
function hide(file) {
}

/** @constructor */
function RecordSet() {
}

/**
 * A collection of records.
 * @constructor
 */
function RecordSet() {
}

/** @constructor */
function RecordSet() {
    this.getRecords = function(){
    }
}

/** @constructor */
function RecordSet() {
    /** Get all the records. */
    this.getRecords = function(){
    }
}

/** @constructor */
function RecordSet(id) {
    /** The record set's id number */
    this.id = id;
}

/** @constructor */
function RecordSet(id) {
    /**
     * The record set's id number.
     * @type number
     */
    this.id = id;
}

/**
 * @constructor
 * @property {number} id The record set's id number.
 */
function RecordSet(id) {
    this.id = id;
}

/** @constructor */
function RecordSet(f) {
    /** @function */
    this.write = f;
}

/** The maximum number of records. */
var LIMIT = 99;

/** The maximum number of records. */
var CONFIG = {
    defaults: {
        /** The default format. */
        format: "XML"
    }
};

/**
 * The file index.
 * @name fileIndex
 */

/**
 * A file indexer.
 * @name Indexer
 * @constructor
 */

/**
 * Get the file's index.
 * @name getIndex
 * @function
 * @memberOf Indexer
 */

/**
 * @constructor
 */
function Filebox() {
    this.add = function() {
    }
    this.remove = function() {
    }
}

SecureFilebox.prototype = new Filebox();
SecureFilebox.prototype.constructor = SecureFilebox;

/**
 * @constructor
 * @augments Filebox
 */
function SecureFilebox() {
    this.shred = function() {
    }
}

/**
 * @constructor
 */
function SafeDispose() {
}
SafeDispose.prototype.burn = function() {};
SafeDispose.prototype.smash = function() {};

/**
 * @constructor
 * @inherits SafeDispose.burn
 */
function SecureFile() {
}
SecureFile.prototype.shred = function() {};
SecureFile.prototype.burn = SafeDispose.prototype.burn;

framework.addTo(
    "FileWatcher.Widget",
    /** @scope FileWatcher.Widget */
    {
        /** Set up the widget. */
        initialize: function(container, args) {
        }
    }
);

Builder.make(
    "Sorter",
    /** @scope Sorter.prototype */
    {
        /** Register a sorting function. */
        register: function(f) {
        }
    }
);

// will be treated by JsDoc Toolkit as if you'd written...
function Sorter() {
    this.register = function(f) {
    }
}

var Record = function() {
    return /** @scope Record */ {
        getRecord: function() {}
    };
}();

/**
 @namespace Holds all Filebox functionality.
 */
Filebox = {
    lookup: function() {
    },
    add: function() {
    },
    remove: function() {
    }
}

/**#@+
 @private
 @memberOf RecordSet
 */

/** Is the recordset locked? */
var locked = false;

/**
 Destroy a particular record.
 @param id The id of the record to destroy.
 */
function shred(id) {}

/**#@-*/


/**
 Is the recordset locked?
 @private
 @memberOf RecordSet
 */
var locked = false;

/**
 Destroy a particular record.
 @param id The id of the record to destroy.
 @private
 @memberOf RecordSet
 */
function shred(id) {}