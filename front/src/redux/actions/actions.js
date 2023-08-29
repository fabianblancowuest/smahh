import {SIGN_UP, LOG_IN, LOG_OUT} from "./types";
import axios from "axios"

export const signUp = () => { //LocalHost Request
    return async (dispatch) => {
       try {
 
          return {
             type: SIGN_UP,
             payload: ""
          }
       } catch (error) {
 
       }
    }
 }

export const logIn = (userData) => { //LocalHost Request
    const URL = 'http://localhost:3001/login'
    
    return async (dispatch) => {
       try {
          const { data } = await axios.post(URL, userData)
          dispatch({
             type: LOG_IN,
             payload: data 
          });
       } catch (error) {
          alert("An error ocurred" + error.response.data.error);
       }
    }
 }