import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Geocode from "react-geocode";

const MapsAutocomplete = ({ eventData, setEventData }) => {

    const apiKey = `${import.meta.env.VITE_APP_GOOGLE_KEY}`

    const [value, setValue] = useState()
    Geocode.setApiKey(`${apiKey}`)

    value && Geocode
        .fromAddress(value.label)
        .then((response) => {
            const { lat, lng } = response.results[0].geometry.location
            setEventData({ ...eventData, location: { type: 'Point', coordinates: [lng, lat] }, address: value.label })
            setValue(undefined)
        },
            (error) => {
                console.error(error);
            }
        );

    return (
        <div>
            <GooglePlacesAutocomplete
                apiKey={`${apiKey}`}
                selectProps={{
                    value,
                    onChange: setValue,
                }}
            />
        </div>
    );
}
export default MapsAutocomplete