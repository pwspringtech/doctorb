import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = process.env.TOKEN || 'pk.eyJ1Ijoid2dyaWZmaW4xMyIsImEiOiJjanNmZThqZTgwNTY2NDR0N2FpcWhiN21yIn0.z913-AGo9Vpf6OLehajKgQ';

class Map extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mapRendered: false,
            viewport: {
                height: '100%',
                width: '100%',
                latitude: 40.742,
                longitude: -73.9731,
                zoom: 14
            }
        }
    }

    componentDidMount() {
        this.setState({ mapRendered: true })
    }

    _onViewportChange = viewport => {
        // Prevents the map changing before it is fully rendered by React
        if (this.state.mapRendered === true) {
            this.setState({viewport});
        }
    }

    render() {
        return (
        <ReactMapGL
            {...this.state.viewport}
            onViewportChange={this._onViewportChange}
            mapboxApiAccessToken={TOKEN}
            mapOptions={{style: 'mapbox://styles/wgriffin13/cjz4lr6nr01lb1co0n3j94lok'}}
            attributionControl={false}
        />
        );
    }
}

export default Map
