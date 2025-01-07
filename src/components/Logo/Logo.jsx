import { Link } from 'react-router-dom';
import { routes } from '../../routes/RootRoutes';
import s from './Logo.module.scss';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.Home} aria-label="site logo">
        <svg
          fill={s.logoPrimary} // Use your CSS variable for the fill color
          viewBox="0 0 120 40" // Adjust the viewBox to fit your text
          xmlns="http://www.w3.org/2000/svg"
          width="120"
        >
          <text
            x="10" // Adjust the x position
            y="30" // Adjust the y position
            fontFamily="Arial, sans-serif" // Use the same font as the original logo
            fontSize="24" // Adjust the font size
            fontWeight="bold" // Make the text bold
            fill={s.logoPrimary} // Use your CSS variable for the fill color
          >
           {'<'}Shefo {'/>'}
          </text>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;