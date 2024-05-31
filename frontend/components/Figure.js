import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  max-width: 75%;

  figcaption {
    font-style: italic;
  }
`

export default function Figure({imageURL, copyright, date, caption}) {
  return (
        <StyledFigure>
          <img src={imageURL} />
          <figcaption>
            The Photo of the Day by {copyright} on {date} 
          </figcaption>
        </StyledFigure>
  )
}