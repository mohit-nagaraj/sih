import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {
  Container,
  Content2Xl,
  ContentWithVerticalPadding,
} from "components/misc/Layouts";
import tw from "twin.macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase, SectionDescription } from "components/misc/Typography";

import logo from "images/logo.svg";


/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;

const HeroRow = tw(
  Row
)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;

const TextColumn = tw(
  Column
)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(
  HeadingBase
)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const SecondaryButton = tw(
  ActionButton
)`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;

const sectionHighlight={
  backgroundColor:"#cab3f4",
  borderRadius: "30px",
};
const buttonStyle = {
  margin: "20px 10px",
  backgroundColor: "#6415FF",
  border: "2px solid #000000",
  borderRadius: "30px",
  color: "#F7FAFC",
  cursor: "pointer",
  display: "inline-block",
  fontWeight: "600",
  fontSize: "18px",
  padding: "5px 5px",
  lineHeight: "50px",
  textAlign: "center",
  textDecoration: "none",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
};
const centerFlex = { display: "flex", justifyContent: "center" };
const buttonStyle2 = {
  margin: "20px 10px",
  backgroundColor: "#6415FF",
  border: "0px",
  borderRadius: "10px",
  color: "#F7FAFC",
  cursor: "pointer",
  display: "inline-block",
  fontWeight: "600",
  fontSize: "18px",
  padding: "20px 20px",
  lineHeight: "50px",
  textAlign: "center",
  textDecoration: "none",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
};

const datePickerStyle = {
  display: 'block',
  margin:'20px 10px',
  borderRadius: "10px",
  padding: '10px', // Adjust the padding as needed
  backgroundColor: '#6415FF', // Change the text color
};
const textWhite={color:'#fff'};

/** */
export default ({
  features = null,
  primaryButtonUrl = "#landingPageDemos",
  primaryButtonText = "Get Started",
  secondaryButtonUrl = "#",
  secondaryButtonText = "GitHub",
  buttonRoundedCss = "",
  landingPages = {},
  innerPages = {},
  blocks = {},
  heading = "Insight Ink",
  description = "The proposed automated feedback system for the Press Information Bureau (PIB) aims to monitor media coverage across regional languages and video formats. It includes web crawlers to scan 200 regional media websites, an NLP-based analysis to categorize news stories by department and tonality, and real-time notifications for negative stories. Additionally, an OCR system will extract relevant clippings from e-papers, while YouTube videos will be analyzed using closed captioning or audio-to-text features. A user-friendly dashboard will allow PIB officers to access and filter information conveniently. This system will enhance the PIB's ability to track and respond to media coverage effectively.",
}) => {
  useEffect(() => {
    document.title = "Insight Ink";
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, []);

  const noOfLandingPages = 1;
  const noOfInnerPages = Object.keys(innerPages).length;
  const noOfComponentBlocks = Object.values(blocks).reduce(
    (acc, block) => acc + Object.keys(block.elements).length,
    0
  );

  features = features || [
    `${noOfLandingPages} Landing Page Demos`,
    `${noOfInnerPages} Inner Pages`,
    `${noOfComponentBlocks} Components`,
    "Uses TailwindCSS",
    "Fully Responsive",
    "Fully Customizable",
  ];
  const [dropdownValue, setDropdownValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = dateValue
      ? `${dateValue.getFullYear()}-${(dateValue.getMonth() + 1)
          .toString()
          .padStart(2, '0')}`
      : '';
    navigate('/dashboard');
    // Submit the data here
    console.log(dropdownValue,formattedDate);
  };
  
  return (
    <div style={{backgroundImage:'url(https://imagizer.imageshack.com/img923/9411/ohe9vb.png)', backgroundSize: "fit", backgroundRepeat: "no-repeat"}}>
      <AnimationRevealPage>
      <Container tw="-mx-8 -mt-8 pt-8 px-8" style={{backdropFilter:"blur(2px)"}}>
        <Content2Xl style={{padding:'0px 0px'}}>
          <NavRow>
            <LogoLink href="/">
              <img src={logo} alt="" />
              Team Innov8
            </LogoLink>
            <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12"></div>
          </NavRow>
          <HeroRow>
            <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description>{description}</Description>

              <Actions>
                <PrimaryButton href={primaryButtonUrl} css={buttonRoundedCss}>
                  {primaryButtonText}
                </PrimaryButton>
                <SecondaryButton href="https://github.com/">
                  {secondaryButtonText}
                </SecondaryButton>
              </Actions>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src='https://imagizer.imageshack.com/img922/3504/XoNdUE.jpg' />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
          <SectionContainer id="landingPageDemos" style={sectionHighlight}>
            <SectionHeading>Enter the details</SectionHeading>
            <div style={centerFlex}>
            <SectionDescription>Select the source for gathering information. Use the date picker to search for the particular date. Must enter all the fields. It takes time while we get the information for you</SectionDescription>
            </div>
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div style={centerFlex}>
                  <select
                    value={dropdownValue}
                    onChange={(e) => setDropdownValue(e.target.value)}
                    style={buttonStyle2}
                  >
                    <option value="">Select News</option>
                    <option value="ndtv" >NDTV (English)</option>
                    <option value="hindustan">Hindustan (Hindi)</option>
                    <option value="prajavani">Prajavani (Kannada)</option>
                    <option value="dinamalar">Dinamalar (Tamil)</option>
                    <option value="mathrubhumi">Mathrubhumi (Malayalam)</option>
                    <option value="eenadu">Eenadu (Telugu)</option>
                  </select>
                  <div style={datePickerStyle}>
                  <div style={textWhite}>Enter date</div>
                  <DatePicker
                    className="datepicker"
                    selected={dateValue}
                    onChange={(date) =>setDateValue(date)}
                  />
                  </div>
                  <div>
                    <button type="submit" className="button-74" style={buttonStyle}>
                      
                      <img src="https://imagizer.imageshack.com/img924/2614/Lkco5F.png" alt="" width={60} height={60}></img>
                    </button>
                  </div>
                  </div>
              </form>
            </div>
          </SectionContainer>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
    </div>
    
  );
};
/**const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')}`; */

