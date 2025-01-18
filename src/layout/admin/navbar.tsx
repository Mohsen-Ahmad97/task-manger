import { MenuOutlined } from "@ant-design/icons";

interface NavbarProps {
  language: string; // تعريف نوع language
  setLanguage: (value: string) => void; // تعريف نوع setLanguage
  select: string; // تعريف نوع language
  setSelect: (value: string) => void; 
}

const Navbar = ({ language, setLanguage ,select,setSelect}: NavbarProps) => {
  return (
    <div className="navbar">
     <div
      className="menu" 
     onClick={() => {
       setSelect(select === "true" ? "false" : "true")
     }
     }>
      <MenuOutlined/>
     </div>
     <div>

     
      <button
        onClick={() => {
          setLanguage(language === "true" ? "false" : "true"); // تبديل اللغة
        }}
      >
        {language === "true" ? (
       <svg
       xmlns="http://www.w3.org/2000/svg"
       width="900"
       height="600"
       viewBox="0 0 190 100"
     >
       <rect width="190" height="100" fill="#b22234" />
       <rect y="7.6923" width="190" height="7.6923" fill="#ffffff" />
       <rect y="23.077" width="190" height="7.6923" fill="#ffffff" />
       <rect y="38.4615" width="190" height="7.6923" fill="#ffffff" />
       <rect y="53.8462" width="190" height="7.6923" fill="#ffffff" />
       <rect y="69.2307" width="190" height="7.6923" fill="#ffffff" />
       <rect y="84.6154" width="190" height="7.6923" fill="#ffffff" />

       <rect width="76" height="53.8462" fill="#3c3b6e" />
       <g fill="#ffffff">
         <g transform="translate(4, 4)">
           <circle cx="4.8" cy="4.8" r="2" />
           <circle cx="14.4" cy="4.8" r="2" />
           <circle cx="24" cy="4.8" r="2" />
           <circle cx="33.6" cy="4.8" r="2" />
           <circle cx="43.2" cy="4.8" r="2" />
           <circle cx="52.8" cy="4.8" r="2" />
         </g>
         <g transform="translate(4, 13.8462)">
           <circle cx="4.8" cy="4.8" r="2" />
           <circle cx="14.4" cy="4.8" r="2" />
           <circle cx="24" cy="4.8" r="2" />
           <circle cx="33.6" cy="4.8" r="2" />
           <circle cx="43.2" cy="4.8" r="2" />
           <circle cx="52.8" cy="4.8" r="2" />
         </g>
         <g transform="translate(4, 23.6924)">
           <circle cx="4.8" cy="4.8" r="2" />
           <circle cx="14.4" cy="4.8" r="2" />
           <circle cx="24" cy="4.8" r="2" />
           <circle cx="33.6" cy="4.8" r="2" />
           <circle cx="43.2" cy="4.8" r="2" />
           <circle cx="52.8" cy="4.8" r="2" />
         </g>
         <g transform="translate(4, 33.5386)">
           <circle cx="4.8" cy="4.8" r="2" />
           <circle cx="14.4" cy="4.8" r="2" />
           <circle cx="24" cy="4.8" r="2" />
           <circle cx="33.6" cy="4.8" r="2" />
           <circle cx="43.2" cy="4.8" r="2" />
           <circle cx="52.8" cy="4.8" r="2" />
         </g>
         <g transform="translate(4, 43.3848)">
           <circle cx="4.8" cy="4.8" r="2" />
           <circle cx="14.4" cy="4.8" r="2" />
           <circle cx="24" cy="4.8" r="2" />
           <circle cx="33.6" cy="4.8" r="2" />
           <circle cx="43.2" cy="4.8" r="2" />
           <circle cx="52.8" cy="4.8" r="2" />
         </g>

         <g transform="translate(9.6, 9.6)">
           <circle cx="4.8" cy="4.8" r="2" />
           <circle cx="14.4" cy="4.8" r="2" />
           <circle cx="24" cy="4.8" r="2" />
           <circle cx="33.6" cy="4.8" r="2" />
           <circle cx="43.2" cy="4.8" r="2" />
         </g>
         <g transform="translate(9.6, 19.4462)">
           <circle cx="4.8" cy="4.8" r="2" />
           <circle cx="14.4" cy="4.8" r="2" />
           <circle cx="24" cy="4.8" r="2" />
           <circle cx="33.6" cy="4.8" r="2" />
           <circle cx="43.2" cy="4.8" r="2" />
         </g>
         <g transform="translate(9.6, 29.2924)">
           <circle cx="4.8" cy="4.8" r="2" />
           <circle cx="14.4" cy="4.8" r="2" />
           <circle cx="24" cy="4.8" r="2" />
           <circle cx="33.6" cy="4.8" r="2" />
           <circle cx="43.2" cy="4.8" r="2" />
         </g>
         <g transform="translate(9.6, 39.1386)">
           <circle cx="4.8" cy="4.8" r="2" />
           <circle cx="14.4" cy="4.8" r="2" />
           <circle cx="24" cy="4.8" r="2" />
           <circle cx="33.6" cy="4.8" r="2" />
           <circle cx="43.2" cy="4.8" r="2" />
         </g>
         <g transform="translate(9.6, 48.9848)">
           <circle cx="4.8" cy="4.8" r="2" />
           <circle cx="14.4" cy="4.8" r="2" />
           <circle cx="24" cy="4.8" r="2" />
           <circle cx="33.6" cy="4.8" r="2" />
           <circle cx="43.2" cy="4.8" r="2" />
         </g>
       </g>
     </svg>
        ) : (    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="900"
          height="600"
          viewBox="0 0 9 6"
        >
          <rect width="9" height="2" fill="#ce1126" />

          <rect y="2" width="9" height="2" fill="#ffffff" />

          <polygon
            points="2.25,3 2.5,3.9 3,3.3 2,3.3 2.5,3.9"
            fill="#007a3d"
            transform="translate(0.5,0.1) scale(0.7)"
          />
          <polygon
            points="2.25,3 2.5,3.9 3,3.3 2,3.3 2.5,3.9"
            fill="#007a3d"
            transform="translate(2.5,0.1) scale(0.7)"
          />

          <rect y="4" width="9" height="2" fill="#000000" />
        </svg>
         
        )}
      </button>
      </div>
    </div>
  );
};

export default Navbar;
