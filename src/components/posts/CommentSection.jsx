import React, { useEffect, useRef, useState } from "react";
import { Notification, Placeholder, useToaster } from "rsuite";

const CommentSection = ({ postData }) => {
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toaster = useToaster();
  const newCommentRef = useRef(null);

  useEffect(() => {
    const getComments = async () => {
      setLoading(true);
      
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/comment?post=${postData._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to Load comment");
        }
        const data = await res.json();
        setComments(data["data"]);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching comments: ", error);
        setLoading(false);
      }
    };

    getComments();
  }, [postData._id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const newComment = newCommentRef.current.value;
    if (!newComment.trim()) {
      const errorMessage = (
        <Notification type="error" header="Empty Comment" closable>
          Please enter a comment before submitting.
        </Notification>
      );
      toaster.push(errorMessage, {
        placement: "topEnd",
        duration: 3 * 1000,
      });
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      const errorMessage = (
        <Notification type="error" header="Authorization Required" closable>
          You need to be logged in to add comment. Please log in to continue.
        </Notification>
      );
      toaster.push(errorMessage, {
        placement: "topEnd",
        duration: 3 * 1000,
      });
      return;
    }

    if (newComment.trim()) {
      setIsSubmitting(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/comment`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              post: postData._id,
              content: newComment,
            }),
          }
        );

        if (res.status == 401) {
          const errorMessage = (
            <Notification type="error" header="Session Expired" closable>
              Your session has expired. Please log in again to continue.
            </Notification>
          );
          toaster.push(errorMessage, {
            placement: "topEnd",
            duration: 3 * 1000,
          });
          return;
        }
        if (!res.ok) {
          throw new Error("Failed to comment");
        }
        const newCommentData = await res.json();

        setComments((prevComments) => [newCommentData.data, ...prevComments]);
        setIsSubmitting(false);

        newCommentRef.current.value = "";
        const successMessage = (
          <Notification type="success" header="Comment Created" closable>
            Your comment has been added successfully!
          </Notification>
        );
        toaster.push(successMessage, {
          placement: "topEnd",
          duration: 2 * 1000,
        });
      } catch (err) {
        console.log(err);
        setIsSubmitting(false);
        const errorMessage = (
          <Notification type="error" header="Comment Failed" closable>
            There was an error while commenting. Please try again later.
          </Notification>
        );
        toaster.push(errorMessage, {
          placement: "topEnd",
          duration: 3 * 1000,
        });
      }
    }
  };

  return (
    <div className="mt-8">
      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-800">Comments</h4>
        {loading ? (
          <Placeholder.Paragraph rows={3} />
        ) : (
          <div className="">
            {comments.length === 0 ? (
              <p>No comments yet.</p>
            ) : (
              comments?.map((comment) => (
                <div key={comment._id} className="flex gap-4 items-center mt-2">
                  <p className="m-0 p-0 font-bold">{comment.user.fullname}:</p>
                  <p className="m-0 p-0">{comment.content}</p>
                </div>
              ))
            )}
          </div>
        )}
        <form className="mt-4 flex items-center gap-4">
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Add a comment..."
            ref={newCommentRef}
          />
          <button
            type="submit"
            onClick={handleCommentSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Posting..." : "Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
