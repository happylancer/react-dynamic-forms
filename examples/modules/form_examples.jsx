/** @jsx React.DOM */

"use strict";

var React   = require("react");
var _       = require("underscore");
var {Alert} = require("react-bootstrap");

var {FormMixin, TextEditGroup, Schema, Attr} = require("../../entry");

var schema = (
    <Schema>
        <Attr name="first_name" label="First name" placeholder="Enter first name" required={true} validation={{"type": "string"}}/>
        <Attr name="last_name" label="Last name" placeholder="Enter last name" required={true} validation={{"type": "string"}}/>
        <Attr name="email" label="Email" placeholder="Enter valid email address" validation={{"format": "email"}}/>
    </Schema>
);

var values = {
    "first_name": "Bill",
    "last_name": "Jones",
    "email": "bill@gmail.com"
};

/**
 * Edit a contact
 */
var ContactEditor = React.createClass({

    mixins: [FormMixin],

    displayName: "ContactEditor",

    getInitialState: function() {
        return {
            "loaded": false,
        };
    },

    componentDidMount: function() {
        var self = this;

        //Simulate ASYNC state update
        setTimeout(function() {
            self.setSchema(schema);
            self.setValues(values);
            self.setState({"loaded": true})
        }, 1500);
    },

    /**
     * Save the form
     */
    handleSubmit: function(e) {
        e.preventDefault();

        if (this.hasMissing()) {
            this.showRequiredOn();
            return;
        }

        this.props.onSubmit && this.props.onSubmit(this.getValues());

        return false;
    },

    render: function() {
        var disableSubmit = (this.errorCount() !== 0);
        var formStyle = {background: "#FAFAFA", padding: 10, borderRadius:5};

        if (this.state.loaded) {
            return (
                <form style={formStyle} noValidate className="form-horizontal" onSubmit={this.handleSubmit}>
                    <TextEditGroup attr={this.getAttr("first_name")} width={300} />
                    <TextEditGroup attr={this.getAttr("last_name")} width={300} />
                    <TextEditGroup attr={this.getAttr("email")} width={300} />

                    <input className="btn btn-default" type="submit" value="Submit" disabled={disableSubmit}/>
                </form>
            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
});

var FormExample = React.createClass({

    getInitialState: function() {
        return {
            data:  undefined
        };
    },

    handleSubmit: function(value) {
        this.setState({"data": value});
    },

    handleAlertDismiss: function() {
        this.setState({"data": undefined});
    },

    renderAlert: function() {
        if (this.state && this.state.data) {
            var firstName = this.state.data["first_name"];
            var lastName = this.state.data["last_name"];
            return (
                <Alert bsStyle="success" onDismiss={this.handleAlertDismiss} style={{margin: 5}}>
                    <strong>Success!</strong> {firstName} {lastName} was submitted.
                </Alert>
            );
        } else {
            return null;
        }
    },

    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Contact form</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <ContactEditor onSubmit={this.handleSubmit}/>
                    </div>
                    <div className="col-md-12">
                        {this.renderAlert()}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = FormExample;