import React from 'react';
import { useDispatch } from 'react-redux';
import { action as appActions } from '../../store/app/slices';
import { MODAL_TYPE } from '../../constants';

const ImageDetailModal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(appActions.closeModal({
      modalType: MODAL_TYPE.IMAGE_DETAIL_MODAL,
    }));
  };

  return (
    <div css={{ position: 'absolute' }}>
      <span>ImageDetailModal</span>
      <span onClick={handleCloseModal}>close</span>
    </div>
  );
};

export default ImageDetailModal;
