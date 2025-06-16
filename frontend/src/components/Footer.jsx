import { Link } from 'react-router-dom';
import { Music, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2238] text-white pt-12 pb-6 mt-16 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Music className="h-8 w-8 text-[#F7B801]" />
              <span className="text-2xl font-bold font-['Playfair_Display'] tracking-wide">Harmony Instruments</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Качественные музыкальные инструменты для профессионалов и любителей. Работаем с 2010 года. Вдохновляем на творчество каждый день!
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#F7B801] transition-colors">
                <Facebook size={22} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#F7B801] transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#F7B801] transition-colors">
                <Twitter size={22} />
              </a>
              <a href="#" aria-label="Youtube" className="text-gray-400 hover:text-[#F7B801] transition-colors">
                <Youtube size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Playfair_Display'] text-[#F7B801]">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#F7B801] transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-[#F7B801] transition-colors">Инструменты</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#F7B801] transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#F7B801] transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Playfair_Display'] text-[#F7B801]">Популярные категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/1" className="text-gray-300 hover:text-[#F7B801] transition-colors">Струнные</Link>
              </li>
              <li>
                <Link to="/category/2" className="text-gray-300 hover:text-[#F7B801] transition-colors">Клавишные</Link>
              </li>
              <li>
                <Link to="/category/3" className="text-gray-300 hover:text-[#F7B801] transition-colors">Ударные</Link>
              </li>
              <li>
                <Link to="/category/4" className="text-gray-300 hover:text-[#F7B801] transition-colors">Духовые</Link>
              </li>
              <li>
                <Link to="/category/5" className="text-gray-300 hover:text-[#F7B801] transition-colors">Электронные</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-['Playfair_Display'] text-[#F7B801]">Контакты</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#F7B801] mr-2 mt-0.5" />
                <span className="text-gray-300">г. Ижевск, ул. Карла Маркса, 244</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#F7B801] mr-2" />
                <span className="text-gray-300">+7 (3412) 123-456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#F7B801] mr-2" />
                <span className="text-gray-300">info@harmonyinstruments.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Harmony Instruments. Все права защищены.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <Link to="/privacy" className="hover:text-[#F7B801] transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-[#F7B801] transition-colors">Пользовательское соглашение</Link>
            <Link to="/shipping" className="hover:text-[#F7B801] transition-colors">Доставка и оплата</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
