import React from 'react';
const Account = (props:{name: string}) => {
    return (
      <div>
        Account {props.name ? props.name : "You're not authenticated."}
      </div>
    );
}

export default Account;
