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
    margin: '0px'
  }
});

export default function CountryTarget(props) {
  const classes = useStyles();
  const left = props.left;
  const top = props.top;
  const right = props.right;
  const bottom = props.bottom;

  return (
    <div style={{position: 'absolute', left: left + '%', top: top + '%', right: right + '%', bottom: bottom + '%', width: '420px'}}>
      <GridContainer>
        <GridItem sm={3}>
          <img src="./img/grander/grander_world/target.png" style={{}}></img>
        </GridItem>
        <GridItem sm={9}>
          <GridContainer>
            <GridItem>
              <h5 className={classes.primaryText}>
                Country Name
              </h5>
            </GridItem>
            <GridItem>
              <h5 className={classes.secondaryText}>
                Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.
              </h5>
            </GridItem>
            <GridItem>
              <img src="./img/grander/grander_world/arrow-right.png" style={{}}></img>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}