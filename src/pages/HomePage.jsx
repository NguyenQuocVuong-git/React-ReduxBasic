import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../component/Home/HobbyList';
import {addNewHobby, setActiveHobby} from '../actions/hobby';
import '../component/Home/HobbyList/HobbyList.css'


HomePage.propTypes = {
    
};

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000));
}
function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const state = useSelector(state => state);
    console.log("state: ", state);
    const dispatch = useDispatch();
    console.log('hobby List : ', hobbyList);
  
    const handleAddHobbyClick = () =>{
        const newId = randomNumber();
        //random id + title
        const newHobby = {
            // id : casual.uuid,
            // title : casual.title
            id : newId,
            title : `hobby ${newId}`
        }
        //dispath actiion leen store
        const action =  addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action =  setActiveHobby(hobby);
        dispatch(action);
    }   
     return (
        <div class="home-page">
            <h1>USEslect-useDispatch</h1>

            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList 
            hobbyList={hobbyList} 
            activeId={activeId}
            onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default HomePage;