import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup
  // useRouter can not be used here and can be used only in component to getStaticProp receives contect where we fetch the meetupId
  const meetupId = context.params.meetupId;
  //   console.log(context.params);
  //   console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://media.istockphoto.com/photos/old-town-in-stockholm-sweden-picture-id506175664?b=1&k=20&m=506175664&s=170667a&w=0&h=Am5nY5jAJBkl3eEAt8b9JXblCQ1eMbFrvoXnlZnZbjY=",
        id: "m1",
        title: "First meetup",
        address: "Stockholm address",
        description: "This is the first meetup",
      },
    },
  };
}
export default MeetupDetails;
