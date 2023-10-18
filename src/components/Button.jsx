import {useDispatch} from 'react-redux';

const Button = ({value, action})=>{
    const dispatch = useDispatch();
    return (<button onClick={()=>{
        dispatch(action(value==='+'?1:-1));
    }}className = 'btn btn-primary'>{value}</button>)
}
export default Button;