import React from 'react'
import empservice from '../Service/empservice'

const DeleteEmp = (id) => {
  return (
    <div>
      empservice.delEmployee(id).then((res)=>{
        <p>Employee Deeleted</p>
      }
      ).catch((error)=>{
        console.log(error)
      })
    </div>
  )
}

export default DeleteEmp
