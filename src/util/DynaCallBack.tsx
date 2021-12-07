import { RequestConfigCl } from "../hooks/use-http-cc";

const DynaCallBack = async(reqConf:RequestConfigCl) => {
    console.log(`Getting user session:`);
    const stimulus = await fetch(reqConf.url, { //const response = await fetch("http://localhost:2020/api/register", {//method:"POST",
        headers: reqConf.headers,
        credentials: "include", //body: JSON.stringify({//email,//password//})
    });
    const response = await stimulus.json();
    return response;

};
export default DynaCallBack;