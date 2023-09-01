import React from 'react';
import { useTheme } from '@emotion/react';
import { ActionsWrapper, LeadingWrapper, StyledNavbar, StyledTitle } from './slyle';
function Navbar({ title = 'Minipen', leading, actions = [], fixed = true, centeredTitle = false }) {
    const theme = useTheme();
    console.log('navbar: useTheme: ', theme?.palette);
    return (React.createElement(StyledNavbar, { fixed: fixed },
        leading && React.createElement(LeadingWrapper, null, leading),
        React.createElement(StyledTitle, { center: centeredTitle }, title || ''),
        actions && actions?.length > 0 && (React.createElement(ActionsWrapper, null, actions.map((action, index) => (React.createElement(React.Fragment, { key: index }, action)))))));
}
export default Object.assign(Navbar, {
    Title: StyledTitle,
});
