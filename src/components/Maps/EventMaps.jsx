import React, { useState } from 'react';
import { useEffect } from 'react';

import dogMarker from '../../../public/market.jpg'

const EventMaps = ({ event }) => {

    const mapsKey = import.meta.env.VITE_APP_GOOGLE_KEY

    const containerStyle = {
        width: '500px',
        height: '500px',
    };

    const center = {
        lat: event.location?.coordinates[1],
        lng: event.location?.coordinates[0]
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, [center], {
        delay: 500
    });

    const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center,
            zoom: 15,
        });

        new window.google.maps.Marker({
            position: center,
            map,
            icon: {
                url: dogMarker,
                scaledSize: new window.google.maps.Size(40, 40),
            },
        });
    }
    return (<div id="map" style={containerStyle} />)
}
export default EventMaps