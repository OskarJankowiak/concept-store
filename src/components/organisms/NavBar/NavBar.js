import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import routes from 'routes'
import { UIContext } from 'contexts/GlobalUIContext'
import styled from 'styled-components'
import baseIconStyle from 'components/atoms/ExternalIcon/ExternalIcon'
import { ReactComponent as Logo } from 'assets/svgs/Logo.svg'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import NotesIcon from '@material-ui/icons/Notes'
import useScrollPos from 'hooks/useScrollPos'

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.grey200};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
  z-index: ${({ theme }) => theme.zIndex.level9};
  background-color: ${({ onScroll, theme }) =>
    onScroll ? theme.white : 'transparent'};
  transition: background-color 0.2s 0.1s ease;
`

const Nav = styled.nav`
  padding: 0 ${({ theme }) => theme.layout.mobileSidesPadding};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

const StyledLogo = styled(Logo)`
  width: 170px;
`

const StyledFavoriteIcon = styled(FavoriteIcon)`
  ${baseIconStyle}
`

const BasketIcon = styled(ShoppingBasketIcon)`
  ${baseIconStyle}
`

const HamburgerIcon = styled(NotesIcon)`
  ${baseIconStyle}
`

const NavBar = () => {
  const {
    setOpenSidePanel,
    panelTypes: [menu, shopingBasket],
  } = useContext(UIContext)

  const [scrollYPos] = useScrollPos(window)

  return (
    <Wrapper onScroll={scrollYPos > 150}>
      <Nav>
        <StyledLink to={routes.home}>
          <StyledLogo />
        </StyledLink>
        <StyledLink to={routes.whishlist}>
          <StyledFavoriteIcon />
        </StyledLink>
        <BasketIcon onClick={() => setOpenSidePanel(shopingBasket)} />
        <HamburgerIcon onClick={() => setOpenSidePanel(menu)} />
      </Nav>
    </Wrapper>
  )
}

export default NavBar
