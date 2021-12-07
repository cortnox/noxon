import { ClientMessageCl } from "../store/ZCartContext";

const CurrentUserSession = async() => {
    console.log(`Getting user session:`);
    const stimulus = await fetch("http://pecan.local:2020/api/user", { //const response = await fetch("http://localhost:2020/api/register", {//method:"POST",
        headers: {
            "Content-Type": "application/json",
            //"Access-Control-Allow-Origin":"*"
        },
        credentials: "include", //body: JSON.stringify({//email,//password//})
    });
    const response = await stimulus.json();
    return response as ClientMessageCl;

};
export default CurrentUserSession;