/**import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
import { ReactComponent as HandleIcon } from "images/handle-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

import heroScreenshotImageSrc from "images/demo/MainLandingPageHero.png";
import logo from "images/logo.svg";
import useInView from "helpers/useInView";

/* Hero 
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;

const UpdateNotice = tw(Column)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;

const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const SecondaryButton = tw(
  ActionButton
)`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-primary-900`;
const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;

const PreviewCards = tw.div`flex flex-wrap -mr-12`;
const PreviewCardContainer = tw.div`mt-24 mx-auto md:mx-0 max-w-lg w-full md:w-1/2 lg:w-1/3 pr-12`;
const PreviewCard = tw(motion.a)`block rounded-lg shadow-raised`;
const PreviewCardImageContainer = tw.div`rounded-t-lg border-0 border-b-0`;
const PreviewCardImage = styled(motion.div)`
  ${props => css`background-image: url("${props.$imageSrc}");`}
  ${tw`h-128 md:h-144 bg-cover bg-left-top`}
`;
const PreviewButton = tw(PrimaryButtonBase)`w-full rounded-b-lg rounded-t-none py-5 font-semibold`;

const ComponentsContainer = tw.div`mt-24`;
const ComponentsType = tw.h3`text-4xl font-black text-primary-500 border-b-4 border-primary-500 inline-block`;
const Components = tw.div``;
const Component = tw.div`mt-12 border rounded-lg bg-white`;
const ComponentHeading = tw.div`px-8 py-5 border-b flex flex-col sm:flex-row justify-between items-center`;
const ComponentName = tw.h6`text-lg`;
const ComponentPreviewLink = tw.a`mt-4 sm:mt-0 text-primary-500 hocus:text-primary-900 transition duration-300 font-semibold flex items-center`;
const ComponentContent = tw.div`flex justify-between overflow-hidden rounded-b-lg bg-gray-600 relative`;
const ResizableBox = styled(Rnd)`
  ${tw`relative! bg-white pr-4`}
  .resizeHandleWrapper > div {
    ${tw`w-4! right-0!`}
  }
`;
const ResizeHandleButton = tw.button`cursor-col-resize focus:outline-none w-4 border-l bg-gray-100 absolute right-0 inset-y-0`;

export default ({
  features = null,
  primaryButtonUrl = "#landingPageDemos",
  primaryButtonText = "Explore Demos",
  secondaryButtonUrl = "#componentDemos",
  secondaryButtonText = "View Components",
  buttonRoundedCss = "",
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks,
  heading = "Free Modern React Templates for every need.",
  description = "Easily customizable modern React UI Templates and Components built using TailwindCSS which are also lightweight and simple to setup. All components are modular and fully responsive for great mobile experience as well as big desktop screens.  Brand Colors are also fully customizable. Free for personal as well as commercial use."
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   
  useEffect(() => {
    window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");
  }, [])

  const previewImageAnimationVariants = {
    rest: {
      backgroundPositionY: "0%"
    },
    hover: {
      backgroundPositionY: "100%",
      transition: { type: "tween", ease: "linear", duration: 5 }
    }
  };

  const noOfLandingPages = Object.keys(landingPages).length;
  const noOfInnerPages = Object.keys(innerPages).length;
  const noOfComponentBlocks = Object.values(blocks).reduce((acc, block) => acc + Object.keys(block.elements).length, 0);

  features = features || [
    `${noOfLandingPages} Landing Page Demos`,
    `${noOfInnerPages} Inner Pages`,
    `${noOfComponentBlocks} Components`,
    "Uses TailwindCSS",
    "Fully Responsive",
    "Fully Customizable"
  ];

  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src={logo} alt="" />
              Treact
            </LogoLink>
            <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
              <NavLink target="_blank" href="https://owaiskhan.me/post/free-tailwindcss-react-ui-kit">
                License & Usage
              </NavLink>
              <NavLink target="_blank" href="https://owaiskhan.me">
                Who Am I ?
              </NavLink>
              <NavLink target="_blank" href="https://twitter.com/owaiswiz">
                Twitter
              </NavLink>
              <NavLink target="_blank" href="mailto:owaiswiz@gmail.com">
                Hire Me!
              </NavLink>
              <div tw="md:hidden flex-100 h-0"></div>
              <PrimaryNavLink target="_blank" href="https://gum.co/QaruQ">
                Download Now
              </PrimaryNavLink>
            </div>
          </NavRow>
          <HeroRow>
            <UpdateNotice>
              <UpdateNoticeIcon />
              Last updated on 10th September, 2022 - Added support for React v18 and TailwindCSS v3!
            </UpdateNotice>
            <TextColumn>
              <Heading as="h1">{heading}</Heading>
              <Description>{description}</Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
              <Actions>
                <PrimaryButton href={primaryButtonUrl} css={buttonRoundedCss}>
                  {primaryButtonText}
                </PrimaryButton>
                <SecondaryButton href={secondaryButtonUrl}>{secondaryButtonText}</SecondaryButton>
              </Actions>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={heroScreenshotImageSrc} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
          <SectionContainer id="landingPageDemos">
            <SectionHeading>Landing Pages</SectionHeading>
            <SectionDescription>
              We have {noOfLandingPages} premade landing pages. Click on the "View Live Demo" button to see them in
              action. Customizing or Creating your own custom landing page is really simple by using our UI components.
            </SectionDescription>
            <PreviewCards>
              {Object.entries(landingPages).map(([pageName, page], index) => (
                <PreviewCardContainer key={index}>
                  <PreviewCard initial="rest" animate="rest" whileHover="hover" href={page.url} target="_blank">
                    <PreviewCardImageContainer>
                      <PreviewCardImage
                        transition={{ type: "tween" }}
                        variants={previewImageAnimationVariants}
                        $imageSrc={page.imageSrc}
                      />
                    </PreviewCardImageContainer>
                    <PreviewButton>View Live Demo</PreviewButton>
                  </PreviewCard>
                </PreviewCardContainer>
              ))}
            </PreviewCards>
          </SectionContainer>
          <SectionContainer>
            <SectionHeading>Inner Pages</SectionHeading>
            <SectionDescription>
              We also provide {noOfInnerPages} additional inner pages for your various needs like a signup, login,
              pricing, about us, contact, blog etc. To view them in action click the "View Live Demo" button.
            </SectionDescription>
            <PreviewCards>
              {Object.entries(innerPages).map(([pageName, page], index) => (
                <PreviewCardContainer key={index}>
                  <PreviewCard initial="rest" animate="rest" whileHover="hover" href={page.url} target="_blank">
                    <PreviewCardImageContainer>
                      <PreviewCardImage
                        transition={{ type: "tween" }}
                        variants={!page.scrollAnimationDisabled && previewImageAnimationVariants}
                        $imageSrc={page.imageSrc}
                      />
                    </PreviewCardImageContainer>
                    <PreviewButton>View Live Demo</PreviewButton>
                  </PreviewCard>
                </PreviewCardContainer>
              ))}
            </PreviewCards>
          </SectionContainer>

          <SectionContainer id="componentDemos">
            <SectionHeading>Component Blocks</SectionHeading>
            <SectionDescription>
              We also provide {noOfComponentBlocks} components along with the premade landing pages so you can create
              your own landing page within minutes as you see fit. You can combine these components to create 1000s of
              unique attractive web pages.
              <span tw="block text-sm text-gray-500 mt-2">
                (Preview Panel below inspired by Tailwind UI)
              </span>
            </SectionDescription>
            <BlocksRenderer blocks={Object.values(blocks)} />
          </SectionContainer>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};

const BlocksRenderer = ({ blocks }) => {
  const [lastVisibleBlockIndex, setLastVisibleBlockIndex] = useState(0);

  const updateLastVisibleBlockIndex = index => {
    console.log("LAST WAS ", lastVisibleBlockIndex);
    if (index > lastVisibleBlockIndex) setLastVisibleBlockIndex(index);
  };

  return (
    <ComponentsContainer>
      {blocks.map(
        (block, index) =>
          lastVisibleBlockIndex + 1 >= index && (
            <Block key={index} components={block} notifyIsVisible={() => updateLastVisibleBlockIndex(index)} />
          )
      )}
    </ComponentsContainer>
  );
};

const Block = ({ notifyIsVisible, components }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) notifyIsVisible();
  }, [inView, notifyIsVisible]);

  const ResizeHandle = (
    <ResizeHandleButton>
      <HandleIcon tw="w-4 h-4 text-gray-600" />
    </ResizeHandleButton>
  );

  const componentBlockRefs = {};

  const updateComponentBlockIframeHeight = iframe => {
    iframe.style.height = "auto";
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  };

  return (
    <div ref={ref} tw="mt-32">
      <ComponentsType>{components.type}</ComponentsType>
      <Components>
        {Object.values(components.elements).map((component, componentIndex) => (
          <Component key={componentIndex}>
            <ComponentHeading>
              <ComponentName>{component.name}</ComponentName>
              <ComponentPreviewLink className="group" href={component.url} target="_blank">
                View Live Demo{" "}
                <ArrowRightIcon tw="transition duration-300 transform group-hover:translate-x-px ml-2 w-4 h-4" />
              </ComponentPreviewLink>
            </ComponentHeading>
            <ComponentContent>
              <ResizableBox
                minWidth={310}
                default={{
                  width: "100%",
                  height: "100%"
                }}
                bounds="parent"
                disableDragging={true}
                enableResizing={{ right: true }}
                resizeHandleComponent={{ right: ResizeHandle }}
                resizeHandleWrapperClass={`resizeHandleWrapper`}
                onResize={() => updateComponentBlockIframeHeight(componentBlockRefs[component.url])}
              >
                <iframe
                  src={component.url}
                  title="Hero"
                  width="100%"
                  ref={ref => (componentBlockRefs[component.url] = ref)}
                  onLoad={e => updateComponentBlockIframeHeight(e.target)}
                />
              </ResizableBox>
            </ComponentContent>
          </Component>
        ))}
      </Components>
    </div>
  );
};
 */
