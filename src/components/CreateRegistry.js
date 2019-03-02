import React, { Component } from "react";

class CreateRegistry extends Component {
    render() {
        return (
            <div>
                <h1>Create Registry</h1>
                <label for="event">Select Event Type</label>
                <select name="event">
                    <option diabled>Select day</option>
                    <option value="1">Wedding</option>
                    <option value="1">Baby Shower</option>
                </select>
            </div>
        );
    }
}

export default CreateRegistry;
