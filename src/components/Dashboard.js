import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    render() {
        let { user, events, getEventId } = this.props;
        return (
            <div className="dashboard">
                {events.length == 0 ? (
                    <div>
                        <p>You dont have any registry</p>
                        <Link to="/registry/create">
                            <button className="create-registry-btn">
                                Create Registry
                            </button>
                        </Link>
                    </div>
                ) : (
                        events.map(event => {
                            return (
                                <Link to={`/events/${event._id}`}>
                                    <div
                                        className="registry-list"
                                        onClick={e => {
                                            getEventId(event._id);
                                        }}
                                    >
                                        <h1>{event.type}</h1> <h2>{event.title}</h2>
                                        <p>on {event.date}</p>
                                    </div>
                                </Link>
                            );
                        })
                    )}
            </div>
        );
    }
}

export default Dashboard;
