import * as React from "react";
import * as PropTypes from 'prop-types'

import { withRouter } from 'react-router'
interface LinkButtonProps {
    [x: string]: any; history: any; location: any; match: any; staticContext: any; to: any; onClick: any;
}
const LinkButton = (props: LinkButtonProps) => {
    const {
        history,
        location,
        match,
        staticContext,
        to,
        onClick,
        // ⬆ filtering out props that `button` doesn’t know what to do with.
        ...rest
    } = props
    return (
        <button
            {...rest} // `children` is just another prop!
            onClick={(event) => {
                onClick && onClick(event)
                history.push(to)
            }}
        />
    )
}

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)