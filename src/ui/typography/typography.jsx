import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

import './typography.css';

const Typography = ({ type = 'text', tagName = 'div', children, classes, ...other }) => {
    return React.createElement(
        tagName,
        {
            className: `${classNames(type, classes)}`,
            ...other
        },
        children
    );
}

Typography.propTypes = {
    type: PropTypes.oneOf([
        'h1',
        'h2',
        'headline',
        'text',
        'textLink',
        'caption'
    ]),
    tagName: PropTypes.string,
    classes: PropTypes.string,
    children: PropTypes.node
}

export default Typography;
