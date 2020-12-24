import React from "react"
import '../../Css/Engagement/Engagement.css'
import { NavLink, Link } from "react-router-dom";



class EngagementStructure extends React.Component {
/*
    constructor(props) {
        super(props);
    }*/
    render() {
        const epg = this.props.engagementpagedata
        return (
          <div className="total-grid-engagementpage">

		<div className="headings">
			<div className="article-topic-engagement">
				<h1>Dunk of the Dunkin</h1>
			</div>

			  <div className="sub-nav" id="task-nav-engagementpage">
				<NavLink to="/analytics" >OVERVIEW</NavLink>
				<NavLink to="/readreview">REVIEW</NavLink>
				<NavLink to="/airating">AI REVIEW</NavLink>
				<NavLink to="/engagementpage" className="active-analytics">ENGAGEMENT</NavLink>
			</div>
		</div>
		<div className="engagementpage">
			<div className="engagementpage-box">


				<div className="individual-box-engagementpage">
					<div className="box-heading-engagementpage">
						<h3> Reads </h3>
					</div>

					<div className="box-value">
						{epg.reads}
					</div>
				</div>



				<div className="individual-box-engagementpage">
					<div className="box-heading-engagementpage">
						<h3> Reviews </h3>
					</div>

					<div className="box-value">
						{epg.reviews}
					</div>
				</div>
			</div>
		</div>

		<div className="engagementpage-gif-box">

			<div className="engagementpage-content">
						<div className="content-box">
							<div className="gif">
								Enagement photo / GIF
							</div>

							<div className="reaction-count">
								{epg.gif1}
							</div>

						</div>
			</div>


			<div className="engagementpage-content">
				<div className="content-box">
					<div className="gif">
						Enagement photo / GIF
					</div>

					<div className="reaction-count">
						{epg.gif2}
					</div>

				</div>
			</div>


			<div className="engagementpage-content">
				<div className="content-box">
					<div className="gif">
						Enagement photo / GIF
					</div>

					<div className="reaction-count">
						{epg.gif3}
					</div>

				</div>
			</div>



			<div className="engagementpage-content">
				<div className="content-box">
					<div className="gif">
						Enagement photo / GIF
					</div>

					<div className="reaction-count">
						{epg.gif4}
					</div>

				</div>
			</div>



			<div className="engagementpage-content">
				<div className="content-box">
					<div className="gif">
						Enagement photo / GIF
					</div>

					<div className="reaction-count">
						{epg.gif5}
					</div>

				</div>
			</div>

		</div>
	</div>
        );
    }
}

export default EngagementStructure
