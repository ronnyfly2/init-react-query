import { FC } from "react";

import { UserList } from "../components/UserList"
import { ButtonLink } from "../components/ButtonLink"

import { Grid } from "@mui/material"
import styled from '@emotion/styled'

const Header = styled.header`
  display:flex;
  justify-content:space-between;
  flex-direction: row;
  max-width: 845px;
  overflow-x: auto;
  width: 100%;
  padding: 5px 0;
  margin: 5px 0;
`

const Title = styled.h1`
  color: white;
  margin: 10px 0;
  text-align: left;
  font-size: 16px;
`

export const HomeView: FC = () => {

  return (
    <>
      <Header>
        <Title>
          List Users
        </Title>
        <ButtonLink link={'/create-user'} title={'Add user'} />
      </Header>
      <Grid item xs={12}>
        <UserList user={[]} />
      </Grid>
    </>
  )
}

export default HomeView