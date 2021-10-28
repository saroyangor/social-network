import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={classes.item}>
            <NavLink activeClassName={classes.active} to={"/dialogs/"+props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;