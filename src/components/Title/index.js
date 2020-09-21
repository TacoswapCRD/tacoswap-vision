import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const LogoText = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 12px;
`

const UniIcon = styled(Link)`
  font-size: 18px;
  letter-spacing: -9px;
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <UniIcon id="link" onClick={() => history.push('/')}>
            <span role="img" aria-label="Taco Logo">
              🌮🌮
            </span>
          </UniIcon>
          <LogoText>TacoSwap</LogoText>
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
