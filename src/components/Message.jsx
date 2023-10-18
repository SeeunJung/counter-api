import { useSelector } from "react-redux";

const Message = ({msg, type=''})=>{

    const countValue = useSelector(state=>{
        console.log('Count is ', state);
        return state.counterReducer.count;
    });
    return (type!=='title'?<h3 className='alert alert-success'>{msg}{countValue}</h3>:<h2 className='alert alert-info'>{msg}</h2>);
}

export default Message;