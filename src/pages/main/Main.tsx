import { useEffect } from 'react';
import styles from './Main.module.scss';
import { getUser } from '../../store/actionCreaters';
import { useDispatch } from '../../store/store';

function Main() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, []) 
    
    return (
        <div>ОСНОВНАЯ СТРАНИЦА</div>
    )
}

export default Main;