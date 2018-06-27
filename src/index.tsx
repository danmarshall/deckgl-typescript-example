/// <reference types="deckgl-typings" />

import { DeckGL, OrbitView, PolygonLayer, COORDINATE_SYSTEM } from 'deck.gl';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Example extends React.Component {

    render() {
        return <DeckGL
            views={[
                new OrbitView()
            ]}
            viewState={{
                distance: 50,
                rotationX: 64,
                rotationOrbit: 72,
                fov: 50,
                zoom: 0.2
            }}
            layers={[
                new PolygonLayer({
                    coordinateSystem: COORDINATE_SYSTEM.IDENTITY,
                    data: [
                        {
                            polygon: [[0, 0], [100, 0], [0, 100]],
                            elevation: 50,
                            fillColor: [255, 0, 0]
                        }
                    ],
                    extruded: true,
                    stroked: false
                })
            ]}
        />;
    }
}

ReactDOM.render(React.createElement(Example), document.getElementById('app'));
