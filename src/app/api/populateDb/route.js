import Post from "@/models/Post.model";
import { User } from "@/models/User.model";

const userNames = [
  "Aryan Sharma",
  "Ayesha Khan",
  "Rohan Patel",
  "Simran Verma",
  "Raj Malhotra",
  "Priya Kapoor",
  "Arjun Desai",
  "Neha Singh",
  "Karan Mehta",
  "Sanya Gupta",
  "Ishaan Joshi",
  "Reena Dubey",
  "Vikram Reddy",
  "Pooja Bhatt",
  "Manish Yadav",
  "Ananya Sharma",
  "Amit Soni",
  "Tanya Mishra",
  "Abhinav Kumar",
  "Nikita Rao",
  "Olivia Anderson",
  "Liam Rodriguez",
  "Sophia Taylor",
  "Ethan Harris",
  "Ava Wilson",
  "James Brown",
  "Mia Johnson",
  "Lucas Martinez",
  "Charlotte Lee",
  "Henry White",
  "Amelia Clark",
  "Benjamin King",
  "Isabella Scott",
  "Alexander Adams",
  "Grace Parker",
  "Daniel Evans",
  "Harper Baker",
  "Matthew Carter",
  "Zoe Mitchell",
  "Jack Nelson",
];

const imageURLS = [
  "https://picsum.photos/id/11/2500/1667",
  "https://picsum.photos/id/12/2500/1667",
  "https://picsum.photos/id/13/2500/1667",
  "https://picsum.photos/id/14/2500/1667",
  "https://picsum.photos/id/15/2500/1667",
  "https://picsum.photos/id/16/2500/1667",
  "https://picsum.photos/id/17/2500/1667",
  "https://picsum.photos/id/18/2500/1667",
  "https://picsum.photos/id/19/2500/1667",
  "https://picsum.photos/id/20/3670/2462",
  "https://picsum.photos/id/22/4434/3729",
  "https://picsum.photos/id/23/3887/4899",
  "https://picsum.photos/id/24/4855/1803",
  "https://picsum.photos/id/25/5000/3333",
  "https://picsum.photos/id/26/4209/2769",
  "https://picsum.photos/id/27/3264/1836",
  "https://picsum.photos/id/28/4928/3264",
  "https://picsum.photos/id/29/4000/2670",
  "https://picsum.photos/id/30/1280/901",
  "https://picsum.photos/id/32/4032/3024",
  "https://picsum.photos/id/33/5000/3333",
  "https://picsum.photos/id/34/3872/2592",
  "https://picsum.photos/id/35/2758/3622",
  "https://picsum.photos/id/36/4179/2790",
  "https://picsum.photos/id/37/2000/1333",
  "https://picsum.photos/id/42/3456/2304",
  "https://picsum.photos/id/43/1280/831",
  "https://picsum.photos/id/44/4272/2848",
  "https://picsum.photos/id/45/4592/2576",
  "https://picsum.photos/id/46/3264/2448",
  "https://picsum.photos/id/47/4272/2848",
  "https://picsum.photos/id/49/1280/792",
  "https://picsum.photos/id/50/4608/3072",
  "https://picsum.photos/id/51/5000/3333",
  "https://picsum.photos/id/54/3264/2176",
  "https://picsum.photos/id/55/4608/3072",
  "https://picsum.photos/id/57/2448/3264",
  "https://picsum.photos/id/58/1280/853",
  "https://picsum.photos/id/59/2464/1632",
  "https://picsum.photos/id/60/1920/1200",
  "https://picsum.photos/id/61/3264/2448",
  "https://picsum.photos/id/62/2000/1333",
  "https://picsum.photos/id/64/4326/2884",
  "https://picsum.photos/id/65/4912/3264",
  "https://picsum.photos/id/66/3264/2448",
  "https://picsum.photos/id/67/2848/4288",
  "https://picsum.photos/id/68/4608/3072",
  "https://picsum.photos/id/69/4912/3264",
  "https://picsum.photos/id/70/3011/2000",
  "https://picsum.photos/id/71/5000/3333",
  "https://picsum.photos/id/74/4288/2848",
  "https://picsum.photos/id/75/1999/2998",
  "https://picsum.photos/id/76/4912/3264",
  "https://picsum.photos/id/77/1631/1102",
  "https://picsum.photos/id/78/1584/2376",
  "https://picsum.photos/id/79/2000/3011",
  "https://picsum.photos/id/81/5000/3250",
  "https://picsum.photos/id/82/1500/997",
  "https://picsum.photos/id/83/2560/1920",
  "https://picsum.photos/id/84/1280/848",
  "https://picsum.photos/id/85/1280/774",
  "https://picsum.photos/id/87/1280/960",
  "https://picsum.photos/id/88/1280/1707",
  "https://picsum.photos/id/90/3000/1992",
];

