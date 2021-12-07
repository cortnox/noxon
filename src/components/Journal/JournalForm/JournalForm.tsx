import React, { SyntheticEvent, useState } from 'react';
import './JournalForm.css';
import TextField from '../../UI/Form/TextField';
import AmountField from '../../UI/Form/AmountField';
import DatePicker from '../../UI/Form/DatePicker';
const JournalForm = (
    props:{
        onCommitForm: (dataEntry:any) => void
    }) => {
        console.log("Journal Form");
        let [title,setTitle] = useState("");
        const [amount,setAmount] = useState("");
        const [stamp,setDate] = useState("");
        const [valid,setValid] = useState(true);
        //let [validClass,setValidClass] = useState('form-floating form-fl');
        const submit = /*async*/ (e:SyntheticEvent) => {
            e.preventDefault();
            const job = {
                title: title,
                amount: +amount,
                stamp: new Date(stamp)
            };
            console.log(job); //let floatingTitle = document.getElementById("floatingTitle");
            setDate('');
            setTitle('');//floatingTitle.value = '';
            setAmount('');
            props.onCommitForm(job);
        }
    return (
            <form onSubmit={submit}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <TextField setTxt={setTitle} txt={"Title"} val={title} valid={valid} setValid={setValid} />
                    </div>
                    <div className="new-expense__control">
                        <AmountField setNum={setAmount} val={amount} num={"Amount"}/>
                    </div>
                    <div className="new-expense__control">
                        <DatePicker setTxt={setDate} val={stamp} txt={"Date"}/>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add</button>
                    </div>
                </div>
            </form>
    )
};
export default JournalForm;