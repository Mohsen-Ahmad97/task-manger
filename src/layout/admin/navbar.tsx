// import { MenuOutlined } from "@ant-design/icons";
// import { useTranslation } from "react-i18next";
// import i18n from "../../Local/I18N";

// interface NavbarProps {
//   language: string; // تعريف نوع language
//   setLanguage: (value: string) => void; // تعريف نوع setLanguage
//   select: string; // تعريف نوع language
//   setSelect: (value: string) => void;
// }

// const Navbar = ({ language, setLanguage, select, setSelect }: NavbarProps) => {
//   const { t } = useTranslation();
//   const handleChange = (value: string) => {
//     i18n.changeLanguage(value);
//   };
//   return (
//     <div className="navbar">
//       <div
//         className="menu"
//         onClick={() => {
//           setSelect(select === "true" ? "false" : "true");
//         }}
//       >
//         <MenuOutlined />
//       </div>
//       <div>
//         <button
//           onClick={() => {
//             const newLanguage = language === "true" ? "false" : "true";
//             setLanguage(newLanguage);
//             handleChange(newLanguage==="true" ?"en" :"ar");
//           }}
//         >
//           {language === "true" ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="900"
//               height="600"
//               viewBox="0 0 190 100"
//             >
//               <rect width="190" height="100" fill="#b22234" />
//               <rect y="7.6923" width="190" height="7.6923" fill="#ffffff" />
//               <rect y="23.077" width="190" height="7.6923" fill="#ffffff" />
//               <rect y="38.4615" width="190" height="7.6923" fill="#ffffff" />
//               <rect y="53.8462" width="190" height="7.6923" fill="#ffffff" />
//               <rect y="69.2307" width="190" height="7.6923" fill="#ffffff" />
//               <rect y="84.6154" width="190" height="7.6923" fill="#ffffff" />

//               <rect width="76" height="53.8462" fill="#3c3b6e" />
//               <g fill="#ffffff">
//                 <g transform="translate(4, 4)">
//                   <circle cx="4.8" cy="4.8" r="2" />
//                   <circle cx="14.4" cy="4.8" r="2" />
//                   <circle cx="24" cy="4.8" r="2" />
//                   <circle cx="33.6" cy="4.8" r="2" />
//                   <circle cx="43.2" cy="4.8" r="2" />
//                   <circle cx="52.8" cy="4.8" r="2" />
//                 </g>
//                 <g transform="translate(4, 13.8462)">
//                   <circle cx="4.8" cy="4.8" r="2" />
//                   <circle cx="14.4" cy="4.8" r="2" />
//                   <circle cx="24" cy="4.8" r="2" />
//                   <circle cx="33.6" cy="4.8" r="2" />
//                   <circle cx="43.2" cy="4.8" r="2" />
//                   <circle cx="52.8" cy="4.8" r="2" />
//                 </g>
//                 <g transform="translate(4, 23.6924)">
//                   <circle cx="4.8" cy="4.8" r="2" />
//                   <circle cx="14.4" cy="4.8" r="2" />
//                   <circle cx="24" cy="4.8" r="2" />
//                   <circle cx="33.6" cy="4.8" r="2" />
//                   <circle cx="43.2" cy="4.8" r="2" />
//                   <circle cx="52.8" cy="4.8" r="2" />
//                 </g>
//                 <g transform="translate(4, 33.5386)">
//                   <circle cx="4.8" cy="4.8" r="2" />
//                   <circle cx="14.4" cy="4.8" r="2" />
//                   <circle cx="24" cy="4.8" r="2" />
//                   <circle cx="33.6" cy="4.8" r="2" />
//                   <circle cx="43.2" cy="4.8" r="2" />
//                   <circle cx="52.8" cy="4.8" r="2" />
//                 </g>
//                 <g transform="translate(4, 43.3848)">
//                   <circle cx="4.8" cy="4.8" r="2" />
//                   <circle cx="14.4" cy="4.8" r="2" />
//                   <circle cx="24" cy="4.8" r="2" />
//                   <circle cx="33.6" cy="4.8" r="2" />
//                   <circle cx="43.2" cy="4.8" r="2" />
//                   <circle cx="52.8" cy="4.8" r="2" />
//                 </g>

