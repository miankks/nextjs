// ourDomain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NeweetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NeweetupPage;
