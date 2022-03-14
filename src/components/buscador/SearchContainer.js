import React, { useState } from 'react';
import {
    CardContainer,
    RankingNumber,
    TrackTitle,
    TrackImage,
    ViewIcon,
    SafeCard,
} from '..//Styled';
import { LikeButton, OptionListButton } from '../index';

export const CardInfo = ({ response, index }) => {
    return (
        <Text>{response.map(response.TrackImage)}</Text>
    );
};