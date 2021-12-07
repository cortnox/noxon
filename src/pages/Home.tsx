import React from 'react';
const Home = (props:{name: string}) => {
    return (
      <div>
        Home {props.name ? props.name : "You're not authenticated."}
        Welcome
      </div>
    );
}

export default Home;
