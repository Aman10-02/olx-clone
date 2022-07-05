import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Gridcontainer from './Gridcontainer'


function Others() {

    const seller = useLocation().state;
    const [sellerAds, setSellerAds] = useState(null);
    const [soldAds, setSoldAds] = useState(null);
    console.log("others page", seller)
    useEffect(() => {
        const getsellerAds = async () => {
            const response = await fetch("http://localhost:5000/adds/seller", {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    // "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": true,
                },
                body: JSON.stringify(seller),
            })
            const data = await response.json();
            console.log("from getsellerAdds", data);
            setSellerAds(data.sellerAdds);
            setSoldAds(data.soldadds);
        }
        getsellerAds();
    }, [seller]);
    return (
        <div className="bodyContainer">
            <Profile>
                <ImgContainer>
                    <ProfileImg>
                        <img src={seller.image} alt="" />
                    </ProfileImg>
                </ImgContainer>
                <h3>{seller.username}</h3>
            </Profile>
            <span className="bodySpan">Published Ads</span>
            {sellerAds && 
             <Gridcontainer adsToPublish = {sellerAds} /> }
            <span className="bodySpan">Sold Ads</span>
            {soldAds && 
             <Gridcontainer adsToPublish = {soldAds} /> }
        </div>
    )
}

export default Others

const Profile = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem;
    background-color: #9f9d9d;
    align-items: center;
    margin-bottom: 32px;
    h3 {
        font-size: min(5vw, 40px);
        font-weight: 500;
        text-transform: capitalize;
        /* font-size: max(4vw,25px); */
    }
`
const ImgContainer = styled.div`
    width: 20%;
    max-width: 150px;
    padding-top: min(20%, 150px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* background-color: green; */
    margin-right: 5vw;
`
const ProfileImg = styled.div`
    width: 100%;
    height: 100%;
    /* border: solid; */
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0.5rem; */
    position: absolute;
    top: 0;
    left: 0;
    /* background-color: yellow; */
    img {
        width: inherit;
        height: inherit;
        contain: content;
        border-radius: inherit;
    }
`
