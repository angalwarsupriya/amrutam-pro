import './index.css'

import { MdMenu } from "react-icons/md";
function Header() {
  return (
    <header className='header-bg-con'>

        <div className='header-con-lg d-flex align-items-center d-none d-md-inline'>
            <img src='images/image 45.png' className='logo-lg' alt='web logo'/>
        </div>

        <div className='header-con-sm d-flex align-items-center  d-md-none'>
          <MdMenu className='menu'/>
          <img src='images/image 45.png' className='logo-sm' alt='web logo'/>
        </div>

    </header>
  )
}

export default Header