import config from '../../config/config';
import axios from 'axios';

 const TeamService  = {

  getTeam : async (teamId) => {
    let endpoint = `${config.apiURL}/teams`;
    if(teamId){
      endpoint += `/${teamId}`;
    }

    const response = await axios.get(endpoint);
    return response;
  },

  getUser : async (userId) => {
    let endpoint = `${config.apiURL}/users`;
    if(userId){
      endpoint += `/${userId}`;
    }

    const response = await axios.get(endpoint);
    return response;
  }
}

export default TeamService;