//                 <g transform="translate(9.6, 9.6)">
//                   <circle cx="4.8" cy="4.8" r="2" />
//                   <circle cx="14.4" cy="4.8" r="2" />
//                   <circle cx="24" cy="4.8" r="2" />
//                   <circle cx="33.6" cy="4.8" r="2" />
//                   <circle cx="43.2" cy="4.8" r="2" />
//                 </g>
//                 <g transform="translate(9.6, 19.4462)">
//                   <circle cx="4.8" cy="4.8" r="2" />
//                   <circle cx="14.4" cy="4.8" r="2" />
//                   <circle cx="24" cy="4.8" r="2" />
//                   <circle cx="33.6" cy="4.8" r="2" />
//                   <circle cx="43.2" cy="4.8" r="2" />
//                 </g>
//                 <g transform="translate(9.6, 29.2924)">
//                   <circle cx="4.8" cy="4.8" r="2" />
//                   <circle cx="14.4" cy="4.8" r="2" />
//                   <circle cx="24" cy="4.8" r="2" />
//                   <circle cx="33.6" cy="4.8" r="2" />
//                   <circle cx="43.2" cy="4.8" r="2" />
//                 </g>
//                 <g transform="translate(9.6, 39.1386)">
//                   <circle cx="4.8" cy="4.8" r="2" />
//                   <circle cx="14.4" cy="4.8" r="2" />
//                   <circle cx="24" cy="4.8" r="2" />
//                   <circle cx="33.6" cy="4.8" r="2" />
//                   <circle cx="43.2" cy="4.8" r="2" />
//                 </g>
//                 <g transform="translate(9.6, 48.9848)">
//                   <circle cx="4.8" cy="4.8" r="2" />
//                   <circle cx="14.4" cy="4.8" r="2" />
//                   <circle cx="24" cy="4.8" r="2" />
//                   <circle cx="33.6" cy="4.8" r="2" />
//                   <circle cx="43.2" cy="4.8" r="2" />
//                 </g>
//               </g>
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="900"
//               height="600"
//               viewBox="0 0 9 6"
//             >
//               <rect width="9" height="2" fill="#ce1126" />

//               <rect y="2" width="9" height="2" fill="#ffffff" />

//               <polygon
//                 points="2.25,3 2.5,3.9 3,3.3 2,3.3 2.5,3.9"
//                 fill="#007a3d"
//                 transform="translate(0.5,0.1) scale(0.7)"
//               />
//               <polygon
//                 points="2.25,3 2.5,3.9 3,3.3 2,3.3 2.5,3.9"
//                 fill="#007a3d"
//                 transform="translate(2.5,0.1) scale(0.7)"
//               />

//               <rect y="4" width="9" height="2" fill="#000000" />
//             </svg>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import {
  MenuOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18n from "../../Local/I18N";

