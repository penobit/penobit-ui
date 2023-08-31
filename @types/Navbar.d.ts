export interface NavbarProps {
  fixed?: boolean
  centeredTitle?: boolean
  title?: string | React.ReactNode
  leading?: React.ReactNode
  actions?: React.ReactNode[]
}

export interface NavbarTitleProps {
  center?: boolean
}