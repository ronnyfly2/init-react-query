import { FC } from 'react'
import { Outlet } from 'react-router'

import styled from '@emotion/styled'
import { Box } from '@mui/material'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`


export const App: FC = () => {
  
  return (
    <>
      <Container>
        <Box>
          <Outlet />
        </Box>
      </Container>
    </>
  )
}