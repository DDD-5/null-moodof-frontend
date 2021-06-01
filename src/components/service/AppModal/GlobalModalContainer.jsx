import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import AppModal from '.';

const GlobalModalContainer = () => {
  const { modals } = useSelector((state) => state.app);

  return modals.map(
    (m, index) => (
      <AppModal
        key={index}
        modalType={m.modalType}
        modalProps={m.modalProps}
      />
    ),
  );
};

export default memo(GlobalModalContainer);
