import React from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import "./classes.css";

const Classes = () => {
  const schedule = [
    { day: "Friday", morning: "8:00 AM - 11:00 AM", evening: "4:00 PM - 7:00 PM" },
    { day: "Saturday", morning: "8:00 AM - 11:00 AM", evening: "4:00 PM - 7:00 PM" },
    { day: "Monday", morning: "8:00 AM - 11:00 AM", evening: "4:00 PM - 7:00 PM" },
    { day: "Wednesday", morning: "8:00 AM - 11:00 AM", evening: "4:00 PM - 7:00 PM" },
  ];

  return (
    <div className="classes-section">
      <h2 className="classes-title">🥋 Class Schedule</h2>
      <TableContainer component={Paper} className="schedule-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-header">Day</TableCell>
              <TableCell className="table-header">Morning</TableCell>
              <TableCell className="table-header">Evening</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.day}</TableCell>
                <TableCell>{row.morning}</TableCell>
                <TableCell>{row.evening}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Classes;
