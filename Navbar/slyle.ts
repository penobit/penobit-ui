import styled from "@emotion/styled"
import { NavbarProps, NavbarTitleProps } from "../@types/Navbar"

const StyledNavbar = styled.nav(({ fixed = true }: NavbarProps) => ({
  display: 'flex',
  alignItems: 'center',
  height: 'calc(50px + (env(safe-area-inset-top))*0.8)!important',
  backdropFilter: 'saturate(180%) blur(20px)',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  zIndex: 99,
  borderBottom: 'solid 1px rgba(0,0,0,.08)',
  ...(fixed && {
    position: 'fixed',
    inset: 0,
    bottom: 'unset',
  }),
}))

const StyledTitle = styled.h1(({ center = false }: NavbarTitleProps) => ({
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: center ? 'center' : 'flex-start',
  flexGrow: 1,
  fontWeight: 600,
  fontSize: 18,
}))

const LeadingWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: 'calc(50px + (env(safe-area-inset-top))*0.8)!important',
})

const ActionsWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: '0 15px',
})

export { StyledNavbar, StyledTitle, LeadingWrapper, ActionsWrapper }