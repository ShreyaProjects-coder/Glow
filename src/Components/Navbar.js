// import React from 'react'

// function Navbar() {
//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                 <a class="navbar-brand" href="#">GlowUp</a>
//                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>

//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav mr-auto">
//                         <li class="nav-item active">
//                             <a class="nav-link" href="#">Categories<span class="sr-only">(current)</span></a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Brands</a>
//                         </li>

//                         <li class="nav-item">
//                             <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">GlowUp Fashion</a>
//                         </li>
//                     </ul>
//                     <form class="form-inline my-2 my-lg-0">
//                         <input class="form-control mr-sm-2" type="search" placeholder="Search on GlowUp" aria-label="Search" />
//                         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                     </form>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar


import React from 'react';

const navbarStyle = {
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    borderBottom: '2px solid #feb47b',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
};

const brandStyle = {
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 'bold',
    color: '#fff',
    transition: 'color 0.3s ease'
};

const brandHoverStyle = {
    color: '#fff3e0'
};

const linkStyle = {
    color: '#fff',
    fontSize: '1.1rem',
    padding: '0.5rem 1rem',
    transition: 'color 0.3s ease'
};

const linkHoverStyle = {
    color: '#333333'
};

const formControlStyle = {
    borderRadius: '25px',
    border: '1px solid #ff7e5f',
    transition: 'border-color 0.3s ease'
};

const formControlFocusStyle = {
    borderColor: '#feb47b',
    boxShadow: '0 0 0 0.2rem rgba(255, 225, 198, 0.25)'
};

const buttonStyle = {
    color: '#333333',
    borderColor: '#ff7e5f',
    borderRadius: '25px',
    transition: 'background-color 0.3s ease, color 0.3s ease'
};

const buttonHoverStyle = {
    backgroundColor: '#ff7e5f',
    color: '#fff'
};

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
                <a className="navbar-brand" href="#" style={brandStyle} onMouseOver={(e) => e.currentTarget.style.color = brandHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = brandStyle.color}>GlowUp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Categories<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>Brands</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.color = linkHoverStyle.color} onMouseOut={(e) => e.currentTarget.style.color = linkStyle.color}>GlowUp Fashion</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search on GlowUp" aria-label="Search" style={formControlStyle} onFocus={(e) => e.currentTarget.style.borderColor = formControlFocusStyle.borderColor} onBlur={(e) => e.currentTarget.style.borderColor = formControlStyle.borderColor} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''} >Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
