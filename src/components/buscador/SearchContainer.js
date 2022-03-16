import React from 'react';

export const CardInfo = ({ response, index }) => {
    return (
        <Text>{response.map(response.TrackImage)}</Text>
    );
};