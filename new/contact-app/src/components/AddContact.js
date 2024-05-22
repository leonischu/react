import React from 'react'

const AddContact = () => {
 return(
    <div className='ui main'>
        <h2>Add Contact </h2>
        <form action="" className="ui form">
            <div className="field">
                <label >Name</label>
                <input type="text" name='Name' placeholder='name' />
            </div>
            <div className="field">
                <label >Email</label>
                <input type="text" name='Email' placeholder='Email' />
            </div>
        </form>
    </div>
 );
}

export default AddContact;