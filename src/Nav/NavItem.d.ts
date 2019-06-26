import * as React from 'react';
import { StandardProps } from '../@types/common';
import { IconProps } from '../Icon/Icon.d';

export interface NavItemProps extends StandardProps {
  /** Activation status */
  active?: boolean;

  /** Disabled status */
  disabled?: boolean;

  /** divier for nav item */
  divider?: boolean;

  /** display panel */
  panel?: boolean;

  /** Sets the icon for the component */
  icon?: React.ReactElement<IconProps>;

  /** Primary content */
  children?: React.ReactChildren;

  /** The value of the current option */
  eventKey?: any;

  /** Whether NavItem have a tooltip  */
  hasTooltip?: boolean;

  /** You can use a custom element type for this component */
  componentClass?: React.ElementType;

  /** Select the callback function that the event triggers. */
  onSelect?: (eventKey: any, event: React.SyntheticEvent<any>) => void;
}

declare const NavItem: React.ComponentType<NavItemProps>;

export default NavItem;
