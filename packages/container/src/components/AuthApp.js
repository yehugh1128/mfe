import { mount } from 'auth/AuthApp';
import React from 'react';
import Common from './Common';

export default ({ onSignIn }) => {
    return <Common mount={mount} callback={onSignIn} />
}