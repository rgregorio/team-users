import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import '../../index.scss'
import './Team.css';
import GroupIcon from '@material-ui/icons/Group';
import Table from '../../core/components/form/Table/Table';
import VisibilityIcon from '@material-ui/icons/Visibility';
import TeamService from '../../core/services/Team';

export default function Team() {

  const columns = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "",
      accessor: "link",
      Cell: ({ row }) => (<Link to={`/team/${row.values.id}`}><VisibilityIcon></VisibilityIcon></Link>)
    }
  ];

  const [teams, setTeams] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await TeamService.getTeam();
      setTeams(result.data);
      setLoadingData(false);
    };
 
    if (loadingData) {
      fetchData();
    }
  }, [loadingData]);
 
  return (
    <div className="container">
      <div className="painel">
        <div className="content-team">
          <div className="header">
            <h2 className="title">Teams <GroupIcon></GroupIcon></h2>            
          </div>
          
          {loadingData ? (
            <p>Loading Please wait...</p>
          ) : (
            <Table
              originalColumns={columns}
              originalData={teams}
            />
          )}
        </div>
      </div>
    </div>
  );
}