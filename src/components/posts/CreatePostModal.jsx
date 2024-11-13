import React, { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { HiCamera } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Modal } from "rsuite";
import "rsuite/Modal/styles/index.css";

const CreatePostModal = (props) => {
  const { isOpen, setIsOpen } = props;
  console.log(isOpen);
  const imgRef = useRef(null);
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const handleImageUpload = (e) => {
    e.preventDefault();
  };

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImgUrl(URL.createObjectURL(file));
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      backdrop={true}
      className="bg-red-200 shadow-md w-[90%] max-w-lg p-6 rounded-md absolute top-40 left-1/2 -translate-x-1/2"
    >
      <Modal.Header>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <form className="flex flex-col items-center justify-center gap-2 outline-none">
        <input
          type="file"
          ref={imgRef}
          className="hidden outline-none focus:outline-none"
          onChange={handleImageInput}
          accept="image/*"
        />
        {image ? (
          <img
            src={imgUrl}
            alt="selected image"
            className="h-44 w-44 object-contain"
          />
        ) : (
          <HiCamera
            className="text-7xl text-gray-500 cursor-pointer hover:brightness-110"
            onClick={() => imgRef.current.click()}
          />
        )}
        <input
          placeholder="Enter your caption..."
          maxLength="150"
          className="bg-white rounded-lg text-gray-800 w-[80%] focus:ring-0 outline-none text-center p-4 my-2"
          type="text"
        />
        <button
          type="submit"
          onClick={handleImageUpload}
          className="py-2 px-4 bg-red-600 disabled:bg-gray-400 text-white rounded-lg disabled:cursor-not-allowed hover:brightness-110 disabled:hover:brightness-100"
        >
          Upload Post
        </button>
        <div className="absolute top-4 right-4 flex flex-row items-center gap-2">
          {image && (
            <FaTrash
              className="cursor-pointer text-lg hover:text-red-600 transition duration-300"
              onClick={() => {
                setImage(null);
                setImgUrl(null);
              }}
            />
          )}
          <IoClose
            className="cursor-pointer text-2xl hover:text-red-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </form>
    </Modal>
  );
};

export default CreatePostModal;
