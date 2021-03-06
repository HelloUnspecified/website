import React, { PureComponent, Fragment } from 'react';

import { withRouteData } from 'react-static';
import convert from 'htmr';

export default withRouteData(terms => (
    <div className="defaultLayout">{convert(terms.contents)}</div>
));
