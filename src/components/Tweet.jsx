import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import User from "./User";
import Actions from "./Actions";

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">
          <User USER_NAME={tweet.user.name} USER_HANDLE={tweet.user.handle}/>
          <Timestamp TWEET_TIMESTAMP={tweet.timestamp}/>
        </div>
        <Message message={tweet.message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
