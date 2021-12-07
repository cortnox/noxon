import classes from './Checkout.module.css';
import { FormEvent, useRef, useState } from "react";
import TextField from "../../UI/Form/TextField";
import TextFieldRef from '../../UI/Form/TextFieldRef';
import { AddressCl, CartState } from '../../../store/ZCartContext';

const hasValue = (value: string) => value.trim().length !== 0;

const Checkout = (props: {
    onCancelCheckOut: () => void,
    onConfirm: (addressData:AddressCl) => void,
}) => {
    const [name, setName] = useState('');
    const [nameValid, setNameValid] = useState(true);
    const [street, setStreet] = useState('');
    const [streetValid, setStreetValid] = useState(true);
    const [suburb, setSuburb] = useState('');
    const [suburbValid, setSuburbValid] = useState(true);
    const [city, setCity] = useState('');
    const [cityValid, setCityValid] = useState(true);
    const [country, setCountry] = useState('');
    const [countryValid, setCountryValid] = useState(true);
    const [postal, setPostal] = useState('');
    const [postalValid, setPostalValid] = useState(true);
    const [checkout, setCheckout] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const refHandler = (airef: React.MutableRefObject<HTMLFieldSetElement>) => {
        return airef
    };
    const nameRef = useRef<HTMLInputElement>();
    const streetRef = useRef<HTMLInputElement>();
    const suburbRef = useRef<HTMLInputElement>();
    const cityRef = useRef<HTMLInputElement>();
    const countryRef = useRef<HTMLInputElement>();
    const postalRef = useRef<HTMLInputElement>();

    const cancelHandler = () => {
        //setCheckout(false);
        props.onCancelCheckOut();
    };
    const confirmHandler = (e: FormEvent) => {
        e.preventDefault();
        const name_air = nameRef.current
        if (name_air) {
            const nameval = name_air.value;
            setName(nameval);
            console.log(name_air);
            setNameValid(hasValue(name_air.value))
        }
        const street_air = streetRef.current
        if (street_air) {
            const streetval = street_air.value;
            setStreet(streetval);
            console.log(street_air);
            setStreetValid(hasValue(street_air.value))
        }
        const suburb_air = suburbRef.current
        if (suburb_air) {
            const suburbval = suburb_air.value;
            setSuburb(suburbval);
            console.log(suburb_air);
            setSuburbValid(hasValue(suburb_air.value))
        }
        const city_air = cityRef.current
        if (city_air) {
            const cityval = city_air.value;
            setCity(cityval);
            console.log(city_air);
            setCityValid(hasValue(city_air.value))
        }
        const country_air = countryRef.current
        if (country_air) {
            const countryval = country_air.value;
            setCountry(countryval);
            console.log(country_air);
            setCountryValid(hasValue(country_air.value))
        }
        const postal_air = postalRef.current
        if (postal_air) {
            const postalval = postal_air.value;
            setPostal(postalval);
            console.log(postal_air);
            setPostalValid(hasValue(postal_air.value))
        }

        setFormValid(
            nameValid &&
            streetValid &&
            cityValid &&
            suburbValid &&
            countryValid &&
            postalValid
        );

        if (!formValid) {
            //submit from data
            return;
        }
        const addressn:AddressCl = {
            street:street,
            suburb:suburb,
            city:city,
            country:country,
            postalcode:postal

        }

        setCheckout(true);
        props.onConfirm(addressn);
    };

    return (
        <form onSubmit={confirmHandler}>
            <TextFieldRef ref={nameRef} val={name} txt={"Name"} valid={nameValid} setTxt={setName} setValid={setNameValid} />
            <TextFieldRef ref={streetRef} val={street} txt={"Street"} valid={streetValid} setTxt={setStreet} setValid={setStreetValid} />
            <TextFieldRef ref={suburbRef} val={suburb} txt={"Suburb"} valid={suburbValid} setTxt={setSuburb} setValid={setSuburbValid} />
            <TextFieldRef ref={cityRef} val={city} txt={"City"} valid={cityValid} setTxt={setCity} setValid={setCityValid} />
            <TextFieldRef ref={countryRef} val={country} txt={"Country"} valid={countryValid} setTxt={setCountry} setValid={setCountryValid} />
            <TextFieldRef ref={postalRef} val={postal} txt={"Postal Code"} valid={postalValid} setTxt={setPostal} setValid={setPostalValid} />
            <div className={classes.half}>
                <button type={`button`} className={classes['button--alt']} onClick={props.onCancelCheckOut}> Cancel</button>
                <button className={classes.button}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
/*

                <button type={'button'} className="w-100 btn btn-lg btn-danger">Cancel</button>
                <button className="w-100 btn btn-lg btn-success">Confirm</button>
* */