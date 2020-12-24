import { Grid } from "@material-ui/core";
import React from "react";


function articleBox(props) {
    return (
            <div class="article-portfolio">
                <img class="article-img" src={props.image} alt="Article-Image" />

                <div class="article-heading-portfolio">
                    <b>{props.title}</b>
                </div>

                <div class="article-text-portfolio">
                    {props.description}
                </div>
            </div>
    );
}


export default articleBox
