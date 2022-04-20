import React from 'react'
import delivery from '../assets/delivery.svg'
import logo from '../assets/logo.webp'
import user from '../assets/user.svg'
import cart from '../assets/shopping-cart-dark-grey.svg'
import search from '../assets/Search.svg'

function Header() {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} className="logo"></img>


          <img className="delivery-logo" src={delivery}></img>
          <div className="nav-delivery">
            <div>
              <div class="relative inline-block text-left">
                <div>
                  <button type="text" class="inline-flex justify-center text-teal-700 w-full text-sm font-small text-700 " id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Delivery to
                    <svg class="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
            <div className='text-sm' class="text-black font-semibold">Moorpark Store</div>
          </div>
        </div>

        <div className="test">
          <input type="text" placeholder="   Search by product, category or brand" className="searchbar" />
          <button className="searchButton"><img src={search}></img></button>
        </div>

        <div className="nav-user">
          <div><img src={user}></img></div>
          <div>
            <button type="text" class="inline-flex justify-center w-full text-sm font-small text-700 " id="menu-button" aria-expanded="true" aria-haspopup="true">
              Hello, John
              <svg class="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className='cart'>
          <button>
          <div><img src={cart}></img></div>
          <div>Cart</div>
          </button>
        </div>
      </nav>

      < hr />

      <div className="nav-2">
        <div className="nav-2-1">
          <div><button>Tobacco</button></div>
          <div><button>Hemp</button></div>
          <div><button>Vape</button></div>
          <div><button>Alternative</button></div>
          <div><button>General Merchandise</button></div>
          <div><button>Brand</button></div>
          <div><button>Articles</button></div>
        </div>
      </div>

      <hr />

    </div>
  )
}

export default Header