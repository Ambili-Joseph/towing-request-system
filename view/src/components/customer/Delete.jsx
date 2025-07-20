import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Service from './Service'

export default function CustomerDelete(props) {
  
  const [ customer, setCustomer ] = useState({})
  
  useEffect(() => {
    get()
  }, [ props.match.params.id ])
  
  function get() {
    return Service.delete(props.match.params.id).then(response => {
      setCustomer(response.data)
    }).catch(e => {
      alert(e.response.data)
    })
  }

  function remove(e) {
    e.preventDefault()
    Service.delete(props.match.params.id, customer).then(() => {
      props.history.push('/customer')
    }).catch((e) => {
      alert(e.response.data)
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form method="post" onSubmit={remove}>
            <div className="row">
              <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label" htmlFor="customer_id">Id</label>
                <input readOnly id="customer_id" name="id" className="form-control" value={customer.id ?? '' } type="number" required />
              </div>
              <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label" htmlFor="customer_name">Customer Name</label>
                <input readOnly id="customer_name" name="name" className="form-control" value={customer.name ?? '' } maxLength="50" />
              </div>
              <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label" htmlFor="customer_location">Location</label>
                <input readOnly id="customer_location" name="location" className="form-control" value={customer.location ?? '' } maxLength="50" />
              </div>
              <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label" htmlFor="customer_note">Note</label>
                <input readOnly id="customer_note" name="note" className="form-control" value={customer.note ?? '' } maxLength="50" />
              </div>
              
              <div className="col-12">
                <Link className="btn btn-secondary" to="/customer">Cancel</Link>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}