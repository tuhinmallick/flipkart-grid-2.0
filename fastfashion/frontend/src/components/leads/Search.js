import React from 'react'

export default function Search() {
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
      <!-- <div class="search">
        <input type="text" placeholder="Type here"><i class="fa fa-search"></i>
      </div> -->
      <ul class="categories">
        <li><i class="fa fa-home fa-fw" aria-hidden="true"></i><a href="#"> Dashboard </a>
          <!-- <ul class="side-nav-dropdown">
            <li><a href="#">Lorem ipsum</a></li>
            <li><a href="#">ipsum dolor</a></li>
            <li><a href="#">dolor ipsum</a></li>
            <li><a href="#">amet consectetur</a></li>
            <li><a href="#">ipsum dolor sit</a></li>
          </ul> -->
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
        <!-- <li><i class="fa fa-laptop fa-fw"></i><a href="#"> About UI &amp; UX <span class="num succ">43</span></a></li>
        <li><i class="fa fa-comments-o fa-fw"></i><a href="#"> Something else</a></li> -->
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
           
                
            <!-- <form class="navbar-form navbar-right" role="search"> -->
            <!-- </form>  -->
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
              <!-- <li><a href="#"><i class="fa fa-comments"></i><span>23</span></a></li>
              <li><a href="#"><i class="fa fa-bell-o"></i><span>98</span></a></li>
              <li><a href="#"><i data-show="show-side-navigation1" class="fa fa-bars show-side-btn"></i></a></li> -->
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
                          <input list="browsers" class="form-control" placeholder="Type here">
                          <datalist id="browsers">
                            <option value="Shapes">
                            <option value="Striped">
                            <option value="Satin">
                            <option value="Sequin">
                            <option value="Floral">
                            <option value="Plain">
                          </datalist>
                        </div>
                        <input type="button" class="btn btn-default" onclick="window.location.href='results.html'" value="Search">
                      
                    </li>
                </div>
                    </ul>
                </form>
            </div>
            
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
