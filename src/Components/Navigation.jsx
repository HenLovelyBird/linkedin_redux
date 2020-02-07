import React from 'react';
import {Nav, Collapse, Col, Row, NavbarToggler, NavItem,InputGroupAddon, Input, NavLink,InputGroupText, Navbar, NavbarBrand, InputGroup, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
import { faBriefcase, faSearch, faHome, faUsers, faComments, faBell, faTh } from '@fortawesome/free-solid-svg-icons'
import '../index.css'
import ProfilesDropDown from './ProfilesDropDown';



class Navigation extends React.Component {
   state = {
      dropdownOpen: false,
      setDropdownOpen: false,
      search: '',
      isOpen: false
   }

   handleCollapse = () => {
      this.setState({
         isOpen: !this.state.isOpen
      })
   }

   toggleDropdown = () => {
      if(this.state.setDropdownOpen === false){
         this.setState({
            setDropdownOpen: true,
            dropdownOpen: true,
         })
      }else if(this.state.setDropdownOpen === true){
         this.setState({
            setDropdownOpen: false,
            dropdownOpen: false,
         })
      }
   }

   handleSearch = async(ev) => {
   //   let username = "user16"
   //   let password = "c9WEUxMS294hN6fF"
   //   let token = btoa(username + ":" + password)
     if(ev.target.value.length > 2){
      let response = await fetch("https://linkedinmockup.herokuapp.com/profiles" + ev.target.value, {
         method: "GET",
         // headers: {
         //     "authorization" : "Basic " + token
         // }
      })
      let usersData = await response.json()
      this.setState({
            search: usersData
      })
     }
   }
    render() {
      return (
         <Navbar className="nav-top" expand="lg">
            <Nav style={{margin: "0 auto"}}> 
               <NavbarBrand href="/">
                  <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin}/>
               </NavbarBrand>
               <NavItem>
                  <div className="search-div">
                     <InputGroup className="search-input">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                           <DropdownToggle
                           tag="span"
                           data-toggle="dropdown"
                           aria-expanded={this.dropdownOpen}
                           >
                              <InputGroupAddon  addonType="prepend">
                                 <InputGroupText>                    
                                    <FontAwesomeIcon className="icon-search" icon={faSearch}/>
                                    <Input onChange={this.handleSearch} className="main-input" id="main-search-unput" placeholder="Search" />
                                 </InputGroupText>
                              </InputGroupAddon>
                           </DropdownToggle>
                           <DropdownMenu>
                              <ProfilesDropDown searchQuery={this.state.srch} toggleProfileDropdown={this.toggleDropdown}/>
                           </DropdownMenu>
                        </Dropdown>
                     </InputGroup>
                  </div>
               </NavItem>
               <NavbarToggler onClick={this.handleCollapse} />
               <Collapse isOpen={this.state.isOpen} navbar>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faHome}/>
                     <NavLink href="#">Home</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faUsers}/>
                     <NavLink href="#" active>My Network</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faBriefcase}/>
                     <NavLink href="#">Jobs</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <Link to="/Newsfeed" style={{ textDecoration: 'none'}}>  
                     <FontAwesomeIcon className="nav-icon" icon={faComments}/>
                     <NavLink href="#">Messaging</NavLink>
                     </Link>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faBell}/>
                     <NavLink href="#">Notifications</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <Link to="/Profile" style={{ textDecoration: 'none'}} >
                     <div className="profile-image-div"></div>
                     <NavLink href="#">Me</NavLink>
                     </Link>
                  </div>
               </NavItem>
               <div className="vl d-lg-inline-block d-none"></div>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faTh}/>
                     <NavLink href="#">Work</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faHome}/>
                     <NavLink href="#">Learning</NavLink>
                  </div>
               </NavItem>
               <NavItem>
                  <div className="nav-item-div">
                     <FontAwesomeIcon className="nav-icon" icon={faHome}/>
                     <NavLink onClick={this.props.logout}>Logout</NavLink>
                  </div>
               </NavItem>
               </Collapse>
            </Nav>
         </Navbar>
      ); 
   }
}

export default Navigation;