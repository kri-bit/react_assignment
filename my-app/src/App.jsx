import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const fetchFromAPI = () => {
    let URL = 'https://randomuser.me/api';
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        setUser(user);
      })
      .catch(error => alert(error));
  };

  const renderUserData = () => {
    if (!user) return null;

    return (
      <div className="card">
        <div className="card-head">
          <a href={`mailto:${user.email}`}>
            <i className="fas fa-envelope"></i> Email
          </a>
          <div className="user-image">
            <img src={user.picture.large} alt="" />
          </div>
        </div>
        <div className="card-body">
          <div className="user-post-address">
            <div>
              <span>{user.location.street.number}</span>
              <span>Street Address</span>
            </div>
            <div>
              <span>{user.location.postcode}</span>
              <span>Postcode</span>
            </div>
            <div>
              <span>{user.location.street.name}</span>
              <span>Street Name</span>
            </div>
          </div>
          <div className="user-name">
            <span className="user-name-title">{user.name.title}.</span>
            <span className="user-name-full">
              {user.name.first} {user.name.last},
            </span>
            <span className="user-age">{user.dob.age}</span>
          </div>
          <div className="user-location-address">
            <span>
              {user.location.city}, {user.location.state}, {user.location.country}
            </span>
          </div>
        </div>
        <div className="card-foot">
          <div className="user-contact-info">
            <span>
              <i className="fas fa-phone"></i> {user.phone}
            </span>
            <span>
              <i className="fa-solid fa-mobile-button"></i> {user.cell}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1>Random User Generator</h1>
      <button onClick={fetchFromAPI} id="generate-btn">
        Get New User
      </button>
      {renderUserData()}
    </div>
  );
};

export default App;
