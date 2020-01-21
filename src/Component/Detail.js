import ColumnLineAreaChart from '../charts/Column Line Area Chart'
import React, { useEffect,useState } from 'react';
import Table from 'react-bootstrap/Table'

import "./styles.css";


  
  
  
  function createData(name,Target,Actual,Achievement,Target_SUB,Actual_SUB,Achievement_SUB) {
    return { name,Target,Actual,Achievement,Target_SUB,Actual_SUB,Achievement_SUB};
  }
  
  const rows = [
    createData('December', 50000, 66700, 70, 300, 654, 90 ),
    createData('November', 30000, 49000, 70, 400, 345, 90),
    createData('October', 35000, 35000, 70, 800, 678, 90),
    createData('September', 15900, 45000, 70, 900, 445, 90),
    createData('August', 25000, 60000, 70, 600, 459, 90),
    createData('July', 45000, 59000, 70, 400, 500, 90),
  ];
  
  

export default function ExpansionDetails() {
    
    return (
        <div  >
            <div>
                <ColumnLineAreaChart />
            </div>

            <div className='divTable' >
            
              <Table className='table' >
                <thead>
                <tr>
                  <th>Monthly</th>
                  <th>Target(฿)</th>
                  <th>Actual(฿)</th>
                  <th>Achievement(%)</th>
                  <th>Target_SUB</th>
                  <th>Actual_SUB</th>
                  <th>Achievement_SUB(%)</th>
                </tr>
              </thead>
              <tbody>
              
                 {rows.map(row => (
                      <tr key={row.name}>
                        <td component="th" scope="row">
                          {row.name}
                        </td>
                        <td >{row.Target}</td>
                        <td >{row.Actual}</td>
                        <td >{row.Achievement}</td>
                        <td >{row.Target_SUB}</td>
                        <td >{row.Actual_SUB}</td>
                        <td >{row.Achievement_SUB}</td>
                      </tr>
                    ))} 
              </tbody>
                {/* <TableHead>
                  <TableRow>
                    <StyledTableCell>Monthly</StyledTableCell>
                    <StyledTableCell align="right">Target(฿)</StyledTableCell>
                    <StyledTableCell align="right">Actual(฿)</StyledTableCell>
                    <StyledTableCell align="right">Achievement(%)</StyledTableCell>
                    <StyledTableCell align="right">Target_SUB</StyledTableCell>
                    <StyledTableCell align="right">Actual_SUB</StyledTableCell>
                    <StyledTableCell align="right">Achievement_SUB(%)</StyledTableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                </TableBody> */}
              </Table>
            
            </div>
            
        </div>
        
      
    );
  }