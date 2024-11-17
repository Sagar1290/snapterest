import React, { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { HiCamera } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Modal, Notification, Progress, useToaster } from "rsuite";
import "rsuite/Modal/styles/index.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, app } from "@/firebase.config";

const CreatePostModal = (props) => {
  const { isOpen, setIsOpen } = props;

  const storageRef = ref(storage);
  const imgRef = useRef(null);
  const captionInputRef = useRef(null);
  const uploadTaskRef = useRef(null);
  const toaster = useToaster();
  const [image, setImage] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadingPercentage, setUploadingPercentage] = useState(0);

  const handleImageUpload = (e) => {
    e.preventDefault();

    if (!image) {
      const errorMessage = (
        <Notification type="error" header="Select File to Upload" closable>
          Please select an image to upload before creating a post.
        </Notification>
      );
      toaster.push(errorMessage, {
        placement: "topEnd",
      });
      return;
    }

    const imageStoreRef = ref(storageRef, image.name);
    const uploadTask = uploadBytesResumable(imageStoreRef, image);
    uploadTaskRef.current = uploadTask;
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setIsUploading(true);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadingPercentage(progress.toFixed(1)); // Update progress value
      },
      (error) => {
        console.log(error);
        setIsUploading(false);
        if (error.code === "storage/unauthorized") {
          const errorMessage = (
            <Notification type="error" header="Size Limit Exceeded" closable>
              The image must be under 5 MB. If it's already smaller, please try
              again later.
            </Notification>
          );

          toaster.push(errorMessage, {
            placement: "topEnd",
          });
          return;
        }
        if (error.code === "storage/cancelled") {
          const errorMessage = (
            <Notification type="error" header="Upload Cancelled" closable>
              The upload was cancelled by User.
            </Notification>
          );

          toaster.push(errorMessage, {
            placement: "topEnd",
            duration: 2 * 1000,
          });
          return;
        }
        const errorMessage = (
          <Notification type="error" header="Upload Failed" closable>
            There was an error uploading the image. Please try again.
          </Notification>
        );
        toaster.push(errorMessage, {
          placement: "topEnd",
          duration: 2 * 1000,
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          createPost(downloadURL);
        });
      }
    );
    setIsUploading(false);
  };

  const getUserCountry = async () => {
    try {
      const response = await fetch("https://ipapi.co/json");
      if (!response.ok) {
        throw new Error("Failed to fetch location");
      }
      const data = await response.json();
      return `${data.region}, ${data.country_name}`;
    } catch (error) {
      console.error("Failed to fetch current location:", error);
    }
  };

  const createPost = async (url) => {
    const token = localStorage.getItem("token");

    if (!token) {
      const errorMessage = (
        <Notification type="error" header="Authorization Required" closable>
          You need to be logged in to create a post. Please log in to continue.
        </Notification>
      );
      toaster.push(errorMessage, {
        placement: "topEnd",
        duration: 3 * 1000,
      });
      return;
    }

    const location = await getUserCountry();
    const postData = {
      imageURL: url,
      caption: captionInputRef.current.value,
      location: location ?? null,
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/createPost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const createdPost = await response.json();
      setIsOpen(false);
      setImage(null);
      setImgUrl(null);
      captionInputRef.current.value = "";

      const successMessage = (
        <Notification type="success" header="Post Created" closable>
          Your post has been created successfully!
        </Notification>
      );
      toaster.push(successMessage, {
        placement: "topEnd",
        duration: 2 * 1000,
      });
    } catch (err) {
      console.log(err);
      const errorMessage = (
        <Notification type="error" header="Post Creation Failed" closable>
          There was an error creating your post. Please try again later.
        </Notification>
      );
      toaster.push(errorMessage, {
        placement: "topEnd",
        duration: 3 * 1000,
      });
    }
  };

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImgUrl(URL.createObjectURL(file));
    }
  };

  const cancelUpload = (e) => {
    e.preventDefault();
    if (uploadTaskRef.current) {
      uploadTaskRef.current.cancel();
      console.log("Upload canceled");
      setIsUploading(false);
    }
  };

  const progressLineStyle = {
    width: 200,
    display: "inline-block",
    marginRight: 10,
  };

  return (
    <Modal open={isOpen} backdrop={true}>
      <Modal.Header closeButton={false}>
        <Modal.Title>Create Post Modal</Modal.Title>
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
          ref={captionInputRef}
          placeholder="Enter your caption..."
          maxLength="150"
          className="bg-white rounded-lg text-gray-800 w-[80%] focus:ring-0 outline-none text-center p-4 my-2"
          type="text"
        />
        <button
          type="submit"
          onClick={handleImageUpload}
          disabled={isUploading}
          className="py-2 px-4 bg-red-600 disabled:bg-gray-400 text-white rounded-lg disabled:cursor-not-allowed hover:brightness-110 disabled:hover:brightness-100"
        >
          {isUploading ? "Uploading... " : "Upload Post"}
        </button>
        {isUploading && (
          <div className="flex flex-row gap-4 w-90% justify-center items-center">
            <div style={progressLineStyle}>
              <Progress.Line
                percent={parseFloat(uploadingPercentage)}
                status="active"
              />
            </div>
            <button onClick={cancelUpload}>Canel</button>
          </div>
        )}
        <div className="absolute top-4 right-4 flex flex-row items-center gap-2">
          {image && (
            <FaTrash
              className="cursor-pointer text-lg hover:text-red-600 transition duration-300"
              onClick={() => {
                setImage(null);
                setImgUrl(null);
                captionInputRef.current.value = "";
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
