import React from 'react';

const ProfileCard = ({ title, handle }) => {
    // const { title, handle } = props;
    return (
        <div>
            <div>This is {title}</div>
            <div>This is {handle}</div>
        </div>
    );
};

export default ProfileCard;