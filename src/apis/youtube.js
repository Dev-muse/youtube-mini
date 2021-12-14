import axios from 'axios';
require('dotenv').config()


console.log(process.env)


const KEY = process.env.REACT_APP_YOUTUBE_API;


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }

});
