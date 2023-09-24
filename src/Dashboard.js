import React, { useState } from "react";
import ClickOutside from "react-click-outside";
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';
import './Dashboard.css';
import TableTable from "./table";
//provide basic inline styling for the page
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const StyledSideNav = styled(SideNav)`
  background-color: #111547; /* Replace with your desired background color */
`;

StyledSideNav.defaultProps = SideNav.defaultProps;




const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="dashboard-container">
      <StyledSideNav
        onSelect={(selected) => {
          // Add your code here
        }
      }
      className={expanded ? 'navbar expanded' : 'navbar'}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Charts</NavText>
          </NavItem>
          <NavItem eventKey="contact">
            <NavIcon>
              <i className="fa fa-fw fa-envelope" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Contact us</NavText>
          </NavItem>
          <NavItem eventKey="settings">
            <NavIcon>
              <i className="fa fa-fw fa-cog" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Settings</NavText>
          </NavItem>
        </SideNav.Nav>
      </StyledSideNav>
      <ClickOutside
        onClickOutside={() => {
          setExpanded(false); // Update the expanded state here
        }}
      >
        <StyledSideNav
          expanded={expanded}
          onToggle={(expanded) => {
            setExpanded(expanded); // Update the expanded state here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Charts</NavText>
            </NavItem>
            <NavItem eventKey="contact">
              <NavIcon>
                <i
                  className="fa fa-fw fa-envelope"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Contact us</NavText>
            </NavItem>
            <NavItem eventKey="settings">
              <NavIcon>
                <i
                  className="fa fa-fw fa-cog"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Settings</NavText>
            </NavItem>
          </SideNav.Nav>
        </StyledSideNav>
      </ClickOutside>
      
      <section  className={`section ${expanded ? 'pushed' : ''}`}>
      <section className="section-content">
      <h1>Article Dashboard</h1>

      {/* Category filter */}
        <TableTable/>
      </section>
      </section>
    </div>
    
  );
};

export default Dashboard;

/**<td>{article.content.text.length>=50? article.content.text.substring(0, 50)+"...":article.content.text}</td> */
