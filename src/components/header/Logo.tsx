
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="z-10 relative">
      <img 
        alt="Cont ADM Assessoria Empresarial" 
        className="h-16 md:h-20" 
        src="/lovable-uploads/d3133fad-f083-4b24-a087-bf3356e5a89c.png" 
      />
    </Link>
  );
};

export default Logo;
