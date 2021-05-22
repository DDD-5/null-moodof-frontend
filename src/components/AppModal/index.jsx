import React from 'react';
import PhotoDetailModal from './PhotoDetailModal';
import GoTrashModal from './GoTrashModal';
import DeleteModal from './DeleteModal';
import RestoreModal from './RestoreModal';
import { MODAL_TYPE } from '../../constants';

const MODAL_COMPONENTS = {
  [MODAL_TYPE.PHOTO_DETAIL]: PhotoDetailModal,
  [MODAL_TYPE.GO_TRASH]: GoTrashModal,
  [MODAL_TYPE.DELETE]: DeleteModal,
  [MODAL_TYPE.RESTORE]: RestoreModal,
};

const AppModal = (props) => {
  const { modalType, modalProps } = props;
  const SpecificModal = MODAL_COMPONENTS[modalType];

  return <SpecificModal {...modalProps} />;
};

export default AppModal;
