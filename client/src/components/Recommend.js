import React, { useEffect, useState } from 'react'
import Gridcontainer from './Gridcontainer.js'


function Recommend() {
    const [ads, setAds] = useState(null)

    useEffect(() => {
        console.log("effect used")
        const getAds = () => {
            console.log("inside get ads func")
            fetch("http://localhost:5000/adds/get/recommend", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((response) => {
                    console.log("got ads response")
                    if (response.status === 200) return response.json();
                    throw new Error("authentication has been failed!");
                }).catch((err) => {
                    console.log(err);
                })
                .then((resObject) => {
                    console.log(resObject.ads)
                    setAds(resObject.ads);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getAds();
    }, []
    );

    return (
        <div className='bodyContainer'>
            <span className='bodySpan'>Recommend</span>
            {console.log("inside return",ads)}
            {
                ads &&
                <Gridcontainer adsToPublish={ads} />
            }
        </div>
    )
}

export default Recommend
