import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import AppModal from '../AppModal';

const GlobalModalContainer = () => {
  const { modal } = useSelector((state) => state.app);

  return modal.map(
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
