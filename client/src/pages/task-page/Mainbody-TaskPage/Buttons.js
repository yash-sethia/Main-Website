import React from 'react';
import "../../../Css/task-page/Buttons.css"
import { NavLink, Link } from "react-router-dom";

function Buttons(props) {
        return (
            <div class="buttons">
                <button class="not-now-button">
                  <NavLink to="/" style={{ textDecoration: 'none' }}>  Not Now </NavLink>
                </button>

                <button class="to-editor-button">
                    Proceed To Task
                </button>
            </div>
        );
}

export default Buttons;
