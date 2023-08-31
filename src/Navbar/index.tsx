import React from 'react'
import { useTheme } from '@emotion/react'
import { ActionsWrapper, LeadingWrapper, StyledNavbar, StyledTitle } from './slyle'

function Navbar({ title = 'Minipen', leading, actions = [], fixed = true, centeredTitle = false }: NavbarProps) {
  const theme: Partial<Theme> = useTheme()
  console.log('navbar: useTheme: ', theme?.palette)
  return (
    <StyledNavbar fixed={fixed}>
      {leading && <LeadingWrapper>{leading}</LeadingWrapper>}
      <StyledTitle center={centeredTitle}>{title || ''}</StyledTitle>
      {actions && actions?.length > 0 && (
        <ActionsWrapper>
          {actions.map((action, index) => (
            <React.Fragment key={index}>{action}</React.Fragment>
          ))}
        </ActionsWrapper>
      )}
    </StyledNavbar>
  )
}

export default Object.assign(Navbar, {
  Title: StyledTitle,
})
