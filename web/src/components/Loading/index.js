import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styled';

export default function Loading({ isLoading }){
    if(!isLoading) return <></>;
    return (
        <Container>
            <div />
            <span>Loading...</span>
        </Container>
    );
}

Loading.defaultProps = {
    isLoding: false,
}

Loading.propTypes = {
    isLoading: PropTypes.bool
}