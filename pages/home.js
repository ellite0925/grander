import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
import Router from "next/router";
// @material-ui/core components
import Fab from '@material-ui/core/Fab';
import { makeStyles } from "@material-ui/core/styles";
import DefaultButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from '@material-ui/core/Divider';
// @material-ui/icons
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import RoomIcon from '@material-ui/icons/Room';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
// template components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
// custom
import Rating from '@material-ui/lab/Rating';
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
import Info from "/components/Typography/Info.js";
// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "/pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "/pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "/pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "/pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "/pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "/pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "/pages-sections/Components-Sections/SectionExamples.js";
import SectionDownload from "/pages-sections/Components-Sections/SectionDownload.js";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Slider from "react-slick";
import NavPills from "/components/NavPills/NavPills.js";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CustomInput from "/components/CustomInput/CustomInput.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import { Container, IconButton, Typography } from "@material-ui/core";
//hook
import { useCheckTokenValidity } from '../redux/hooks.js';
//redux
import { useSelector, useDispatch } from "react-redux";
//other
import { useSnackbar } from "notistack";
import CountryTarget from "./grander/CountryTarget.js";
import FeaturedProduct from "./grander/FeaturedProduct.js";

const useStyles = makeStyles(theme => {
  return {
    ...styles,
    slideCard: {
      backgroundColor: "#F5F5F5",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    coloredSection: {
      backgroundColor: '#EBF3F5'
    },
    testimonialSection: {
      backgroundColor: '#2E3192'
    },
    defaultColoredSection: {
      backgroundColor: '#F8F8F8'
    },
    headerMarginTop: {
      marginTop: '150px'
    },
    aboutPadding: {
      paddingTop: '50px',
      paddingBottom: '100px'
    },
    fullWidth: {
      width: '100%'
    },
    fullHeight: {
      height: '100%'
    },
    autoHeight: {
      height: 'auto'
    },
    blueText: {
      color: '#2A6EBF',
    },
    blueRect: {
      backgroundColor: '#2A6EBF',
      height: '885px',
      paddingTop: '65px',
      paddingRight: '191px',
      display: 'flex',
      justifyContent: 'flex-end',
      boxSizing: 'border-box',
      overflow: 'hidden'
    },
    purpleRect: {
      backgroundColor: '#2E3192',
      height: '740px',
      width: '640px',
      marginLeft: '50px'
    },
    whiteBorderRect: {
      borderTop: '10px solid white',
      borderRight: '10px solid white',
      borderBottom: '10px solid white',
      borderTopRightRadius: '38px',
      borderBottomRightRadius: '38px',
      height: '80%',
      width: '150%',
      boxSizing: 'border-box',
      borderLeft: 'none'
    },
    absoluteSoraContainer: {
      position: 'absolute',
      right: '240px',
      top: '128px',
      zIndex: '10',
    },
    soraImg: {
      borderRadius: '38px',
      border: '0px solid #FFF',
    },
    absoluteWingContainer: {
      position: 'absolute',
      right: '0px',
      top: '400px',
      zIndex: '11',
    },
    wingImg: {
      width: '550px',
      height: '550px',
    },
    aboutImgContainer: {
      position: 'absolute',
      width: '640px',
      left: '0px',
      top: '60px'
    },
    aboutImg: {
      width: '640px',
    },
    columnCenter: {
      display: 'flex',
      alignItems: 'center',
    },
    granderSection: {
      paddingTop: '100px',
      paddingBottom: '100px',
      backgroundImage: 'url("img/grander/grander/back.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    whiteText: {
      color: 'white'
    },
    normalButton: {
      width: '150px'
    },
    noMargin: {
      margin: '0px !important'
    },
    overrideTop: {
      marginTop: '-50px'
    },
    primaryTitle: {
      fontSize: '40px',
      marginTop: '0px',
      letterSpacing: '3px'
    },
    secondaryTitle: {
      fontSize: '18px',
      margin: '0px'
    },
    boldText: {
      fontWeight: 'bold'
    },
    opacityText: {
      opacity: '0.8'
    },
    secondaryLineHeight: {
      lineHeight: '1.9'
    }
  }
});

export default function Home(props) {
  //snackbar
  const snackbar = useSnackbar();
  
  const classes = useStyles();
  const { ...rest } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");

  const redux_token = useSelector((state) => state.authentication.token);

  const testimonial_settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    dots: false,
    autoplay: false,
  };
  

  return (
    <div>
      <Header
      style={{
        fontFamily:"satoshi"
      }}
        brand=""
        rightLinks={<HeaderLinks/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 80,
          color: "white"
        }}
        {...rest}
      />
      
      {/* grander start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="grander_section">
        <div className={classes.granderSection+' '+classes.headerMarginTop}>
          <GridContainer>
            <GridItem sm={2}></GridItem>
            <GridItem sm={5} className={classes.columnCenter}>
              <GridContainer direction="column" justify="center" className={classes.autoHeight}>
                <h2 className={classes.whiteText} >Grander Asia Pacific</h2>
                <h1 style={{marginBottom: '30px', fontFamily: 'satoshi', fontSize: '65px'}} className={classes.whiteText}>The GRANDER® Water</h1>
                <h1 style={{marginBottom: '30px', fontFamily: 'satoshi', fontSize: '65px'}} className={classes.whiteText}>Revitalization</h1>
                <h5 className={classes.whiteText}>GRANDER® Water Technology has been providing water solutions worldwide for more than three decades. Uncountable experience reports from private users, hotel owners, restaurant owners, swimming pool operators, municipalities as well as public institutions demonstrate much better in practice how the revitalised water from GRANDER® really works.</h5>
                <GridContainer style={{marginTop: '30px', marginBottom: '20px'}}>
                  <Button className={classes.normalButton} color="primary" round>Shop now</Button>
                  <Button className={classes.normalButton} round style={{backgroundColor: 'transparent', border: 'solid 2px white', marginLeft: '20px'}}>Read more</Button>
                </GridContainer>
              </GridContainer>
            </GridItem>
            <GridItem sm={5}>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* grander end */}

      {/* our story start */}
      <div className={classNames(classes.main, classes.mainRaised, classes.coloredSection, classes.noMargin)} id="our_story_section">
        <Container maxWidth={false} style={{ maxWidth: "60%" }} >
          <div style={{display: 'flex', gap: '50px'}}>
            <div style={{flex: 0.3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '-50px'}}>
              <img src="./img/grander/our_story/img1.png" style={{width: '100%'}}></img>
              <img src="./img/grander/our_story/img2.png" style={{width: '100%'}}></img>
            </div>
            <div style={{flex: 0.4, marginTop: '-50px'}}>
              <img src="./img/grander/our_story/img3.png" style={{width: '100%'}}></img>
            </div>
            <div style={{flex: 0.3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '-50px'}}>
              <img src="./img/grander/our_story/img4.png" style={{width: '100%'}}></img>
              <img src="./img/grander/our_story/img5.png" style={{width: '100%'}}></img>
            </div>
          </div>

          <div style={{display: 'flex', marginTop: '80px', marginBottom: '30px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{backgroundColor: '#2e3192', width: '80px', borderRadius: '10px', height: '10px'}}></div>
            </div>
            <div>
              <p style={{marginBlock: '0px', fontSize: '20px', marginLeft: '20px'}}>Our Story</p>
            </div>
          </div>

          <div style={{display: 'flex', gap: '50px'}}>
            <div style={{flex: 0.7, display: 'flex', flexDirection: 'column'}}>
              <p style={{fontSize: '40px'}}>Areas of Application</p>
              <h5 style={{fontSize: '18px', marginTop: '30px', lineHeight: '40px', opacity: '0.8'}}>GRANDER® Water Technology has been providing water solutions worldwide for more than three decades. Uncountable experience reports from private users, hotel owners, restaurant owners, swimming pool operators, municipalities as well as public institutions demonstrate much better in practice how the revitalised water from GRANDER® really works.</h5>
            </div>
            <div style={{flex: 0.3, display: 'flex', flexDirection: 'column', marginLeft: '50px'}}>
              <p style={{fontSize: '25px'}}>Applications</p>
              <div style={{backgroundColor: '#2e3192', width: '80px', borderRadius: '10px', height: '7px'}}></div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px'}}>
                <div style={{display: 'flex'}}>
                  <img src="./img/grander/our_story/Vector.png" style={{width: '20px', height: '20px', marginRight: '10px'}}></img>
                  <h5 style={{fontSize: '18px', margin: '0px', opacity: '0.8'}}>Home and Living</h5>
                </div>
                <div style={{display: 'flex'}}>
                  <img src="./img/grander/our_story/Vector.png" style={{width: '20px', height: '20px', marginRight: '10px'}}></img>
                  <h5 style={{fontSize: '18px', margin: '0px', opacity: '0.8'}}>Hotel and Restaurants</h5>
                </div>
                <div style={{display: 'flex'}}>
                  <img src="./img/grander/our_story/Vector.png" style={{width: '20px', height: '20px', marginRight: '10px'}}></img>
                  <h5 style={{fontSize: '18px', margin: '0px', opacity: '0.8'}}>Wellness & Swimming</h5>
                </div>
                <div style={{display: 'flex'}}>
                  <img src="./img/grander/our_story/Vector.png" style={{width: '20px', height: '20px', marginRight: '10px'}}></img>
                  <h5 style={{fontSize: '18px', margin: '0px', opacity: '0.8'}}>Animals & Agriculture</h5>
                </div>
                <div style={{display: 'flex'}}>
                  <img src="./img/grander/our_story/Vector.png" style={{width: '20px', height: '20px', marginRight: '10px'}}></img>
                  <h5 style={{fontSize: '18px', margin: '0px', opacity: '0.8'}}>Bread & Food Production</h5>
                </div>
                <div style={{display: 'flex'}}>
                  <img src="./img/grander/our_story/Vector.png" style={{width: '20px', height: '20px', marginRight: '10px'}}></img>
                  <h5 style={{fontSize: '18px', margin: '0px', opacity: '0.8'}}>Industrial</h5>
                </div>
              </div>
            </div>
          </div>
          
          <Button className={classes.normalButton} round style={{backgroundColor: 'transparent', border: 'solid 2px #2e3192', marginLeft: '20px', color: 'black', marginBottom: '150px'}}>Read more</Button>
        </Container>
      </div>
      {/* our story end */}

      {/* featured applications start */}
      <div className={classNames(classes.main, classes.mainRaised, classes.noMargin)} id="our_story_section">
        <Container maxWidth={false} style={{ maxWidth: "70%", marginBottom: '50px' }} >
          <GridContainer justify="center">
            <h5 style={{fontSize: '18px', marginTop: '60px', marginBottom: '20px', lineHeight: '40px', opacity: '0.8', letterSpacing: '3px'}}>GRANDER® Water Technology</h5>
          </GridContainer>
          <GridContainer justify="center">
            <h5 style={{fontSize: '40px', marginTop: '0px', letterSpacing: '3px'}}>Featured </h5>
            <h5 style={{fontSize: '40px', marginTop: '0px', letterSpacing: '3px', fontWeight: 'bold'}}>&nbsp;Applications </h5>
          </GridContainer>
          
          <GridContainer spacing={10}>
            <GridItem sm={4}>
              <GridContainer direction="column">
                <GridItem>
                  <img src="./img/grander/featured_applications/img1.png" style={{width: '100%'}}></img>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '25px', marginTop: '30px', fontWeight: '600'}}>Home and Living</h5>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '20px', marginTop: '10px', opacity: '0.8'}}>For many families, the installation of a GRANDER® Water Revitalisation device in their home has provided a new well-being dimension.</h5>
                </GridItem>
                <GridItem>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <h5 style={{fontSize: '20px', fontWeight: '550'}}>Explore page&nbsp;&nbsp;</h5>
                    <img src="./img/grander/featured_applications/arrow-right.png" style={{width: '20px', height: '20px'}}></img>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem sm={4}>
              <GridContainer direction="column">
                <GridItem>
                  <img src="./img/grander/featured_applications/img2.png" style={{width: '100%'}}></img>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '25px', marginTop: '30px', fontWeight: '600'}}>Hotel and Restaurants</h5>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '20px', marginTop: '10px', opacity: '0.8'}}>It is in the hotel and gastronomy industry that we see such a wide range of uses for the element water.</h5>
                </GridItem>
                <GridItem>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <h5 style={{fontSize: '20px', fontWeight: '550'}}>Explore page&nbsp;&nbsp;</h5>
                    <img src="./img/grander/featured_applications/arrow-right.png" style={{width: '20px', height: '20px'}}></img>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem sm={4}>
              <GridContainer direction="column">
                <GridItem>
                  <img src="./img/grander/featured_applications/img3.png" style={{width: '100%'}}></img>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '25px', marginTop: '30px', fontWeight: '600'}}>Wellness & Swimming</h5>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '20px', marginTop: '10px', opacity: '0.8'}}>The aim of GRANDER® Water Revitalisation is to compliment and to optimise the necessary conventional steps of water conditioning.</h5>
                </GridItem>
                <GridItem>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <h5 style={{fontSize: '20px', fontWeight: '550'}}>Explore page&nbsp;&nbsp;</h5>
                    <img src="./img/grander/featured_applications/arrow-right.png" style={{width: '20px', height: '20px'}}></img>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>

          <GridContainer spacing={10}>
            <GridItem sm={4}>
              <GridContainer direction="column">
                <GridItem>
                  <img src="./img/grander/featured_applications/img4.png" style={{width: '100%'}}></img>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '25px', marginTop: '30px', fontWeight: '600'}}>Animals & Agriculture</h5>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '20px', marginTop: '10px', opacity: '0.8'}}>Revitalised GRANDER® water has been very successful not only in agriculture, in cultivation and in animal husbandry.</h5>
                </GridItem>
                <GridItem>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <h5 style={{fontSize: '20px', fontWeight: '550'}}>Explore page&nbsp;&nbsp;</h5>
                    <img src="./img/grander/featured_applications/arrow-right.png" style={{width: '20px', height: '20px'}}></img>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem sm={4}>
              <GridContainer direction="column">
                <GridItem>
                  <img src="./img/grander/featured_applications/img5.png" style={{width: '100%'}}></img>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '25px', marginTop: '30px', fontWeight: '600'}}>Bread & Food Production</h5>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '20px', marginTop: '10px', opacity: '0.8'}}>Food is an important part of our daily lives. Therefore, the demand placed on manufacturers is high.</h5>
                </GridItem>
                <GridItem>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <h5 style={{fontSize: '20px', fontWeight: '550'}}>Explore page&nbsp;&nbsp;</h5>
                    <img src="./img/grander/featured_applications/arrow-right.png" style={{width: '20px', height: '20px'}}></img>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem sm={4}>
              <GridContainer direction="column">
                <GridItem>
                  <img src="./img/grander/featured_applications/img6.png" style={{width: '100%'}}></img>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '25px', marginTop: '30px', fontWeight: '600'}}>Industrial</h5>
                </GridItem>
                <GridItem>
                  <h5 style={{fontSize: '20px', marginTop: '10px', opacity: '0.8'}}>GRANDER® Water Revitalisation Devices assist in areas of recycled water for multiple industries, from horticulture to agriculture using various sources including wastewater.</h5>
                </GridItem>
                <GridItem>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <h5 style={{fontSize: '20px', fontWeight: '550'}}>Explore page&nbsp;&nbsp;</h5>
                    <img src="./img/grander/featured_applications/arrow-right.png" style={{width: '20px', height: '20px'}}></img>
                  </div>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </Container>
      </div>
      {/* featured applications end */}

      {/* testimonials start */}
      <div className={classNames(classes.main, classes.mainRaised, classes.testimonialSection, classes.noMargin)} id="testimonial_section">
        <Container maxWidth={false} style={{ maxWidth: "70%", paddingBottom: '50px  ' }} >
          <h5 className={classes.secondaryTitle + ' ' + classes.whiteText} style={{paddingTop: '120px', marginBottom: '30px'}}>WHAT OUR CLIENTS SAY</h5>
          <h5 className={classes.primaryTitle + ' ' + classes.boldText + ' ' + classes.whiteText}>Testimonials</h5>

          <Slider spac {...testimonial_settings}>
            <div>
              <Card className={classes.slideCard}>
                <CardBody>
                  <GridContainer>
                    <p>“Joining Church of Divine Structure changed my life profoundly. Their holistic healing approach, blending ancient wisdom with modern techniques, offered me the serenity I sought. The personalized treatments and mindful living advice reshaped my journey to well-being. Grateful beyond words.”</p>
                  </GridContainer>
                  <GridContainer justify="flex-start" alignItems="center" space="5px">
                    <GridItem sm={2}>
                      <img src="/img/avatar1.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%" }}></img>
                    </GridItem>
                    <GridItem sm={7}>
                      <h6 className={classes.title} style={{ marginTop: "10px" }}>Emma Thompson</h6>
                      <p style={{ marginTop: "-10px" }}>Yoga Instructor</p>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className={classes.slideCard}>
                <CardBody>
                  <GridContainer>
                    <p>“Discovering Church of Divine Structure was a revelation. Their hands-on healing sessions and nutritional guidance reshaped my health journey. The meticulous care and genuine concern of their healers transformed my life. I've found solace, healing, and a newfound sense of balance here."</p>
                  </GridContainer>
                  <GridContainer justify="flex-start" alignItems="center" space="5px">
                    <GridItem sm={2}>
                      <img src="/img/avatar2.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%" }}></img>
                    </GridItem>
                    <GridItem sm={7}>
                      <h6 className={classes.title} style={{ marginTop: "10px" }}>Alex Carter</h6>
                      <p style={{ marginTop: "-10px" }}>Financial Analyst</p>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className={classes.slideCard}>
                <CardBody>
                  <GridContainer>
                    <p>"I had struggled with chronic health issues for years until I found Church of Divine Structure. Their unique healing protocols, rooted in ancient traditions, provided the breakthrough I needed. The ketogenic diet and their innovative bodywork methods made a world of difference. I am healthier and happier today, thanks to them."</p>
                  </GridContainer>
                  <GridContainer justify="flex-start" alignItems="center" space="5px">
                    <GridItem sm={2}>
                      <img src="/img/avatar1.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%" }}></img>
                    </GridItem>
                    <GridItem sm={7}>
                      <h6 className={classes.title} style={{ marginTop: "10px" }}>Olivia Walker</h6>
                      <p style={{ marginTop: "-10px" }}>Graphic Designer</p>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className={classes.slideCard}>
                <CardBody>
                  <GridContainer>
                    <p>"The Church of Divine Structure is not just a place; it’s a sanctuary of hope. Their dedicated healers, Dr. Dean and Rebecca, are true visionaries. Their blend of hands-on healing and personalized nutritional plans restored my faith in holistic healing. I’ve never felt more alive, and I owe it all to them."</p>
                  </GridContainer>
                  <GridContainer justify="flex-start" alignItems="center" space="5px">
                    <GridItem sm={2}>
                      <img src="/img/avatar2.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%" }}></img>
                    </GridItem>
                    <GridItem sm={7}>
                      <h6 className={classes.title} style={{ marginTop: "10px" }}>Ethan Bennett</h6>
                      <p style={{ marginTop: "-10px" }}>Teacher</p>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className={classes.slideCard}>
                <CardBody>
                  <GridContainer>
                    <p>"My journey with Church of Divine Structure has been nothing short of miraculous. Their natural remedies and spiritual healing methods worked wonders for my well-being. I found not just healing here but a sense of belonging. It's more than a Church; it’s a community that nurtures your soul."</p>
                  </GridContainer>
                  <GridContainer justify="flex-start" alignItems="center" space="5px">
                    <GridItem sm={2}>
                      <img src="/img/avatar2.jpg" style={{ width: "70px", height: "70px", borderRadius: "50%" }}></img>
                    </GridItem>
                    <GridItem sm={7}>
                      <h6 className={classes.title} style={{ marginTop: "10px" }}>Lily Rodriguez</h6>
                      <p style={{ marginTop: "-10px" }}>Nurse Practitioner</p>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </div>
          </Slider>
        </Container>
      </div>
      {/* testimonials end */}

      {/* grander world start */}
      <div className={classNames(classes.main, classes.mainRaised, classes.noMargin)} id="grander_world_title_section">
        <GridContainer justify="center" style={{marginTop: '150px'}}>
          <img src="./img/grander/grander_world/title.png"></img>
        </GridContainer>
        <GridContainer justify="center">
          <h5 className={classes.primaryTitle + ' ' + classes.boldText}>GRANDER® Water Technology </h5>
        </GridContainer>
        <GridContainer justify="center">
          <img src="./img/grander/grander_world/divider.png"></img>
        </GridContainer>
        <GridContainer justify="center" style={{marginBottom: '80px'}}>
          <h5 className={classes.secondaryTitle} style={{opacity: '0.8', marginTop: '20px'}}>Find the GRANDER® Sales Office in your country. </h5>
        </GridContainer>
      </div>
      <div className={classNames(classes.main, classes.mainRaised, classes.noMargin)} id="grander_world_section">

        <GridContainer justify="center" style={{}}>
          <img src="./img/grander/grander_world/back.png" style={{width: '100vw'}}></img>
          <CountryTarget left={15} top={10} />
          <CountryTarget left={17} top={35} />
          <CountryTarget left={27} top={60} />
          <CountryTarget left={25} bottom={0} />
          <CountryTarget left={65} top={10} />
          <CountryTarget left={46} top={30} />
          <CountryTarget left={71} bottom={50} />
          <CountryTarget left={52} bottom={10} />
        </GridContainer>
      </div>
      {/* grander world end */}

      {/* featured products start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="featured_products_section">
        <Container maxWidth={false} style={{ maxWidth: "90%", marginTop: '80px', marginBottom: '180px' }} >
          <GridContainer justify="center">
            <h5 className={classes.secondaryTitle } style={{fontSize: '15px', opacity: '0.8', marginTop: '20px', letterSpacing: '5px'}}>DRDEANHOWELL</h5>
          </GridContainer>
          <GridContainer justify="center">
            <h5 style={{fontSize: '40px', marginTop: '0px', letterSpacing: '3px'}}>Featured </h5>
            <h5 style={{fontSize: '40px', marginTop: '0px', letterSpacing: '3px', fontWeight: 'bold'}}>&nbsp;Products </h5>
          </GridContainer>
          <GridContainer spacing={8} style={{marginTop: '50px'}}>
            <GridItem sm={4}>
              <FeaturedProduct cost={25} fileName="pro1.png" />
            </GridItem>
            <GridItem sm={4}>
              <FeaturedProduct cost={25} fileName="pro2.png" />
            </GridItem>
            <GridItem sm={4}>
              <FeaturedProduct cost={25} fileName="pro3.png" />
            </GridItem>
          </GridContainer>
          <GridContainer spacing={8} style={{marginTop: '50px'}}>
            <GridItem sm={4}>
              <FeaturedProduct cost={25} fileName="pro4.png" />
            </GridItem>
            <GridItem sm={4}>
              <FeaturedProduct cost={25} fileName="pro5.png" />
            </GridItem>
            <GridItem sm={4}>
              <FeaturedProduct cost={25} fileName="pro6.png" />
            </GridItem>
          </GridContainer>
        </Container>
      </div>
      {/* featured products end */}

      {/* daily promotions start */}
      <div className={classNames(classes.main, classes.mainRaised, classes.noMargin)} id="daily_promotions_section">
        <Container maxWidth={false} style={{ maxWidth: "60%" }} >
          <div style={{backgroundColor: '#2E3192', height: '400px', width: '100%', borderRadius: '20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div style={{position: 'absolute', right: '0', zIndex: '0'}}>
              <img src="./img/grander/daily_promotions/mask.png" style={{width: '100%'}}></img>
            </div>
            <GridContainer justify="center">
              <h5 className={classes.primaryTitle + ' ' + classes.boldText} style={{color: 'white', zIndex: '5'}}>Daily Promotions </h5>
              <h5 className={classes.secondaryTitle + ' ' + classes.boldText} style={{color: 'white', zIndex: '5'}}>Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan posuere est quis egestas.</h5>
              <h5 className={classes.secondaryTitle + ' ' + classes.boldText} style={{color: 'white', zIndex: '5', marginBottom: '20px'}}>Donec nec odio non tellus convallis mattis a nec purus. Duis quis tortor elit. </h5>
            </GridContainer>
            <GridContainer justify="center">
              <Button className={classes.normalButton} color="info" round>Start now</Button>
            </GridContainer>
          </div>

          <div style={{ position: 'relative', marginTop: '80px', marginBottom: '80px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{flex: '0.1'}}>
                <img src="./img/grander/daily_promotions/medical.png" style={{width: '100%'}}></img>
              </div>
              <div style={{flex: '0.1'}}>
                <img src="./img/grander/daily_promotions/green.png" style={{width: '100%'}}></img>
              </div>
              <div style={{flex: '0.1'}}>
                <img src="./img/grander/daily_promotions/medicine.png" style={{width: '100%'}}></img>
              </div>
              <div style={{flex: '0.1'}}>
                <img src="./img/grander/daily_promotions/omega.png" style={{width: '100%'}}></img>
              </div>
              <div style={{flex: '0.1'}}>
                <img src="./img/grander/daily_promotions/medical_team.png" style={{width: '100%'}}></img>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* daily promotions end */}

      {/* psychological services start */}
      <div className={classNames(classes.main, classes.mainRaised, classes.defaultColoredSection, classes.noMargin)} id="psychological_services">
        <Container maxWidth={false} style={{ maxWidth: "60%", paddingTop: '80px', paddingBottom: '80px' }} >
          <GridContainer justify="center">
            <img src="./img/grander/psychological_services/title.png" style={{marginBottom: '20px'}}></img>
          </GridContainer>
          <GridContainer justify="center">
            <h5 className={classes.primaryTitle + ' ' + classes.boldText}>Psychological Services</h5>
          </GridContainer>
          <GridContainer alignItems="center" direction="column">
            <img src="./img/grander/grander_world/divider.png"></img>
            <h5 className={classes.secondaryTitle } style={{fontSize: '15px', opacity: '0.8', marginTop: '20px'}}>I OFFER PROFESSIONAL HELP TO THOSE WHO NEED EITHER SIMPLE ADVICE </h5>
            <h5 className={classes.secondaryTitle } style={{fontSize: '15px', opacity: '0.8', marginBottom: '50px'}}>OR REQUIRE PSYCHOLOGICAL TREATMENT</h5>
          </GridContainer>

          <GridContainer>
            <GridItem sm={4}>
              <GridContainer direction="column" alignItems="center">
                <img src="./img/grander/psychological_services/drug.png"></img>
                <h5 className={classes.secondaryTitle } style={{fontSize: '22px', fontWeight: '600', marginTop: '20px', marginBottom: '15px'}}>Drug Abuse Prevention</h5>
                <h5 className={classes.secondaryTitle } style={{fontSize: '15px', opacity: '0.8', textAlign: 'center', marginBottom: '15px'}}>Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.</h5>
                <img src="./img/grander/grander_world/arrow-right.png" style={{}}></img>
              </GridContainer>
            </GridItem>
            <GridItem sm={4}>
              <GridContainer direction="column" alignItems="center">
                <img src="./img/grander/psychological_services/treat.png"></img>
                <h5 className={classes.secondaryTitle } style={{fontSize: '22px', fontWeight: '600', marginTop: '20px', marginBottom: '15px'}}>Assessment Treatment</h5>
                <h5 className={classes.secondaryTitle } style={{fontSize: '15px', opacity: '0.8', textAlign: 'center', marginBottom: '15px'}}>Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.</h5>
                <img src="./img/grander/grander_world/arrow-right.png" style={{}}></img>
              </GridContainer>
            </GridItem>
            <GridItem sm={4}>
              <GridContainer direction="column" alignItems="center">
                <img src="./img/grander/psychological_services/psy.png"></img>
                <h5 className={classes.secondaryTitle } style={{fontSize: '22px', fontWeight: '600', marginTop: '20px', marginBottom: '15px'}}>Health Psychology</h5>
                <h5 className={classes.secondaryTitle } style={{fontSize: '15px', opacity: '0.8', textAlign: 'center', marginBottom: '15px'}}>Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus.</h5>
                <img src="./img/grander/grander_world/arrow-right.png" style={{}}></img>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </Container>
      </div>
      {/* psychological services end */}

      {/* what is start */}
      <div className={classNames(classes.main, classes.mainRaised, classes.noMargin)} id="what_is_section">
        <Container maxWidth={false} style={{ maxWidth: "80%", paddingTop: '100px', paddingBottom: '80px' }} >
          <GridContainer>
            <GridItem sm={5}>
              <img src="./img/grander/what_is/img.png"></img>
            </GridItem>
            <GridItem sm={7}>
              <img src="./img/grander/what_is/title.png"></img>
              <h5 className={classes.primaryTitle + ' ' + classes.boldText}>What is GRANDER® water?</h5>
              <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>Water possesses an immune system. The basic idea behind the method proposed by Johann Grander is to strengthen the self-cleansing effect and resistance of water by improving its structure. This creates a natural and stable immune system.</h5>0
              <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>The GRANDER® Water Revitalisation is based on the understanding of information transfer, or resonance.</h5>
              <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>The core element of GRANDER® water revitalisation is water. The active medium known as “information water” in the GRANDER® water revitalisation devices consists of water with a high internal order and stability – made according to the special process and knowledge of Johann Grander. Through its high internal order this information water is able to transfer natural information, or frequency, even to non-revitalised water without ever coming in contact with it. In this way, water is naturally stabilised and biologically improved.</h5>
              <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>Johann Grander’s goal was to make the properties of revitalised water – with all its positive effects for humans, animals and plants – transferrable to all water. It should be available for all those who drink it and use it in their everyday lives.GRANDER® Water Revitalisation devices work solely with natural energy, not requiring any electricity or other additives. The devices are maintenance and service-free. They are either installed directly in the main water supply, to the tap or hung in the sink or container. A discovery that has gone global and is implemented by many today.</h5>
              <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>GRANDER® revitalised water is characterized by:</h5>
              <ul style={{margin: '0px'}}>
                <li>
                  <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>adding to the pleasure of drinking through its subtle, good taste</h5>
                </li>
                <li>
                  <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>keeping fresh longer</h5>
                </li>
                <li>
                  <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>promoting a pleasant, gentle feeling for skin and hair while bathing and showering</h5>
                </li>
                <li>
                  <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>facilitating the strong growth of plants and beautiful flowers</h5>
                </li>
                <li>
                  <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>being preferred by animals instinctively</h5>
                </li>
                <li>
                  <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>giving food an exquisite, fresh and more intense taste while keeping it fresh longer</h5>
                </li>
                <li>
                  <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>protecting the heating system through cleaner heating water</h5>
                </li>
                <li>
                  <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>ensuring the reduced use of detergents and cleaning agents</h5>
                </li>
              </ul>
              <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>The effect of GRANDER® Water Revitalisation devices remains constant over time, regardless of the application purposes.</h5>
            </GridItem>
          </GridContainer>
        </Container>
      </div>
      {/* what is end */}

      {/* contact us start */}
      <div style={{position: 'relative'}}>
        <img src="./img/grander/contact_us/section.png" style={{width: '100vw'}}></img>
        <div style={{position: 'absolute', top: '0px', left: '0px', height: '100%'}}>
          <GridContainer alignItems="center" justify="center" style={{width: '100vw', height: '100%'}} direction="column">
            <h5 className={classes.primaryTitle + ' ' + classes.boldText + ' ' + classes.whiteText} style={{fontSize: '60px'}}>Daily Promotions</h5>
            <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight + ' ' + classes.whiteText}>Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan posuere est quis </h5>
            <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight + ' ' + classes.whiteText}>egestas. Donec nec odio non tellus convallis mattis a nec purus. Duis quis tortor elit.</h5>
            <Button className={classes.normalButton} color="primary">Conact us</Button>
          </GridContainer>
        </div>
      </div>
      {/* contact us end */}

      {/* get in touch start */}
      <div className={classNames(classes.main, classes.mainRaised, classes.defaultColoredSection, classes.noMargin)} id="psychological_services">
        <Container maxWidth={false} style={{ maxWidth: "70%", paddingTop: '80px', paddingBottom: '80px' }} >
          <GridContainer>
            <GridItem sm={4}>
              <GridContainer direction="column" justify="space-between" style={{height: '35vh'}}>
                <GridItem>
                  <img src="./img/grander/contact_us/title.png"></img>
                </GridItem>
                <GridItem>      
                  <h5 className={classes.primaryTitle + ' ' + classes.boldText}>Get In Touch</h5>
                </GridItem>
                <GridItem>      
                  <h5 className={classes.secondaryTitle + ' ' + classes.opacityText + ' ' + classes.secondaryLineHeight}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus vel mauris scelerisque accumsan. Maecenas quis nunc sed sapien dignissim pulvinar. Se d at gravida.</h5>
                </GridItem>
                <GridItem>
                  <img src="./img/grander/contact_us/semi_title.png"></img>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem sm={8}>
              <GridContainer direction="column" style={{height: '35vh'}} justify="space-between">
                <TextField
                  id="input-with-icon-textfield"
                  variant="outlined"
                  placeholder="Name"
                  style={{marginBottom: '20px'}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  style={{marginBottom: '20px'}}
                  id="input-with-icon-textfield"
                  variant="outlined"
                  placeholder="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  style={{marginBottom: '20px'}}
                  id="input-with-icon-textfield"
                  variant="outlined"
                  multiline
                  rows={4}
                  placeholder="Any Note For Us"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EditOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button className={classes.normalButton} color="primary" style={{width: '100%'}}>Send</Button>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </Container>
      </div>
      {/* get in touch end */}

      {/* footer start */}
      <div className={classNames(classes.main, classes.mainRaised)} id="footer_section">
        <div className={classes.sections}>
          <Container maxWidth={false} style={{ maxWidth: "80%" }} >
            {/* Footer */}
            <GridContainer justify="space-between" style={{ marginTop: "0px" }}>
              <GridItem sm={6}>
                <img src="/img/CoDS_Black_Logo.png"></img>
                <GridContainer>
                  <GridItem sm={8}>
                    <p style={{fontSize: '20px', marginTop: '30px'}}>The Essence of Life</p>
                    <p>The Essence of Life is your gateway to holistic health and wellness, offering healing solutions and a supportive community.</p>
                  </GridItem>
                </GridContainer>
                {/* <GridContainer style={{ color: "#2E3192", width: "50%" }} justify="space-between">
                  <GridItem>
                    <IconButton color="primary" ><TwitterIcon /></IconButton>
                    <IconButton color="primary" ><InstagramIcon /></IconButton>
                    <IconButton color="primary" ><FacebookIcon /></IconButton>
                    <IconButton color="primary" ><LinkedInIcon /></IconButton>
                    <IconButton color="primary" ><YouTubeIcon /></IconButton>
                  </GridItem>
                </GridContainer> */}
              </GridItem>
              <GridItem sm={2}>
                <h4 className={classes.title} style={{ color: "#170F49" }}>Landings</h4>
                <p><Link href="/" >Home</Link></p>
                <p><Link href="/" >Products</Link></p>
                <p><Link href="/" >Services</Link></p>
              </GridItem>
              <GridItem sm={2}>
                <h4 className={classes.title} style={{ color: "#170F49" }}>Company</h4>
                <p><Link href="/" >Home</Link></p>
                <p><Link href="/" >Careers</Link></p>
                <p><Link href="/" >Services</Link></p>
              </GridItem>

              <GridItem sm={2}>
                <h4 className={classes.title} style={{ color: "#170F49" }}>Resources</h4>
                <p><Link href="/" >Blog</Link></p>
                <p><Link href="/" >Products</Link></p>
                <p><Link href="/" >Services</Link></p>
              </GridItem>
            </GridContainer>

            {/* Footer */}
            {/* </div> */}
          </Container>
        </div>
      </div>
      <Grid container  >
        <Grid item xs={4} style={{display:"flex",justifyContent:'center'}}>
          <Typography>All rights reserved.</Typography>
        </Grid>
      </Grid>
      {/* footer end */}
    </div>
  );
}
