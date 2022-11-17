import axios from "axios";

const AxiosCalls = async(state)=>{
    const data = await axios.get ('./data.json')
    state(data.data.data)

}

export {AxiosCalls}