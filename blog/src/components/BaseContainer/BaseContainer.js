import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'

export const BaseContainer = ({ children, flex = false, ...rest }) => {
    let Componet = flex ? Flex : Box
    return <Componet {...rest}>{children}</Componet>
}

BaseContainer.propTypes + {
    flex: PropTypes.bool,
    as: PropTypes.string,
    children: PropTypes.node.isRequired
}