import { h } from 'preact';

export function User(props){
    return(
        <div class="user">
            <p>{props.name}<br/> {props.company}<br/> {props.location}</p>
        </div>
    );
}

export default User;