import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BaseButton } from './BaseButton'

const StyledButton = styled(BaseButton)`
    // inject theme styles here laterzzz
`

export const IconButton = styled(({ icon, ...rest }) => {
    let clone = React.cloneElement(icon, rest)
    return <StyledButton {...rest} className={rest.className}>{clone}</StyledButton> 
})`
    //Wrapped the styled icon passed in as a prop
`

IconButton.propTypes= {
    icon: PropTypes.node.isRequired
}