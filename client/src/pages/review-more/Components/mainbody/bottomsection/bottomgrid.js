import React from 'react';
import '../../../../../Css/review-more/bottomsection/bottomgrid.css'
import { Grid } from '@material-ui/core';
import Leftgrid from './subgrid/leftgrid';
import Rightgrid from './subgrid/rightgrid';


class Bottomgrid extends React.Component {
    constructor() {
        super();
        this.state = {
            changeOrder: false
        };
        this.updateDimensions = this.updateDimensions.bind(this)
    }

    updateDimensions() {
        if(window.innerWidth < 960) {
          this.setState({ changeOrder: true });
        }
        else {
            this.setState({ changeOrder : false })
        }
    }

    /*
     * Add event listener
     */
  componentDidMount() {
    if(window.innerWidth < 960) {
        this.setState({ changeOrder : true })
    }

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /*
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
    
    render() {
        if(this.state.changeOrder){
            var pageContent = (
                <Grid container spacing={2} className="bottom-grid">

                    <Grid item md={4} xs={12} className="bottom-grid-right-article">
                        <Rightgrid />
                    </Grid>

                    <Grid item md={8} xs={12} className="bottom-grid-left-article">
                        <Leftgrid />
                    </Grid>

                </Grid>
            );
        }
        else {
            console.log("Width > 960")
            var pageContent = (
                <Grid container spacing={2} className="bottom-grid">

                    <Grid item md={8} xs={12} className="bottom-grid-left-article">
                        <Leftgrid />
                    </Grid>

                    <Grid item md={4} xs={12} className="bottom-grid-right-article">
                        <Rightgrid />
                    </Grid>

                </Grid>
            );
        }

        return (
            // <Grid container spacing={2} className="bottom-grid">

            //     <Grid item md={8} xs={12} className="bottom-grid-left-article">
            //         <Leftgrid />
            //     </Grid>

            //     <Grid item md={4} xs={12} className="bottom-grid-right-article">
            //         <Rightgrid />
            //     </Grid>
            // </Grid>
            pageContent
        );
    }
}
export default Bottomgrid;
