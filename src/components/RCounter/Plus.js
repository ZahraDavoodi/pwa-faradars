import {INC} from '../../redux/actions/index';

import {useSelector , useDispatch} from 'react-redux';
export default function Plus(){
     
    const dispatch= useDispatch();
    return  <button onClick={()=>{dispatch({type:INC}) }}>+</button>
}