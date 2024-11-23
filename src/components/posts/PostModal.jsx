import React, { useState } from "react";
import { Modal } from "rsuite";

const PostModal = (props) => {
  const { showPostModal, setShowPostModal, postData } = { ...props };
  const [showCaption, setShowCaption] = useState(false);
  const [comments, setComments] = useState();

  const handleClose = () => setShowPostModal(false);

  return (
    <Modal
      size={"calc(100% - 120px)"}
      open={showPostModal}
      onClose={handleClose}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title>Create Post Modal</Modal.Title>
      </Modal.Header>
      PostModal
    </Modal>
  );
};

export default PostModal;
