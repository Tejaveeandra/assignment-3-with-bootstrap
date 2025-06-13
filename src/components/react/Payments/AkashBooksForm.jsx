import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  paymentStatus: Yup.string().required('Payment Status is required'),
  semester: Yup.string().required('Semester is required'),
  receiptNo: Yup.string().required('Receipt No is required'),
  prevReceiptNo: Yup.string(),
  notes: Yup.string(),
});

const AkashBooksForm = () => {
  const initialValues = {
    paymentStatus: '',
    semester: '',
    receiptNo: '',
    prevReceiptNo: '',
    notes: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    // Add your form submission logic here
    setSubmitting(false);
  };

  return (
    <div className="card p-4 mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div >
          <h3>Akash Books</h3>
          <p className="text-muted">
            Students can submit a fee cancellation request, which will be reviewed and processed by the department officer (DO) for approval.
          </p>
        </div>
        <div>
          <button className="btn btn-outline-primary me-2">Tracking</button>
          <button className="btn btn-outline-primary">History</button>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="paymentStatus" className="form-label">Payment Status</label>
                <Field
                  as="select"
                  id="paymentStatus"
                  name="paymentStatus"
                  className="form-select"
                >
                  <option value="">Select Status</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </Field>
                <ErrorMessage name="paymentStatus" component="div" className="text-danger" />
              </div>
              <div className="col-md-6">
                <label htmlFor="semester" className="form-label">Semester</label>
                <Field
                  as="select"
                  id="semester"
                  name="semester"
                  className="form-select"
                >
                  <option value="">Select Semester</option>
                  <option value="1">1st Semester</option>
                  <option value="2">2nd Semester</option>
                  <option value="3">3rd Semester</option>
                  <option value="4">4th Semester</option>
                  <option value="5">5th Semester</option>
                </Field>
                <ErrorMessage name="semester" component="div" className="text-danger" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="receiptNo" className="form-label">Receipt No</label>
                <Field
                  type="text"
                  id="receiptNo"
                  name="receiptNo"
                  className="form-control"
                  placeholder="Enter Receipt No"
                />
                <ErrorMessage name="receiptNo" component="div" className="text-danger" />
              </div>
              <div className="col-md-6">
                <label htmlFor="prevReceiptNo" className="form-label">Prev Receipt No</label>
                <Field
                  type="text"
                  id="prevReceiptNo"
                  name="prevReceiptNo"
                  className="form-control"
                  placeholder="Enter Prev Receipt No"
                />
                <ErrorMessage name="prevReceiptNo" component="div" className="text-danger" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="notes" className="form-label">Notes</label>
              <Field
                as="textarea"
                id="notes"
                name="notes"
                className="form-control"
                rows="3"
                placeholder="Enter Your Text Here"
              />
              <ErrorMessage name="notes" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Print
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AkashBooksForm;