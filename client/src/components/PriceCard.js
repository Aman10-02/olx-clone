import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux';
import { selectUserFavourite, selectUserName, setUserLogin} from '../features/user/userSlice';

function PriceCard(props) {
    const favourite = useSelector(selectUserFavourite);
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    // console.log("ads page",username)
    // console.log("ads page fav", favourite)
    const setfav = async () => {
        const response = await fetch("http://localhost:5000/adds/favourite", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                Accept: "application/json",
                // "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": true,
            },
            body: props.adDetail._id,
        })
        const data = await response.json();
        console.log("from fav func",data.updatedUser)
        dispatch(setUserLogin({
            googleId: data.updatedUser.googleId,
            name: data.updatedUser.username,
            photo: data.updatedUser.image,
            favourite: data.updatedUser.favourite,
        })) 

        // // console.log("favourite after dispatch",favourite)
        // console.log("Adspage:", JSON.stringify(props.adDetail));
        // ? (setFav("solid")) : (setFav("regular")) 
        // )
        // window.location.reload();
    };


  return (
    <Infos>
      <Head>
        <span>₹ {props.adDetail.price}</span>
        { username ? (
          favourite && (favourite.includes(props.adDetail._id)) ?
            <i className={`fa-solid fa-heart fa-xl`} onClick={setfav}></i> :

            <i className={`fa-regular fa-heart fa-xl`} onClick={setfav}></i>
          ) : (
            <i className={`fa-regular fa-heart fa-xl`} onClick={() => {alert("login to continue")}}></i>
          )
        }
      </Head>
      <Profile>
        <h5>{props.adDetail.title}</h5>
      </Profile>
    </Infos>
  )
}

export default PriceCard

const Infos = styled.div`
  margin: 1rem 0 0 0;
  padding: 1rem 0.8rem;
  border: solid;
  width: 35;
  /* background-color: yellowgreen; */
`
const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
   margin-bottom: 0.5rem;
   font-size: 1.2rem;
   font-weight: bold;
   span {
      font-size: min(175%, 30px);
      /* font-weight: 500; */
      /* font-size: max(4vw,25px); */
      color: black;
      max-lines: 1;
  }
  i:last-child {
    cursor: pointer;
  }
`
const Profile = styled.div`
  width: 100%;
  display: flex;
  /* background-color: #9f9d9d; */
  align-items: center;
  margin-bottom: 0.5rem;
  h5 {
      font-size: min(150%, 25px);
      font-weight: 500;
      /* font-size: max(4vw,25px); */
      color: black;
  }
`