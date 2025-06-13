import React, { useState } from 'react';

const AkashBooksForm = () => {
  const [paymentStatus, setPaymentStatus] = useState('');
  const [semester, setSemester] = useState('');
  const [receiptNo, setReceiptNo] = useState('');
  const [prevReceiptNo, setPrevReceiptNo] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      paymentStatus,
      semester,
      receiptNo,
      prevReceiptNo,
      notes,
    });
    // Add your form submission logic here
  };

  return (
    <div className="card p-4 mt-3">
      <h3>Akash Books</h3>
      <p className="text-muted">
        Department office use: cancellation request, which will be reviewed and processed by the department office
      </p>
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-outline-primary">Books for Class</button>
        <div>
          <button className="btn btn-outline-primary me-2">Tracking</button>
          <button className="btn btn-outline-primary">History</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="paymentStatus" className="form-label">Payment Status</label>
            <select
              id="paymentStatus"
              className="form-select"
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="semester" className="form-label">Semester</label>
            <select
              id="semester"
              className="form-select"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="">Select Semester</option>
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
              <option value="3">3rd Semester</option>
              <option value="4">4th Semester</option>
              <option value="5">5th Semester</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="receiptNo" className="form-label">Receipt No</label>
            <input
              type="text"
              id="receiptNo"
              className="form-control"
              value={receiptNo}
              onChange={(e) => setReceiptNo(e.target.value)}
              placeholder="Enter Receipt No"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="prevReceiptNo" className="form-label">Prev Receipt No</label>
            <input
              type="text"
              id="prevReceiptNo"
              className="form-control"
              value={prevReceiptNo}
              onChange={(e) => setPrevReceiptNo(e.target.value)}
              placeholder="Enter Prev Receipt No"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="notes" className="form-label">Notes</label>
          <textarea
            id="notes"
            className="form-control"
            rows="3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter Your Text Here"
          />
        </div>
        <button type="submit" className="btn btn-primary">Print</button>
      </form>
    </div>
  );
};

export default AkashBooksForm;