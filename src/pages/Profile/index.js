import { useEffect, useState } from "react";
import { Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../actions/userAction";
import "./index.css";

const { Title } = Typography;

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const myProfile = useSelector((state) => state.userReducer.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="profile-section">
      {!loading ? (
        <div className="profile-container">
          <div className="avatar-container rounded-circle">
          </div>
          <Title className="detail-profile" level={4}>{myProfile.name}</Title>
          <Title className="detail-profile" level={4}>{myProfile.email}</Title>
          <Title className="detail-profile" level={4}>{myProfile.gender}</Title>
        </div>
      ) : null}
    </div>
  );
};

export default ProfilePage;
