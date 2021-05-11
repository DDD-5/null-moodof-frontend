import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import AppModal from '../AppModal';

const GlobalModalContainer = () => {
  const { modalType, modal } = useSelector((state) => state.app);
  return <AppModal modalType={modalType} modalProps={modal[modalType]} />;
};

export default memo(GlobalModalContainer);
