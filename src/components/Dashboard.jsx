import React,{useContext} from 'react'
import axios from 'axios'
import Context from '../context'
import Controls from '../utils/Controls'
import RoomInfo from './RoomInfo'

const token = 'Token afc14f3d4808a91607f2e54e6072ab7de7d1c4e5';
const headers = {
  headers: { 'Content-Type': 'application/JSON', Authorization: token }
};


const Dashboard = () =>{
    const {state,dispatch} = useContext(Context)

    console.log("DASHBARD: ",state)
    
    const handleControls = (e) =>{
        const next_room_id =state && state.mapGraph[state.room_id][1][e.target.value.toString()];
        console.log(next_room_id)

            axios
              .post(
                'https://lambda-treasure-hunt.herokuapp.com/api/adv/move/',
                {
                  direction:e.target.value.toString(),
                  next_room_id:next_room_id.toString()
                },
                headers
              )
              .then(res => {
                debugger
                dispatch({ type: "FETCH_MOVE", payload: res.data });
              });
      }
    
    return(
        <>
            <Controls handleClick={handleControls}/>
            <RoomInfo/>
        </>
    )
}

export default Dashboard