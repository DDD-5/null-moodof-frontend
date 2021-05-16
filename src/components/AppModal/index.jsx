import React from 'react';
import ImageDetailModal from './ImageDetailModal';

const MODAL_COMPONENTS = {
  IMAGE_DETAIL_MODAL: ImageDetailModal,
};

const AppModal = (props) => {
  const { modalType, modalProps } = props;
  const SpecificModal = MODAL_COMPONENTS[modalType];

  return <SpecificModal {...modalProps} />;
};

export default AppModal;
