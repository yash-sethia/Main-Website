import React from 'react';
import '../../../Css/review-page/HeaderText.css';

function HeaderText(props) {
        return (
            <div>

                <div className="article-heading-reviewpage">{props.articleHeading}</div>

                <div className="article-sub-heading">{props.articleSubHeading}</div>

                <img className="img" src={props.articleThumbnail} alt=""/>

            </div>
        );
}

export default HeaderText;
