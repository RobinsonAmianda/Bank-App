import React from 'react'

function TableList({id,date,description,category,amount}) {
  return (
 <>
      <tbody>
       <tr>
      <td>{id}</td> 
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
       </tr>
      </tbody>
  </>
  )
}

export default TableList