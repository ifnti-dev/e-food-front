import React, { useState } from "react";

const DateFilterForm: React.FC = () => {
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFromDate(value);
    setToDate(value > toDate ? value : toDate);
  };

  const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setToDate(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <form id="date_filter" className="ms-auto mb-4" onSubmit={handleSubmit}>
      {/* CSRF Token */}
      <input type="hidden" name="csrfmiddlewaretoken" value="YOUR_CSRF_TOKEN_VALUE" />
      <div className="row">
        <div className="col">
          <input
            name="from_date"
            id="from_date"
            required
            className="form-control"
            type="date"
            data-date-format="YYYY-MM-DD HH:MM:SS"
            value={fromDate}
            onChange={handleFromDateChange}
          />
        </div>
        <div className="col">
          <input
            name="to_date"
            id="to_date"
            required
            readOnly
            className="form-control"
            type="date"
            data-date-format="YYYY-MM-DD HH:MM:SS"
            min={fromDate}
            value={toDate}
            onChange={handleToDateChange}
          />
        </div>
        <div className="col d-flex align-self-center">
          <button style={{ fontSize: "small" }} className="btn btn-primary" type="submit">
            Filtrer
          </button>
        </div>
      </div>
    </form>
  );
};

export default DateFilterForm;
