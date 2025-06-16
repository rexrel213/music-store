import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Music, ShoppingCart, ShoppingBag, Menu, X, User } from 'lucide-react';
import SearchBar from '../context/SearchBar.jsx'; // импорт вашего SearchBar компонента

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const [orderItems, setOrderItems] = useState([]);
  
  const BASE_URL = 'https://studious-tribble-x54px9gpxjrp2v96v-8000.app.github.dev';
  
  const fetchOrderItems = async () => {
    try {
      const response = await fetch(`${BASE_URL}/order/me`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Accept': 'application/json',
        },
      });
  
      const text = await response.text();
  
      if (!response.ok) {
        setOrderItems([]);
        return;
      }
  
      const data = JSON.parse(text);
      setOrderItems(data.order_items || []);
    } catch (error) {
      setOrderItems([]); 
    }
  };


  useEffect(() => {
    fetchOrderItems();
  }, []);


  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-[#1A2238]" />
            <span className="text-xl font-bold text-[#1A2238] font-['Playfair_Display']">
              Harmony Instruments
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:block max-w-xl w-full mx-8">
            <SearchBar />
          </div>

          {/* Desktop User Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {currentUser ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 hover:text-[#9E1946] transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{currentUser.email}</span>
                </Link>
                <div className="flex items-center space-x-4">
                  <Link to="/order" className="relative">
                    <ShoppingCart className="h-6 w-6 text-[#1A2238] hover:text-[#9E1946] transition-colors" />
                    <span className="absolute -top-1 -right-1 bg-[#F7B801] text-[#1A2238] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {orderItems.length}
                    </span>
                  </Link>
                  <Link to="/order/history">
                    <ShoppingBag className="h-6 w-6 text-[#1A2238] hover:text-[#9E1946] transition-colors" />
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-[#1A2238] hover:text-[#9E1946] transition-colors">
                  Войти
                </Link>
                <Link
                  to="/register"
                  className="bg-[#1A2238] text-white px-4 py-2 rounded-lg hover:bg-[#1A2238]/90 transition-colors"
                >
                  Зарегистрироваться
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#1A2238]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1A2238]" />
            )}
          </button>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden lg:flex items-center justify-center space-x-8 px-4 py-3">
          <NavLink
            to="/"
            className={`transition-colors hover:text-[#9E1946] ${
              location.pathname === '/' ? 'text-[#9E1946] font-medium' : 'text-[#1A2238]'
            }`}
          >
            Главная
          </NavLink>
          <NavLink
            to="/products"
            className={`transition-colors hover:text-[#9E1946] ${
              location.pathname === '/products' ? 'text-[#9E1946] font-medium' : 'text-[#1A2238]'
            }`}
          >
            Инструменты
          </NavLink>

          <NavLink
            to="/brands"
            className={`transition-colors hover:text-[#9E1946] ${
              location.pathname === '/brands' ? 'text-[#9E1946] font-medium' : 'text-[#1A2238]'
            }`}
          >
            Бренды
          </NavLink>
          <NavLink
            to="/contact"
            className={`transition-colors hover:text-[#9E1946] ${
              location.pathname === '/contact' ? 'text-[#9E1946] font-medium' : 'text-[#1A2238]'
            }`}
          >
            Контакты
          </NavLink>

          <NavLink
            to="/top"
            className={`transition-colors hover:text-[#9E1946] ${
              location.pathname === '/top' ? 'text-[#9E1946] font-medium' : 'text-[#1A2238]'
            }`}
          >
            Отличные инструменты
          </NavLink>
          {currentUser?.role_id === 1 && (
            <NavLink
              to="/products/create"
              className={`transition-colors hover:text-[#9E1946] ${
                location.pathname === '/products/create' ? 'text-[#9E1946] font-medium' : 'text-[#1A2238]'
              }`}
            >
              Админ-панель
            </NavLink>
          )}
          {currentUser?.role_id === 4 && (
            <NavLink
              to="/supplies/create"
              className={`transition-colors hover:text-[#9E1946] ${
                location.pathname === '/supplies/create' ? 'text-[#9E1946] font-medium' : 'text-[#1A2238]'
              }`}
            >
              Добавить поставку
            </NavLink>
          )}
        </nav>

        {/* Mobile Search */}
        <div className="lg:hidden px-4 py-3 border-t border-gray-100">
          <SearchBar />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100">
            <nav className="flex flex-col divide-y divide-gray-100">
              <Link to="/" className="px-4 py-3 hover:bg-gray-50 transition-colors" onClick={closeMenu}>
                Главная
              </Link>
              <Link to="/categories" className="px-4 py-3 hover:bg-gray-50 transition-colors" onClick={closeMenu}>
                Категории
              </Link>
              <Link to="/contact" className="px-4 py-3 hover:bg-gray-50 transition-colors" onClick={closeMenu}>
                Контакты
              </Link>
              <Link to="/top" className="px-4 py-3 hover:bg-gray-50 transition-colors" onClick={closeMenu}>
                Отличные инструменты
              </Link>

              {/* Mobile User Actions */}
              <div className="px-4 py-3 space-y-3">
                {currentUser ? (
                  <>
                    <Link to="/profile" className="flex items-center space-x-2" onClick={closeMenu}>
                      <User className="h-5 w-5 text-[#1A2238]" />
                      <span className="text-sm font-medium">{currentUser.name || currentUser.email}</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        closeMenu();
                      }}
                      className="w-full bg-gray-100 text-[#1A2238] px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Выйти
                    </button>
                  </>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/login"
                      className="block w-full bg-gray-100 text-[#1A2238] px-4 py-2 rounded-lg text-center hover:bg-gray-200 transition-colors"
                      onClick={closeMenu}
                    >
                      Войти
                    </Link>
                    <Link
                      to="/register"
                      className="block w-full bg-[#1A2238] text-white px-4 py-2 rounded-lg text-center hover:bg-[#1A2238]/90 transition-colors"
                      onClick={closeMenu}
                    >
                      Зарегистрироваться
                    </Link>
                  </div>
                )}

                <Link
                  to="/order"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  onClick={closeMenu}
                >
                  <span className="font-medium">Корзина</span>
                  <div className="flex items-center">
                    <ShoppingCart className="h-5 w-5 text-[#1A2238] mr-2" />
                    <span className="bg-[#F7B801] text-[#1A2238] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {orderItems.length}
                    </span>
                  </div>
                </Link>
                <Link to="/order/history">
                    <ShoppingBag className="h-6 w-6 text-[#1A2238] hover:text-[#9E1946] transition-colors" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
