import React from 'react'
import { NavbarProps } from '../@types/Navbar'
import { ActionsWrapper, LeadingWrapper, StyledNavbar, StyledTitle } from './slyle'

function Navbar({ title = 'Minipen', leading, actions = [], fixed = true, centeredTitle = false }: NavbarProps) {
  return (
    <StyledNavbar>
      {leading && <LeadingWrapper>{leading}</LeadingWrapper>}
      <StyledTitle center={centeredTitle}>{title}</StyledTitle>
      {actions && actions?.length > 0 && <ActionsWrapper>{actions}</ActionsWrapper>}
    </StyledNavbar>
  )
}

export default Object.assign(Navbar, {
  Title: StyledTitle,
})
