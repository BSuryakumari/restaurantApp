import './index.css'

const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <svg
        xmlns="https://apis.ccbp.in/login"
        width="35"
        height="35"
        fill="#585555"
        className="bi bi-cart3 cart-icon"
        viewBox="0 0 16 16"
      >
        <path d="M6 2a.5.5 0 0 1 .5.5V3h3v-.5a.5.5 0 0 1 1 0V3h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2v-.5A.5.5 0 0 1 6 2zm-1 4v7h10V6H5zm1 1v5h8V7H6zM3 6v7h1V6H3zm10 0v7h1V6h-1z" />
      </svg>
      <div className="cart-count-badge d-flex justify-content-center align-items-center">
        <p className="m-0 cart-count">{getCartItemsCount()}</p>
      </div>
    </div>
  )

  return (
    <header className="p-4 d-flex flex-row align-items-center nav-header">
      <h1 className="m-0 logo-heading">UNI Resto Cafe</h1>
      <div className="d-flex flex-row align-items-center ms-auto">
        <p className="mt-0 mb-0 me-2 d-none d-sm-block my-orders-text">
          My Orders
        </p>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default Header
