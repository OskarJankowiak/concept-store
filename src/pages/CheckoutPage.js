import React from 'react';
import styled from 'styled-components';
import PageHeader from 'components/atoms/PageHeader/PageHeader';
import CheckoutTemplate from 'templates/CheckoutTemplate';
import TransitionProvider from 'providers/TransitionProvider';

const Wrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto 120px;
  padding: 80px 20px 0px;
  width: 100%;

  ${({ theme }) => theme.mq.bigTablet} {
    padding: 80px 40px 0;
  }
`;

const CheckoutPage = () => {
  return (
    <TransitionProvider>
      <Wrapper>
        <PageHeader title="Checkout" />
        <CheckoutTemplate />
      </Wrapper>
    </TransitionProvider>
  );
};

export default CheckoutPage;
