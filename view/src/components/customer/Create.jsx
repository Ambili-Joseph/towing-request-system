import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Service from './Service'

export default function CustomerCreate(props) {
  
  const [ customer, setCustomer ] = useState({})

  function create(e) {
    e.preventDefault()
    Service.create(customer).then(() => {
      props.history.push('/customer')
    }).catch((e) => {
      alert(e.response.data)
    })
  }

  function onChange(e) {
    let data = { ...customer }
    data[e.target.name] = e.target.value
    setCustomer(data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form method="post" onSubmit={create}>
            <div className="row">
              <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label" htmlFor="customer_name">Customer Name</label>
                <input id="customer_name" name="name" className="form-control" onChange={onChange} value={customer.name ?? '' } maxLength="50" />
              </div>
              <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label" htmlFor="customer_location">Location</label>
                <input id="customer_location" name="location" className="form-control" onChange={onChange} value={customer.location ?? '' } maxLength="50" />
              </div>
              <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label" htmlFor="customer_note">Note</label>
                <input id="customer_note" name="note" className="form-control" onChange={onChange} value={customer.note ?? '' } maxLength="50" />
              </div>
              
              <div className="col-12">
                <Link className="btn btn-secondary" to="/customer">Cancel</Link>
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}