interface NavbarProps {
  language: string;
  setLanguage: (value: string) => void;
  select: string;
  setSelect: (value: string) => void;
  theme: string; // "light" or "dark"
  setTheme: (value: string) => void; // Function to update theme
}
const Navbar = ({
  language,
  setLanguage,
  select,
  setSelect,
  theme,
  setTheme,
}: NavbarProps) => {
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const { t } = useTranslation();

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Update the state
    document.body.setAttribute("data-theme", newTheme); // Update the attribute
    localStorage.setItem("theme", newTheme); // Persist the theme
  };

  return (
    <div className={`navbar ${theme}`}>
      <div
        className="menu"
        onClick={() => {
          setSelect(select === "true" ? "false" : "true");
        }}
      >
        <MenuOutlined />
      </div>
      <div className="actions">
        {/* Language Toggle */}
        <button
          onClick={() => {
            const newLanguage = language === "true" ? "false" : "true";
            setLanguage(newLanguage);
            handleChangeLanguage(newLanguage === "true" ? "en" : "ar");
            document.body.setAttribute("lang", newLanguage);
          }}
        >
          {language === "true" ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1235 650">
              <rect width="1235" height="650" fill="#b22234" />
              <g fill="#ffffff">
                <rect y="50" width="1235" height="50" />
                <rect y="150" width="1235" height="50" />
                <rect y="250" width="1235" height="50" />
                <rect y="350" width="1235" height="50" />
                <rect y="450" width="1235" height="50" />
                <rect y="550" width="1235" height="50" />
              </g>

              <rect width="494" height="350" fill="#3c3b6e" />

              <g fill="#ffffff">
                <g transform="translate(19, 20)">
                  <g transform="translate(0, 0)">
                    <circle cx="19" cy="20" r="10" />
                    <circle cx="57" cy="20" r="10" />
                    <circle cx="95" cy="20" r="10" />
                    <circle cx="133" cy="20" r="10" />
                    <circle cx="171" cy="20" r="10" />
                    <circle cx="209" cy="20" r="10" />
                  </g>
                  <g transform="translate(0, 60)">
                    <circle cx="19" cy="20" r="10" />
                    <circle cx="57" cy="20" r="10" />
                    <circle cx="95" cy="20" r="10" />
                    <circle cx="133" cy="20" r="10" />
                    <circle cx="171" cy="20" r="10" />
                    <circle cx="209" cy="20" r="10" />
                  </g>
                  <g transform="translate(0, 120)">
                    <circle cx="19" cy="20" r="10" />
                    <circle cx="57" cy="20" r="10" />
                    <circle cx="95" cy="20" r="10" />
                    <circle cx="133" cy="20" r="10" />
                    <circle cx="171" cy="20" r="10" />
                    <circle cx="209" cy="20" r="10" />
                  </g>
                  <g transform="translate(0, 180)">
                    <circle cx="19" cy="20" r="10" />
                    <circle cx="57" cy="20" r="10" />
                    <circle cx="95" cy="20" r="10" />
                    <circle cx="133" cy="20" r="10" />
                    <circle cx="171" cy="20" r="10" />
                    <circle cx="209" cy="20" r="10" />
                  </g>
                  <g transform="translate(0, 240)">
                    <circle cx="19" cy="20" r="10" />
                    <circle cx="57" cy="20" r="10" />
                    <circle cx="95" cy="20" r="10" />
                    <circle cx="133" cy="20" r="10" />
                    <circle cx="171" cy="20" r="10" />
                    <circle cx="209" cy="20" r="10" />
                  </g>
                </g>

                <g transform="translate(38, 50)">
                  <g transform="translate(0, 30)">
                    <circle cx="19" cy="20" r="10" />
                    <circle cx="57" cy="20" r="10" />
                    <circle cx="95" cy="20" r="10" />
                    <circle cx="133" cy="20" r="10" />
                    <circle cx="171" cy="20" r="10" />
                  </g>
                  <g transform="translate(0, 90)">
                    <circle cx="19" cy="20" r="10" />
                    <circle cx="57" cy="20" r="10" />
                    <circle cx="95" cy="20" r="10" />
                    <circle cx="133" cy="20" r="10" />
                    <circle cx="171" cy="20" r="10" />
                  </g>
                  <g transform="translate(0, 150)">
                    <circle cx="19" cy="20" r="10" />
                    <circle cx="57" cy="20" r="10" />
                    <circle cx="95" cy="20" r="10" />
                    <circle cx="133" cy="20" r="10" />
                    <circle cx="171" cy="20" r="10" />
                  </g>
                  <g transform="translate(0, 210)">
                    <circle cx="19" cy="20" r="10" />
                    <circle cx="57" cy="20" r="10" />
                    <circle cx="95" cy="20" r="10" />
                    <circle cx="133" cy="20" r="10" />
                    <circle cx="171" cy="20" r="10" />
                  </g>
                  <g transform="translate(0, 270)">
                    <circle cx="19" cy="20" r="10" />
                    <circle cx="57" cy="20" r="10" />
                    <circle cx="95" cy="20" r="10" />
                    <circle cx="133" cy="20" r="10" />
                    <circle cx="171" cy="20" r="10" />
                  </g>
                </g>
              </g>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
              <rect width="900" height="200" fill="#ce1126" />

              <rect y="200" width="900" height="200" fill="#ffffff" />

              <rect y="400" width="900" height="200" fill="#000000" />

              <polygon
                points="450,275 463.09,320 510,320 471.82,345 485,390 450,365 415,390 428.18,345 390,320 436.91,320"
                fill="#007a3d"
              />
              <polygon
                points="300,275 313.09,320 360,320 321.82,345 335,390 300,365 265,390 278.18,345 240,320 286.91,320"
                fill="#007a3d"
              />
            </svg>
          )}
        </button>

        {/* Theme Toggle */}
        <button onClick={handleThemeChange}>
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              width="200"
              height="200"
            >
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="yellow"
                stroke="#388E3C"
                stroke-width="10"
              />

              <rect
                x="50"
                y="60"
                width="100"
                height="10"
                rx="5"
                fill="#ffffff"
              />
              <rect
                x="50"
                y="90"
                width="80"
                height="10"
                rx="5"
                fill="#ffffff"
              />
              <rect
                x="50"
                y="120"
                width="60"
                height="10"
                rx="5"
                fill="#ffffff"
              />

              <path
                d="M70 140 L90 160 L130 120"
                stroke="#ffffff"
                stroke-width="10"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="100"
              height="100"
              fill="none"
              stroke="#FFFFFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                fill="#FFFFFF"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
