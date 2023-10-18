import Button from "../components/Button";
import Message from "../components/Message";
import { minus, plus } from "../redux/counter-slice";

const CounterPage = ()=>{
    return (<div className='container'>
        <Message msg = "Counter App" type='title'/>
        <Message msg = "Value is " type=''/>
        <Button value = "+" action = {plus} /> &nbsp;
        <Button value = "-" action = {minus} />
    </div>);
}

export default CounterPage;