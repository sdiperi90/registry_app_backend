import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import { apiUrl } from '../config'
class CreateRegistry extends Component {
    state = {
        registries: [],
        created: false,
        event: null,
        date: null,
        title: null,
        host1_firstname: null,
        host1_lastname: null,
        host2_firstname: null,
        host2_lastname: null,
        error: false
    };

    componentDidMount() {
        console.log(this.state);
    }
    onRegistryFormChange = e => {
        const element = e.target;
        const { name, value } = element;
        const newState = {};
        newState[name] = value;
        console.log(newState);
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

        let registry = await axios.post(`${apiUrl}/api/event`, newRegistry);
        let eventId = registry.data;

        this.setState({
            registries: newRegistry,
            created: true
        });

        this.props.getRegistryType(this.state.event);
        this.props.getEventId(eventId);
    };

    validateForm = () => { };

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
                    <div>
                        <label for="event">Select Event Type</label>
                        <select name="event" required>
                            <option value="">None</option>
                            <option value="wedding">Wedding</option>
                            <option value="baby shower">Baby Shower</option>
                        </select>
                    </div>
                    <div>
                        <label for="date">What date is your event</label>
                        <input name="date" placeholder="mm/dd/yy" required />
                    </div>
                    <div>
                        <label for="title">Event Title</label>
                        <input
                            required
                            name="title"
                            placeholder="example: Bella and Andrew's wedding"
                        />
                    </div>

                    <div>
                        <label for="host1_firstname">Your name</label>
                        <input
                            required
                            name="host1_firstname"
                            placeholder="first name"
                        />
                        <input
                            required
                            name="host1_lastname"
                            placeholder="last name"
                        />
                    </div>
                    <div>
                        <label for="host2_firstname">
                            Your partner's name (optional)
                        </label>
                        <input
                            required
                            name="host2_firstname"
                            placeholder="first name"
                        />
                        <input
                            required
                            name="host2_lastname"
                            placeholder="last name"
                        />
                    </div>

                    <button>create my registry</button>
                </form>
            </div>
        );
    }
}

export default CreateRegistry;
