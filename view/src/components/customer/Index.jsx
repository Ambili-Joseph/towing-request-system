import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Service from './Service'

export default function CustomerIndex(props) {

  const [customers, setCustomers] = useState([])

  useEffect(() => {
    get()
  }, [props.location])

  function get() {
    Service.get().then(response => {
      setCustomers(response.data)
    }).catch(e => {
      alert(e.response.data)
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-striped table-hover">
            <thead>
               <th className="text-center">Customer List</th><br/><br/>
              <tr>
                <th>Id</th>
                <th>Customer Name</th>
                <th>Location</th>
                <th>Note</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) =>
              <tr key={index}>
                <td className="text-center">{customer.id}</td>
                <td>{customer.name}</td>
                  <td>{customer.location}</td>
                  <td>{customer.note}</td>
               
                <td>
                  <Link className="btn btn-secondary" to={`/customer/${customer.id}`} title="View"><i className="fa fa-eye"></i></Link>
                  <Link className="btn btn-primary" to={`/customer/edit/${customer.id}`} title="Edit"><i className="fa fa-pencil"></i></Link>
                  <Link className="btn btn-danger" to={`/customer/delete/${customer.id}`} title="Delete"><i className="fa fa-times"></i></Link>
                </td>
              </tr>
              )}
            </tbody>
          </table>
          <Link className="btn btn-primary" to="/customer/create">Create</Link>
        </div>
      </div>
    </div>
  )
}