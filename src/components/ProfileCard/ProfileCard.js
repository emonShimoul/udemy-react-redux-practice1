import React from 'react';

const ProfileCard = ({ title, handle }) => {
    // const { title, handle } = props;
    return (
        <div className='card'>
            <div className="card-image">
                <figure className='image is-1by1'>
                    <img src="https://media.licdn.com/dms/image/C4D03AQGWq6ENYLpaFA/profile-displayphoto-shrink_800_800/0/1656172584936?e=1680134400&v=beta&t=HJi4-F0vjS-ossaBOTnH6Btq2hEedOQd5AHW0EKlIlQ" alt="image" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className='title is-4'>{title}</p>
                    <p className='subtitle is-6'>{handle}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;