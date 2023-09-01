import styled from '@emotion/styled';
const NAVBAR_HEIGHT_MOBILE = 50;
const NAVBAR_HEIGHT_DESKTOP = 60;
const StyledNavbar = styled.nav(({ theme, fixed = true }) => ({
    display: 'flex',
    alignItems: 'center',
    height: `calc(${NAVBAR_HEIGHT_MOBILE}px + (env(safe-area-inset-top))*0.8)`,
    backdropFilter: 'saturate(180%) blur(20px)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    zIndex: 99,
    borderBottom: 'solid 1px rgba(0,0,0,.08)',
    '@media (min-width: 767px)': {
        height: `calc(${NAVBAR_HEIGHT_DESKTOP}px + (env(safe-area-inset-top))*0.8)!important`,
    },
    ...(fixed && {
        position: 'fixed',
        inset: 0,
        bottom: 'unset',
    }),
}));
const StyledTitle = styled.h1(({ center = false }) => ({
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: center ? 'center' : 'flex-start',
    flexGrow: 1,
    fontWeight: 600,
    fontSize: 18,
}));
const LeadingWrapper = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: `calc(${NAVBAR_HEIGHT_MOBILE}px + (env(safe-area-inset-top))*0.8)!important`,
});
const ActionsWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    padding: '0 15px',
}));
export { StyledNavbar, StyledTitle, LeadingWrapper, ActionsWrapper };
