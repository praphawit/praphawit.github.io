import React, { useEffect,useState } from 'react';
import ExpansionDetails from './Detail';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./styles.css";

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },

  }));
  
  export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            
          >
            <Typography  >
                <div align="left"  >
                    <div>
                        <img src="http://www.gadgetdoor.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/h/chuwi-hi9-pro-mt6797-x20-deca-core-android-8-0-4g-lte-phone-call-tablets-8_1_.jpg"
                        alt="" width='50'   height='50' />
                    </div>
                </div>
            </Typography>

            <Typography className={classes.heading} >
                <div align="left"  >
                    <div>
                        <p className='heading'>Prepay</p>
                        <p className='heading'>โทรศัพท์แบบเติมเงิน</p>
                    </div>
                </div>
            </Typography>
            <Typography className='typography'>
                <div className='div-typo'  >
                    <div>
                        <p className='heading-md' >SUB</p>
                        <p className='heading-md' >456</p>
                    </div>
                </div>
                <div className='div-typo'   >
                    <div>
                        <p className='heading-md' >Revenue</p>
                        <p className='heading-md' >4500 ฿</p>
                    </div>
                </div>
            </Typography>
            
            
          </ExpansionPanelSummary>

          <ExpansionPanelDetails >
            <Typography className={classes.root}>
                <ExpansionDetails />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography  >
                <div align="left"  >
                    <div>
                        <img src="http://www.gadgetdoor.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/h/chuwi-hi9-pro-mt6797-x20-deca-core-android-8-0-4g-lte-phone-call-tablets-8_1_.jpg"
                        alt="" width='50'   height='50' />
                    </div>
                </div>
            </Typography>

            <Typography className={classes.heading} >
                <div align="left"  >
                    <div>
                        <p className='heading'>Prepay</p>
                        <p className='heading'>โทรศัพท์แบบเติมเงิน</p>
                    </div>
                </div>
            </Typography>
            <Typography className='typography'>
                <div className='div-typo'  >
                    <div>
                        <p className='heading-md' >SUB</p>
                        <p className='heading-md' >456</p>
                    </div>
                </div>
                <div className='div-typo'   >
                    <div>
                        <p className='heading-md' >Revenue</p>
                        <p className='heading-md' >4500 ฿</p>
                    </div>
                </div>
            </Typography>
            
            
          </ExpansionPanelSummary>

          <ExpansionPanelDetails >
            <Typography className={classes.root}>
                <ExpansionDetails />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography  >
                <div align="left"  >
                    <div>
                        <img src="http://www.gadgetdoor.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/h/chuwi-hi9-pro-mt6797-x20-deca-core-android-8-0-4g-lte-phone-call-tablets-8_1_.jpg"
                        alt="" width='50'   height='50' />
                    </div>
                </div>
            </Typography>

            <Typography className={classes.heading} >
                <div align="left"  >
                    <div>
                        <p className='heading'>Prepay</p>
                        <p className='heading'>โทรศัพท์แบบเติมเงิน</p>
                    </div>
                </div>
            </Typography>
            <Typography className='typography'>
                <div className='div-typo'  >
                    <div>
                        <p className='heading-md' >SUB</p>
                        <p className='heading-md' >456</p>
                    </div>
                </div>
                <div className='div-typo'   >
                    <div>
                        <p className='heading-md' >Revenue</p>
                        <p className='heading-md' >4500 ฿</p>
                    </div>
                </div>
            </Typography>
            
            
          </ExpansionPanelSummary>

          <ExpansionPanelDetails >
            <Typography className={classes.root}>
                <ExpansionDetails />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>


        <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography  >
                <div align="left"  >
                    <div>
                        <img src="http://www.gadgetdoor.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/h/chuwi-hi9-pro-mt6797-x20-deca-core-android-8-0-4g-lte-phone-call-tablets-8_1_.jpg"
                        alt="" width='50'   height='50' />
                    </div>
                </div>
            </Typography>

            <Typography className={classes.heading} >
                <div align="left"  >
                    <div>
                        <p className='heading'>Prepay</p>
                        <p className='heading'>โทรศัพท์แบบเติมเงิน</p>
                    </div>
                </div>
            </Typography>
            <Typography className='typography'>
                <div className='div-typo'  >
                    <div>
                        <p className='heading-md' >SUB</p>
                        <p className='heading-md' >456</p>
                    </div>
                </div>
                <div className='div-typo'   >
                    <div>
                        <p className='heading-md' >Revenue</p>
                        <p className='heading-md' >4500 ฿</p>
                    </div>
                </div>
            </Typography>
            
            
          </ExpansionPanelSummary>

          <ExpansionPanelDetails >
            <Typography className={classes.root}>
                <ExpansionDetails />
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }