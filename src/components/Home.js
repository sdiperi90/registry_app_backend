import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchRegistry from "./SearchRegistry";

class Home extends Component {
    render() {
        let { getEventId, fetchRegistryItem } = this.props;
        console.log(fetchRegistryItem);
        return (
            <div>
                <div className="home-page-img">
                    <img src={require("../images/weddinggiftlistideas.jpg")} />
                </div>
                <SearchRegistry
                    fetchRegistryItem={fetchRegistryItem}
                    getEventId={getEventId}
                />

                <div>
                    <div className="create-registry-btn">
                        <Link to="/registry/create">
                            <button>Create Registry</button>
                        </Link>
                    </div>
                    <div className="img-container">
                        <div>
                            <img src="https://www-static.weddingbee.com/wp-content/uploads/2017/08/couple-with-wedding-gifts-268838.jpg" />
                        </div>
                        <div>
                            <img
                                src={require("../images/baby-shower-gifts-5.jpg")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
