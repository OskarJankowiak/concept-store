import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import ProductModalProvider from 'providers/ProductModalProvider';
import MainTemplate from 'templates/MainTemplate';
import routes from 'routes';
import Home from './Home';
import WishListPage from './WishListPage';
import Clothes from './Clothes';
import DetailPage from './DetailPage';
import CheckoutPage from './CheckoutPage';

const SpecialModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Root = () => {
  return (
    <Router>
      <ModalProvider backgroundComponent={SpecialModalBackground}>
        <div className="App">
          <MainTemplate>
            <ProductModalProvider>
              <Switch>
                <Route exact path={routes.home} component={Home} />
                <Route path={routes.wishlist} component={WishListPage} />
                <Route exact path={routes.clothes} component={Clothes} />
                <Route path={routes.detailClothes} component={DetailPage} />
                <Route path={routes.checkout} component={CheckoutPage} />
              </Switch>
            </ProductModalProvider>
          </MainTemplate>
        </div>
      </ModalProvider>
    </Router>
  );
};

export default Root;
