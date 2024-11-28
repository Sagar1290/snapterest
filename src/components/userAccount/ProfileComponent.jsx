import React from "react";

const ProfileComponent = () => {
  return (
    <section className="w-full bg-red-200 py-24">
      <div className="w-full lg:w-3/4 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="Profile image of Jenna Stones"
                    src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                  />
                </div>
              </div>
              <div className="w-full px-4 text-center mt-20">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      22
                    </span>
                    <span className="text-sm text-blueGray-400">Friends</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      10
                    </span>
                    <span className="text-sm text-blueGray-400">Photos</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                      89
                    </span>
                    <span className="text-sm text-blueGray-400">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                Jenna Stones
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna, the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy, writes,
                    performs, and records all of his own music, giving it a
                    warm, intimate feel with a solid groove structure. An artist
                    of considerable range.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComponent;

/*
{
  name: "John Doe",
  username: "john_doe_photography",
  email: "johndoe@example.com",
  phone: "123-456-7890",
  location: "New York, USA",
  bio: "Passionate photographer specializing in nature and wildlife photography.",
  portfolioLink: "https://www.johndoephotography.com",
  instagram: "@john_doe_photography",
  availableForWork: true,
  hourlyRate: 150,
  gear: ["Canon EOS 5D Mark IV", "Canon 24-70mm f/2.8", "DJI Mavic Pro"],
  editingSoftware: ["Adobe Lightroom", "Photoshop"],
  interests: ["Landscape Photography", "Drone Photography"],
  notifications: { comments: true, newFollowers: true, challenges: false },
  subscriptionPlan: "Pro",
}

Photography Portfolio Details
Bio/Description: A short personal or professional bio to nshowcase the user’s photography style, background, or experience.
Specialization/Style: Ask the user to select or describe their photography style (e.g., portrait, landscape, street, wildlife, event photography).
Portfolio/Featured Work: Option for the user to upload a few of their best photos or provide a link to their personal website or social media profiles (e.g., Instagram, Flickr, Behance).
Professional Information (for photographers offering services)
Availability: Whether the photographer is available for freelance work, bookings, or collaborations.
Hourly/Day Rate: If the photographer is offering paid services, you can ask for their pricing model.
Past Projects/Clients: A section where the user can list past projects or clients they've worked with.
Reviews/Testimonials: A space to feature reviews or recommendations from past clients.
4. Social Media and Website Links
Website/Portfolio Link: To give users a place to showcase their full portfolio or website.
Social Media Handles: Links to Instagram, Twitter, Facebook, or other photography-related social media platforms.
YouTube Channel/Vlog: If the photographer shares tutorials, vlogs, or behind-the-scenes content, a YouTube link could be helpful.

*/
