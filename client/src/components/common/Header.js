import React, {Component} from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                    <div className="container">
                        <a
                            class="navbar-brand"
                            href="#"
                            style={{
                            color: "white"
                        }}>Discussion Forum</a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                            style={{
                            float: 'right'
                        }}>

                            <form class="form-inline my-2 my-lg-0 mr-auto">
                                <input
                                    class="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
                            <ul className="navbar-nav ml-aut">

                                <li className="nav-item">
                                    <span>
                                        <i className="fas fa-user-alt"></i>
                                    </span>
                                    <a
                                        class="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        <span>
                                            <i className="fas fa-caret-down"></i>
                                        </span>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>

                                </li>
                            </ul>

                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}

export default Header;
