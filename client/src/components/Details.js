import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { selectUserGoogleId } from '../features/user/userSlice'
import BuyerGrid from './BuyerGrid'
import InfoCard from './InfoCard'
import PriceCard from './PriceCard'

function Details() {
  const googleId = useSelector(selectUserGoogleId);
  const adDetail = useLocation().state;
  console.log("google id:",googleId);
  console.log("adDetail:", adDetail)
  console.log("details page", adDetail)
  return (
    <div className="bodyContainer">
      <Container>
        <ImgContainer>
          <Img src={adDetail.image}  onClick={() => window.open(adDetail.image)} />
        </ImgContainer>
        <Description>
          <span>Description</span>
          <Text>
            {adDetail.description} 
          </Text>
        </Description>
      </Container>

      <CardContainer>
      {(adDetail.createdbygoogleId !== googleId) &&
        <InfoCardContainer>
          <InfoCard add={adDetail}/>
        </InfoCardContainer>
      }
        <PriceCardContainer>
          <PriceCard adDetail={adDetail} />
        </PriceCardContainer>
      </CardContainer>

     { googleId && (adDetail.createdbygoogleId === googleId) &&
      <>{ adDetail.sold ?
          <span className='bodySpan'>Sold To</span> : 
          <span className='bodySpan'>Buyers Interested</span>
        }
        <BuyerGrid add = {adDetail}/>
      </>}
    </div>
  )
}

export default Details
const Container = styled.div`
  width: 100%;
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* box-shadow: 4px 25px #cccccc; */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: none;
  }

`
const ImgContainer = styled.div`
  width: 70%;
  max-height: 300px;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid #cccccc;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
    max-height: 200px;
  }
  /* overflow: hidden; */

`
const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: 300px;
  object-fit: cover;
  cursor: pointer;
  @media (max-width: 768px) {
    max-height: 200px;
  }
`

const Description = styled.div`
  width: 28%;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  @media (max-width: 768px) {
    width: 100%;
    max-height: 200px;
  }

  border: solid #cccccc;
  span {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 0.2rem;
  }
`
const Text = styled.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`
const CardContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: yellow; */
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 610px) {
    flex-direction: column;
  }
`
const InfoCardContainer = styled.div`
  width: 48%;
  @media (max-width: 610px) {
    width: 100%;
  }

`
const PriceCardContainer = styled.div`
  width: 48%;
  @media (max-width: 610px) {
    width: 100%;
  }
`