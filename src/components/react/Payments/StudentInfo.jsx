import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AkashBooksForm from './AkashBooksForm';

const StudentInfo = () => {
  return (
    <Router>
      <div className="container mt-4">
        <div><h2>Student Information</h2></div>
        <div className="mb-4">Get All Student Details Regarding Fee Payment, Transport, Pocket Money, Other Fee Heads</div>

        <div className="mb-4">
          <ul className="nav d-flex flex-nowrap">
            <li className="nav-item">
              <NavLink
                to="/payments"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Payments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cancellation"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Cancellation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/concession"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Concession
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pm-issue"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                PM Issue
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/fee-installments"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Fee Installments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/refunds"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Refunds
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/akash-books"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Akash Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/uniform"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Uniform
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/transfers"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'black',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                Transfers
              </NavLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/akash-books" element={<AkashBooksForm />} />
          <Route path="/" element={<AkashBooksForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default StudentInfo;