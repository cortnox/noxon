import React from 'react';
import './JournalNew.css';
import JournalForm from './JournalForm';

//let jount = 2;

const JournalNew = (props: {
    onCommitForm2: (dataEntry: any) => void
    //onCommitForm2: (dataEntry: any) => void
}) => {
    const commitForm = /*async*/ (dataEntry: any) => {
        console.log('Journal New');
        //jount++;
        const data = {
            id: Math.random().toString(),
            ...dataEntry
        };
        console.log(dataEntry);
        props.onCommitForm2(data);
    };
    return (
        <div className="new-expense">
            <JournalForm onCommitForm={commitForm} />
        </div>
    );
}
export default JournalNew;