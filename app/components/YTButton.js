import React from 'react';
import classNames from 'classnames';

import { compose, setDisplayName } from 'recompose';

import is2017NewDesign from '_util/is2017NewDesign';

import styles from './YTButton.scss';

const CLASS_NAME_BASE = is2017NewDesign() ? 'ytd-button-renderer' : '';
const PROPS = is2017NewDesign() ? { is: 'paper-icon-button-light' } : {};

const YTButton = ({ is, className, ...restProps }) => (
  <button
    is={is}
    class={classNames(CLASS_NAME_BASE, styles.component, className)}
    {...PROPS}
    {...restProps}
  />
);

export default compose(setDisplayName('YTButton'))(YTButton);
