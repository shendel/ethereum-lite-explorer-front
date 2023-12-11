import axios from "axios";

const etherApi = axios.create({
    //baseURL : "https://eth.public-rpc.com",
    baseURL: "http://192.168.56.200:8545/",
    //baseURL : "https://testnet-rpc-seoul.gen.foundation",
    headers : {'content-type' : "application/json"}
})

export default etherApi