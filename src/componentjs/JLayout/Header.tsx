import React, { useState } from 'react';

const Tsx = () => {
    const [error,setError] = useState({
        title:'',
        content:'',
    });
    try {

    } catch (e: unknown) {
    let result = (e as Error).message;
    if (e instanceof Error) {
      result = (e as Error).message; // works, `e` narrowed to Error
      console.log(result);
      setError({
        title: "An error occured.",
        content: `The system encountered an unexpected error:\n ${e} \n Please try again later.`,
      });
    }
  }

    return (
        <div>
            
        </div>
    );
};

export default Tsx;