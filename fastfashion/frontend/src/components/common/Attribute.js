import React from 'react'

export default function Attribute() {
    return (
        <div>
             <aside class="side-nav" id="show-side-navigation1">
      <i class="fa fa-bars close-aside hidden-sm hidden-md hidden-lg" data-close="show-side-navigation1"></i>
      <div class="heading">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqoup8UQ7qr4V1Pg3KQmz70J65z5h8REb2tA&usqp=CAU" alt="">
        <div class="info">
          <h3><a href="#">Erica </a></h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <ul class="categories">
        <li><i class="fa fa-home fa-fw" aria-hidden="true"></i><a href="#"> Dashboard </a>
          <ul class="side-nav-dropdown">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">ipsum dolor</a></li>
            <li><a href="#">dolor ipsum</a></li>
            <li><a href="#">amet consectetur</a></li>
            <li><a href="#">ipsum dolor sit</a></li>
          </ul>
        </li>
        
        <li><i class="fa fa-envelope fa-fw"></i><a href="#"> Contact us</a>
          <ul class="side-nav-dropdown">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">ipsum dolor</a></li>
            <li><a href="#">dolor ipsum</a></li>
            <li><a href="#">amet consectetur</a></li>
            <li><a href="#">ipsum dolor sit</a></li>
          </ul>
        </li>
        <li><i class="fa fa-users fa-fw"></i><a href="#"> Our team</a>
          <ul class="side-nav-dropdown">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">ipsum dolor</a></li>
            <li><a href="#">dolor ipsum</a></li>
            <li><a href="#">amet consectetur</a></li>
            <li><a href="#">ipsum dolor sit</a></li>
          </ul>
        </li>
        
        <p>Info:</p>
        <li><i class="fa fa-heart fa-fw"></i><a href="#"> My Saves </a>
          <ul class="side-nav-dropdown">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">ipsum dolor</a></li>
            <li><a href="#">dolor ipsum</a></li>
            <li><a href="#">amet consectetur</a></li>
            <li><a href="#">ipsum dolor sit</a></li>
          </ul>
        </li>
        <li><i class="fa fa-wrench fa-fw"></i><a href="#"> My Products </a>
          <ul class="side-nav-dropdown">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">ipsum dolor</a></li>
            <li><a href="#">dolor ipsum</a></li>
            <li><a href="#">amet consectetur</a></li>
            <li><a href="#">ipsum dolor sit</a></li>
          </ul>
        </li>
        <li><i class="fa fa-laptop fa-fw"></i><a>Collections</a>
          <ul class="side-nav-dropdown">
            <li><input type="button" value="Search" class="btn btn-default" onclick="window.location.href='collections.html'"></li>
            <li><input type="button" value="Saved &nbsp;" class="btn btn-default" onclick="window.location.href='collections.html'"></li>
          </ul>
        </li>
      </ul>
    </aside>
    <section id="contents">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <i class="fa fa-align-right"></i>
            </button>
            <a class="navbar-brand" href="#">my<span class="main-color">Studio</span></a>
 
          </div>
          <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My profile <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#"><i class="fa fa-user-o fw"></i> My account</a></li>
                  <li><a href="#"><i class="fa fa-envelope-o fw"></i> My inbox</a></li>
                  <li><a href="#"><i class="fa fa-question-circle-o fw"></i> Help</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="login.html"><i class="fa fa-sign-out"></i> Log out</a></li>
                </ul>
              </li>       
            </ul>
          </div>
        </div>
      </nav>
      <div class="welcome">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="content">
                  
               <form class="navbar-form navbar-center" role="search">
                <ul>
                    <div class="nav navbar-nav">
                    <li>
                        <h2>Search by keyword : <span>&nbsp;</span></h2>
                    
                    </li>
                       <li>
                        <div class="form-group">
                          <input list="browsers" class="form-control" placeholder="Floral">
                          <datalist id="browsers">
                            <option value="Shapes">
                            <option value="Printed">
                            <option value="Satin">
                            <option value="Sequin">
                            <option value="Floral">
                            <option value="Plain">
                          </datalist>
                        </div>
                        <input type="button" class="btn btn-default" onclick="window.location.href='print.html'" value="Search">
                      
                    </li>
                </div>
                    </ul>
                </form>
                <div class="nav navbar-right">
                  <input type="button" class="btn btn-default material-icons" onclick="window.location.href='updateN.html'" value="&#xe8cc; ADD TO CART" style="font-size: 14px;">
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
      <section class="charts">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="chart-container">
              <div class="card text-center">
                <ul class="design">
                  <li class="likes">
                    <input type="checkbox" id="myCheckbox1" />
                    <label for="myCheckbox1">
                  <img src="./floral/1.jpeg" class="card-img-top" alt="...">
                </label>
              </li>
              <li>
              </ul>                
              </div>
              </div>
            </div>
            <div class="col-md-3">
                <div class="chart-container">
                    <div class="card text-center">
                      <ul class="design">
                        <li class="likes">
                          <input type="checkbox" id="myCheckbox2" />
                          <label for="myCheckbox2">
                        <img src="./floral/2.jpeg" class="card-img-top" alt="...">
                      </label>
                    </li>
                    <li>
                    </ul>                  
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="chart-container"/>
                <div class="card text-center">
                  <ul class="design">
                    <li class="likes">
                      <input type="checkbox" id="myCheckbox3" />
                      <label for="myCheckbox3">
                    <img src="./floral/7.jpeg" class="card-img-top" alt="...">
                  </label>
                </li>
                <li>
                </ul>                    
                </div>
              </div>
            </div>
            <div class="col-md-3">
                <div class="chart-container">
                  <div class="card text-center">
                    <ul class="design">
                      <li class="likes">
                        <input type="checkbox" id="myCheckbox4" />
                        <label for="myCheckbox4">
                      <img src="./floral/4.jpeg" class="card-img-top" alt="...">
                    </label>
                  </li>
                  <li>
                  </ul>                     
                  </div>
                </div>
              </div>
              <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <div class="chart-container">
              <div class="card text-center">
                <ul class="design">
                  <li class="likes">
                    <input type="checkbox" id="myCheckbox5" />
                    <label for="myCheckbox5">
                  <img src="./floral/10.jpeg" class="card-img-top" alt="...">
                </label>
              </li>
              <li>
              </ul>                
              </div>
              </div>
            </div>
            <div class="col-md-3">
                <div class="chart-container">
                    <div class="card text-center">
                      <ul class="design">
                        <li class="likes">
                          <input type="checkbox" id="myCheckbox6" />
                          <label for="myCheckbox6">
                        <img src="./floral/6.jpeg" class="card-img-top" alt="...">
                      </label>
                    </li>
                    <li>
                    </ul>                  
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="chart-container">
                <div class="card text-center">
                  <ul class="design">
                    <li class="likes">
                      <input type="checkbox" id="myCheckbox7" />
                      <label for="myCheckbox7">
                    <img src="./floral/8.jpeg" class="card-img-top" alt="...">
                  </label>
                </li>
                <li>
                </ul>                   
                </div>
              </div>
            </div>
            <div class="col-md-3">
                <div class="chart-container">
                  <div class="card text-center">
                    <ul class="design">
                      <li class="likes">
                        <input type="checkbox" id="myCheckbox8" />
                        <label for="myCheckbox8">
                      <img src="./floral/3.jpeg" class="card-img-top" alt="...">
                    </label>
                  </li>
                  <li>
                  </ul>                      
                  </div>
                </div>
              </div>
              <div class="container-fluid">
              <div class="row">
              <div class="col-md-3">
                <div class="chart-container">
                  <div class="card text-center">
                    <ul class="design">
                      <li class="likes">
                        <input type="checkbox" id="myCheckbox9" />
                        <label for="myCheckbox9">
                      <img src="./floral/13.jpeg" class="card-img-top" alt="...">
                    </label>
                  </li>
                  <li>
                  </ul>                   
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="chart-container">
                  <div class="card text-center">
                    <ul class="design">
                      <li class="likes">
                        <input type="checkbox" id="myCheckbox1" />
                        <label for="myCheckbox1">
                      <img src="./floral/11.jpeg" class="card-img-top" alt="...">
                    </label>
                  </li>
                  <li>
                  </ul>                      
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="chart-container">
                  <div class="card text-center">
                    <ul class="design">
                      <li class="likes">
                        <input type="checkbox" id="myCheckbox1" />
                        <label for="myCheckbox1">
                      <img src="./floral/5.jpeg" class="card-img-top" alt="...">
                    </label>
                  </li>
                  <li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="chart-container">
                  <div class="card text-center">
                    <ul class="design">
                      <li class="likes">
                        <input type="checkbox" id="myCheckbox" />
                        <label for="myCheckbox1">
                      <img src="./floral/12.jpeg" class="card-img-top" alt="...">
                    </label>
                  </li>
                  <li>
                  </ul>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
        </div>
    )
}
