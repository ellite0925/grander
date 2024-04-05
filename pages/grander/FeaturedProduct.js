import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";


const useStyles = makeStyles({
  primaryText: {
    fontSize: '20px',
    fontWeight: '600',
    margin: '0px',
    marginBottom: '10px'
  },
  secondaryText: {
    fontSize: '18px',
    margin: '0px',
    textAlign: 'center'
  },
  smallerText: {
    fontSize: '15px',
    margin: '0px',
    textAlign: 'center'
  },
  whiteText: {
    color: 'white'
  },
  overlay: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    height: '100%',
    width: '100%',
    opacity: '0',
    transition: '.5s ease',
    backgroundColor: '#2E3192',
  },
  overlayContainer: {
    '&:hover $overlay': {
      opacity: 0.8,
    },
  },
  bottomMargin: {
    marginBottom: '20px'
  },
});

export default function FeaturedProduct(props) {
  const classes = useStyles();

  return (
    <div className={classes.overlayContainer} style={{backgroundColor: '#F2F2F2', width: '25vw', height: '25vw' ,borderRadius: '20px', position: 'relative'}}>
      <GridContainer justify="center" alignItems="center" style={{height: '100%'}}>
        <img src={"./img/grander/featured_products/" + props.fileName} style={{}}></img>
      </GridContainer>
      <div style={{position: 'absolute', right: '30px', top: '30px', backgroundColor: '#2E3192', width: '80px', borderRadius: '6px'}}>
        <h5 className={classes.secondaryText + ' ' + classes.whiteText}>$ {props.cost}</h5>
      </div>
      <div style={{position: 'absolute', bottom: '30px', width: '100%'}}>
        <h5 className={classes.secondaryText}>GRANDER® Water Revitalisation Devices</h5>
      </div>

      <div className={classes.overlay}>
        <GridContainer justify="center" alignItems="center" style={{height: '100%'}} direction="column">
          <h5 className={classes.secondaryText + ' ' + classes.whiteText + ' ' + classes.bottomMargin}>SHOP INFO</h5>
          <h5 className={classes.smallerText + ' ' + classes.whiteText + ' ' + classes.bottomMargin}>Terms and Conditions</h5>
          <h5 className={classes.smallerText + ' ' + classes.whiteText + ' ' + classes.bottomMargin}>Services and <u>Returns</u></h5>
          <h5 className={classes.smallerText + ' ' + classes.whiteText + ' ' + classes.bottomMargin}>Solidarity Gifts</h5>
        </GridContainer>
      </div>
    </div>
  );
}