import React from 'react';
import { Backdrop } from '@mui/material';
import { Rings } from 'react-loader-spinner';
import theme from '@/styles/theme';

const LoadingSpinner = ({ isLoading }) => (
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={isLoading}
  >
    <Rings
      height="80"
      width="80"
      color={theme.palette.secondary.main}
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  </Backdrop>
);

export default LoadingSpinner;
