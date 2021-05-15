import React, {useContext} from 'react';
import "../../../Css/task-page/Buttons.css"
import { NavLink, Link } from "react-router-dom";

import { UserContext } from '../../AuthContext';

function Buttons(props) {
    const [user, setUser] = useContext(UserContext);
    console.log(props.taskId);
        return (
            <div class="buttons">
                <button class="not-now-button">
                  <NavLink to={"/dashboard"} style={{ textDecoration: 'none' }}>  Not Now </NavLink>
                </button>

                <button class="to-editor-button">
                <Link to={`/editor/${props.taskId}`} style={{ textDecoration: 'none' }}>Proceed To Task</Link>
                </button>
            </div>
        );
}

export default Buttons;
