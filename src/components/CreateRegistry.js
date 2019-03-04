import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import validator from "validator";
import axios from "axios";

class CreateRegistry extends Component {
    state = {
        registries: [],
        created: false
    };
    onRegistryFormChange = e => {
        const element = e.target;
        const { name, value } = element;
        const newState = {};
        newState[name] = value;
        this.setState(newState);
    };

    onRegistryFormSubmit = async event => {
        event.preventDefault();
        let newRegistry = {
            title: this.state.title,
            type: this.state.event,
            date: this.state.date,
            host_1: `${this.state.host1_firstname} ${
                this.state.host1_lastname
            }`,
            host_2: `${this.state.host2_firstname} ${
                this.state.host2_lastname
            }`,
            user_id: this.props.user.user_id
        };

        let registry = await axios.post("/api/event", newRegistry);
        let eventId = registry.data;

        this.setState({
            registries: newRegistry,
            created: true
        });

        this.props.getRegistryType(this.state.event);
        this.props.getEventId(eventId);

        // this.props.history.push("/registry");
    };

    validateForm = () => {
        class FormValidator {
            constructor(validations) {
                // validations is an array of form-specific validation rules
                this.validations = validations;
            }
            validate(state) {
                // iterate through the validation rules and construct
                // a validation object, and return it
                return validation;
            }
        }

        const validator = new FormValidator([rule1, rule2, rule3]);

        validator.isEmpty(""); // returns true
        validator.isEmpty("tim@home.com"); // returns false
        validator.isEmail("tim@home.com"); // returns true
        validator.isEmail("go away"); // return false
    };

    render() {
        if (this.state.created === true) {
            return <Redirect to="/registry" />;
        }
        return (
            <div className="create-registry-container">
                <h1>Create Registry</h1>
                <form
                    onSubmit={e => {
                        this.onRegistryFormSubmit(e);
                    }}
                    onChange={e => {
                        this.onRegistryFormChange(e);
                    }}
                >
                    <label for="event">Select Event Type</label>
                    <select name="event">
                        <option diabled>Select day</option>
                        <option value="wedding">Wedding</option>
                        <option value="baby shower">Baby Shower</option>
                    </select>
                    <div>
                        <label for="date">What date is your event</label>
                        <input name="date" placeholder="mm/dd/yy" />
                    </div>
                    <div>
                        <label for="title">Event Title</label>
                        <input
                            name="title"
                            placeholder="example: Bella and Andrew's wedding"
                        />
                    </div>

                    <div>
                        <label for="host1_firstname">Your name</label>
                        <input
                            name="host1_firstname"
                            placeholder="first name"
                        />
                        <input name="host1_lastname" placeholder="last name" />
                    </div>
                    <div>
                        <label for="host2_firstname">
                            Your partner's name (optional)
                        </label>
                        <input
                            name="host2_firstname"
                            placeholder="first name"
                        />
                        <input name="host2_lastname" placeholder="last name" />
                    </div>

                    <button>create my registry</button>
                </form>
            </div>
        );
    }
}

export default CreateRegistry;
