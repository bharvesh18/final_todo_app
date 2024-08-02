import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='logotext'>
            <h1>iTask</h1>
        </div>
        <div className='menu'>
            <ul>
                <li>HOME</li>
                <li>SHOW TASKS</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
