import React, { Component } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";

class SearchRegistry extends Component {
    state = {
        requestedEventId: null
    };

    handleFormChange = e => {
        const element = e.target;
        const { name, value } = element;
        this.setState({
            requestedEventId: value
        });
        this.props.getEventId(value);
    };
    render() {
        let { fetchRegistryItem } = this.props;

        return (
            <div className="form-container">
                <h1>Registries & Lists </h1>
                <h1>GIVE THE PERFECT GIFT</h1>
                <form
                    onChange={e => {
                        this.handleFormChange(e);
                    }}
                >
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="registry ID"
                        />
                        <Link to="/registry/search/:event_id">
                            <button>search</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchRegistry;
