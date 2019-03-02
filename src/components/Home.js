import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-page-img">
                    <img src={require("../images/weddinggiftlistideas.jpg")} />
                    {/* <div className="event-icons">
                        <div>
                            <img src={require("../images/stroller.svg")} />
                            <img src={require("../images/ring.png")} />
                        </div>
                        <button>Create registry</button>
                    </div> */}
                </div>
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

                <div className="img-container">
                    <div>
                        <img src="https://www-static.weddingbee.com/wp-content/uploads/2017/08/couple-with-wedding-gifts-268838.jpg" />
                    </div>
                    <div>
                        <img
                            src={require("../images/baby-shower-gifts-5.jpg")}
                        />
                    </div>
                    <Link to="/registry/create">
                        <button className="create-registry-btn">
                            Create Registry
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default Home;