const userPhotos = [
  "https://randomuser.me/api/portraits/lego/1.jpg",
  "https://randomuser.me/api/portraits/lego/2.jpg",
  "https://randomuser.me/api/portraits/lego/3.jpg",
  "https://randomuser.me/api/portraits/lego/4.jpg",
  "https://randomuser.me/api/portraits/lego/5.jpg",
  "https://randomuser.me/api/portraits/lego/6.jpg",
  "https://randomuser.me/api/portraits/lego/7.jpg",
  "https://randomuser.me/api/portraits/lego/8.jpg",
  "https://randomuser.me/api/portraits/lego/9.jpg",
];

const photographyQuotes = [
  "A photograph is the pause button of life.",
  "Photography is the art of frozen time… the ability to store emotion and feelings within a frame.",
  "A camera is a save button for the minds eye.",
  "Taking pictures is savoring life intensely, every hundredth of a second.",
  "In photography, there are no shadows that cannot be illuminated.",
  "The best camera is the one that's with you.",
  "Photography is the only language that can be understood anywhere in the world.",
  "A picture is a poem without words.",
  "Photography is the story I fail to put into words.",
  "Life is like a camera; focus on what’s important, capture the good times, develop from the negatives, and if things don’t work out, take another shot.",
  "The camera sees more than the eye, so why not trust it?",
  "Photography is the art of making memories tangible.",
  "To me, photography is an art of observation. It’s about finding something interesting in an ordinary place.",
  "The beauty of life is captured through the lens of a camera.",
  "Every photograph tells a story, but some speak louder than others.",
  "A good snapshot keeps a moment from running away.",
  "Through the lens, we capture time and transform it into eternity.",
  "Photography helps people to see.",
  "The eye should learn to listen before it looks.",
  "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… it remembers little things, long after you have forgotten everything.",
  "You don’t take a photograph, you make it.",
  "A camera is a tool for learning how to see without a camera.",
  "The picture that you took with your camera is the imagination you want to create with reality.",
  "You don’t make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas.",
  "Photography is about finding beauty in unexpected places.",
  "In photography, there is a reality so subtle that it becomes more real than reality.",
  "The best thing about a picture is that it never changes, even when the people in it do.",
  "Photography is a love affair with life.",
  "The lens is the window to the soul of the world.",
  "A photograph can speak louder than a thousand words.",
];

const randomLocations = [
  "New York, USA",
  "Tokyo, Japan",
  "Paris, France",
  "Sydney, Australia",
  "London, United Kingdom",
  "Berlin, Germany",
  "Rio de Janeiro, Brazil",
  "Cape Town, South Africa",
  "Moscow, Russia",
  "Mumbai, India",
  "Delhi, India",
  "Bangalore, India",
  "Hyderabad, India",
  "Kolkata, India",
  "Jaipur, India",
  "Seoul, South Korea",
  "Buenos Aires, Argentina",
  "Dubai, UAE",
  "Los Angeles, USA",
  "Toronto, Canada",
  "Rome, Italy",
  "Madrid, Spain",
  "Istanbul, Turkey",
  "Lagos, Nigeria",
  "Mexico City, Mexico",
  "Jakarta, Indonesia",
  "Cairo, Egypt",
  "Shanghai, China",
  "Hong Kong, China",
  "Vancouver, Canada",
  "Kuala Lumpur, Malaysia",
  "Singapore, Singapore",
  "Bangkok, Thailand",
  "Amsterdam, Netherlands"
];


export async function POST(request) {
  const createdUsers = []
  for (const name of userNames) {
    const email = (name.split(" ").join(".") + ".temp@gmail.com").toLowerCase();
    const password = name.split(" ")[0].toLowerCase();

    const userData = {
      email: email,
      fullname: name,
      password: password,
      photoURL: userPhotos.at(parseInt(Math.random(0, 9) * 10)),
    };

    const newUser = new User(userData);
    createdUsers.push(newUser)
    await newUser.save();
  }

  const createdUserIds = createdUsers.map((obj)=>{
    return {user: obj["_id"]}
  })


  while(imageURLS.length>0){
    for (const createdUser of createdUsers){
      const start = Math.floor(Math.random() * 10)
      const end = Math.floor(Math.random() * 20)
      
      const likedByArray = createdUserIds.slice(start, end)

      const imgIndex = Math.floor(Math.random() * imageURLS.length)
      
      if(!imgIndex) continue

      const postData = {
        user: createdUser._id,
        imageURL: imageURLS[imgIndex],
        location: randomLocations[Math.floor(Math.random() * randomLocations.length)],
        caption: photographyQuotes[Math.floor(Math.random() * randomLocations.length)],
        likedBy: likedByArray
      }
      
      imageURLS.splice(imgIndex, 1);
  
      const newPost = new Post(postData)
      await newPost.save()
    }
  }

  return Response.json({ message: "Dummy Data Created!" });
}
