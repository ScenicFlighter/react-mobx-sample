import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'

import '@trendmicro/react-sidenav/dist/react-sidenav.css'

const MySideNav = props => (
  <SideNav
    onSelect={selected => {
      const to = `/${selected}`
      if (props.location.pathname !== to) {
          props.history.push(to)
      }
  }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="about">
      <NavItem eventKey="about">
        <NavIcon>
          <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
        </NavIcon>
        <NavText>
              Home
        </NavText>
      </NavItem>
      <NavItem eventKey="blog">
        <NavIcon>
          <i className="fa fa-fw fa-tasks" style={{ fontSize: '1.75em' }} />
        </NavIcon>
        <NavText>
              Devices
        </NavText>
      </NavItem>
    </SideNav.Nav>
  </SideNav>
)

export default MySideNav
