/** @jsx React.DOM */

var React = require("react/addons");
var _ = require("underscore");

var {Chooser} = require("../../entry");

var animalMap = {1: "dog", 2: "duck", 3: "cat", 4: "donkey",
                 5: "fish", 6: "hedgehog", 7: "banana slug"};

var ChooserExamples = React.createClass({

    getInitialState: function() {

        return {
            animalList: _.map(animalMap, function(value, key) {
                return {id: key, label: value}
            }),
            selection: "",
            missingCount: 0,
        };
    },

    handleChange: function(attr, value) {
        console.log("Handle change", attr, value);
        this.setState({"selection": value});
    },

    handleMissingCountChange: function(attr, count) {
        this.setState({"missingCount": count});
    },

    render: function() {
        console.log(this.state.animalList);
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Chooser Examples</h3>
                        The Chooser widget wraps the combobox and simple pulldown of react-widgets.<br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                    <h4>Chooser</h4>

                    <p />
                    Simple chooser:
                    <Chooser initialChoiceList={this.state.animalList}/>

                    <p />
                    Simple chooser sorted:
                    <Chooser initialChoiceList={this.state.animalList} sorted={true}/>


                    <p />
                    Chooser with initial choice:
                    <Chooser initialChoice={4} initialChoiceList={this.state.animalList}/>

                    <p />
                    Chooser with initial choice and sorted:
                    <Chooser initialChoice={4} initialChoiceList={this.state.animalList} sorted={true}/>


                    <p />
                    Chooser disabled:
                    <Chooser initialChoice={2} initialChoiceList={this.state.animalList} disabled={true}/>

                    <p />
                    Chooser with search disabled:
                    <Chooser initialChoice={3} initialChoiceList={this.state.animalList} disableSearch={true}/>

                    <p />
                    Chooser with a required value:
                    <Chooser initialChoiceList={this.state.animalList} required={true} showRequired={true} allowSingleDeselect={true} onMissingCountChange={this.handleMissingCountChange}/>
                    Missing count: {this.state.missingCount}

                    <p />
                    Chooser with single deselect:
                    <Chooser initialChoice={4} initialChoiceList={this.state.animalList} disableSearch={true} allowSingleDeselect={true}/>

                    <p />
                    Chooser onChange callback:
                    <Chooser initialChoiceList={this.state.animalList} onChange={this.handleChange} sorted={true}/>
                    Chosen: {this.state.selection} ({animalMap[this.state.selection]})
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = ChooserExamples;