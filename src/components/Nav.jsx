import { navLinks } from './../constants';

const Nav = () => {
  return (
    <div className="flex flex-1">
        <ul className=''>
            {navLinks.map((item) => (
               <li key={item.label} className="">
                <a href={item.href} className="">
                    {item.label}
                </a>
               </li> 
            ))}
            
        </ul>
    </div>
  );
};

export default Nav;