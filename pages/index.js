// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const dummy_meetups = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://media.istockphoto.com/photos/old-town-in-stockholm-sweden-picture-id506175664?b=1&k=20&m=506175664&s=170667a&w=0&h=Am5nY5jAJBkl3eEAt8b9JXblCQ1eMbFrvoXnlZnZbjY=",
    address: "some address 5",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "First meetup",
    image:
      "https://media.istockphoto.com/photos/old-town-in-stockholm-sweden-picture-id506175664?b=1&k=20&m=506175664&s=170667a&w=0&h=Am5nY5jAJBkl3eEAt8b9JXblCQ1eMbFrvoXnlZnZbjY=",
    address: "some other address 5",
    description: "This is the first meetup",
  },
  {
    id: "m3",
    title: "First meetup",
    image:
      "https://media.istockphoto.com/photos/old-town-in-stockholm-sweden-picture-id506175664?b=1&k=20&m=506175664&s=170667a&w=0&h=Am5nY5jAJBkl3eEAt8b9JXblCQ1eMbFrvoXnlZnZbjY=",
    address: "last some other address 5",
    description: "This is the first meetup",
  },
];
const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {
  //   // send http request and fetch data
  //   setLoadedMeetups(dummy_meetups);
  //   console.log(loadedMeetups);
  // }, []);
  return <MeetupList meetups={props.meetups} />;
};

// This function will not run run during the build process but always on the server after deployment
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // can ftch data from API or filesystem
//   return {
//     props: {
//       meetups: dummy_meetups,
//     },
//   };
// }
// Because of getStaticProps we no longer need useState and useEffect so those are commented out
export async function getStaticProps() {
  // fetch data from an API because this function is secure and will not reach to the end user/client
  // this has to return object and not anything else and the object has to be props as the component will receive it as props
  return {
    props: {
      meetups: dummy_meetups,
    },
    // revalidate: 10,
  };
}
export default HomePage;
