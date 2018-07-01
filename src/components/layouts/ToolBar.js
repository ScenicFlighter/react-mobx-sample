import React from 'react'
import { Toolbar, ToolbarItem, ToolbarTitle, ToolbarOption, Checkbox, OverflowMenu } from 'carbon-components-react'

const MyToolbar = props => (
  <Toolbar className="some-class">
    <ToolbarItem type="search" placeHolderText="Search" />
    <ToolbarItem>
      <OverflowMenu iconName="filter" floatingMenu>
        <ToolbarTitle title="FILTER BY" />
        <ToolbarOption>
          <Checkbox
            className="some-class"
            id="opt-1"
            labelText="Filter option 1"
          />
        </ToolbarOption>
        <ToolbarOption>
          <Checkbox
            className="some-class"
            id="opt-2"
            labelText="Filter option 2"
          />
        </ToolbarOption>
        <ToolbarOption>
          <Checkbox
            className="some-class"
            id="opt-3"
            labelText="Filter option 3"
          />
        </ToolbarOption>
      </OverflowMenu>
    </ToolbarItem>
  </Toolbar>
)

export default MyToolbar
