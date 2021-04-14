import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import '../../index.scss'
import './TeamDetail.css';
import Table from '../../core/components/form/Table/Table';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GroupIcon from '@material-ui/icons/Group';
import TeamService from '../../core/services/Team';

export default function TeamDetail({match}) {
  
  const { id } = match.params;
  const columns = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Display Name",
      accessor: "displayName",
    }
  ];
  
  const [users, setUsers] = useState([]);
  const [teamLead, setTeamLead] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      //get all info about the team
      const teamUsers = await TeamService.getTeam(id);
      //get all user info
      const promises = teamUsers.data.teamMemberIds.map(user => TeamService.getUser(user).then(({data})=>data));
      const allUsers = await Promise.all(promises);
      //get team lead info
      const teamLead = await TeamService.getUser(teamUsers.data.teamLeadId);

      setTeamLead(teamLead.data);
      setUsers(allUsers);
      setLoadingData(false);
    };
 
    if (loadingData) {
      fetchData();
    }
  }, [loadingData, id]);
 
  return (
    <div className="container">
      <div className="painel">
        <div className="conten-detailt">
          <div className="header">
            <h2 className="title">Teams Details <GroupIcon></GroupIcon></h2>   
          </div>
          
          {loadingData ? (
            <p>Loading Please wait...</p>
          ) : (
            <div>
              <br></br>
              <p className="teamLead"><b>Team Lead:</b> {teamLead.firstName} {teamLead.lastName}</p>
              <br></br>

              <div className="header-sub">
                <h2 className="title">Members</h2>            
              </div>
              <Table
                originalColumns={columns}
                originalData={users}
              />
              <br></br>
              <Link to="/team"><ArrowBackIcon></ArrowBackIcon></Link>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}