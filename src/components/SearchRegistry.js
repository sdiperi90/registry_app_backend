import React, { Component } from "react";

class SearchRegistry extends Component {
    render() {
        return (
            <div className="form-container">
                <h1>Registries & Lists </h1>
                <h1>GIVE THE PERFECT GIFT</h1>
                <form>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="registry ID"
                        />
                        <button>search</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchRegistry;
