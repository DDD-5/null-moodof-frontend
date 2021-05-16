import React from 'react';
import ImageDetailModal from './ImageDetailModal';
import GoTrashModal from './GoTrashModal';
import { MODAL_TYPE } from '../../constants';

const MODAL_COMPONENTS = {
  [MODAL_TYPE.IMAGE_DETAIL_MODAL]: ImageDetailModal,
  [MODAL_TYPE.GO_TRASH_MODAL]: GoTrashModal,
};

const AppModal = (props) => {
  const { modalType, modalProps } = props;
  const SpecificModal = MODAL_COMPONENTS[modalType];

  return <SpecificModal {...modalProps} />;
};

export default AppModal;
