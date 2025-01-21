import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ select }: any) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("employee"); // Ensure the state name is correct
  console.log(select);
  return (
    <div className={select === "false" ? "sidebar " : "sidebarcollapse"}>
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="200"
          height="200"
        >
          <rect width="200" height="200" rx="20" fill="#757575" />
          <rect x="40" y="50" width="120" height="20" rx="5" fill="#ffffff" />
          <rect x="40" y="85" width="90" height="20" rx="5" fill="#ffffff" />
          <rect x="40" y="120" width="70" height="20" rx="5" fill="#ffffff" />
          <path
            d="M75 130 L90 145 L125 110"
            stroke="#ffffff"
            stroke-width="12"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Task Manager</span>
      </div>
      <div className="items">
        <ul>
          <li
            className={selected === "employee" ? "selected" : ""}
            onClick={() => {
              navigate("");
              setSelected("employee");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              {/* Head */}
              <circle cx="12" cy="8" r="4" />
              {/* Body */}
              <path d="M6 20v-1c0-2.8 3.1-5 6-5s6 2.2 6 5v1H6z" />
            </svg>
            <a>Employee</a>
          </li>
          <li
            className={selected === "mission" ? "selected" : ""}
            onClick={() => {
              navigate("mission");
              setSelected("mission");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="24"
              height="24"
              fill="currentColor"
            >
              {/* Outer target */}
              <circle
                cx="32"
                cy="32"
                r="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              {/* Inner target */}
              <circle
                cx="32"
                cy="32"
                r="6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              {/* Arrow */}
              <path
                d="M16 16l10 10M16 16h8l2 8M16 16l8-2 2 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a>Mission</a>
          </li>
          <li
            className={selected === "team" ? "selected" : ""}
            onClick={() => {
              navigate("team");
              setSelected("team");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="24"
              height="24"
              fill="currentColor"
            >
              {/* Central person */}
              <circle cx="32" cy="20" r="6" />
              <path d="M26 38c0-3.3 2.7-6 6-6s6 2.7 6 6v4H26v-4z" />
              {/* Left person */}
              <circle cx="16" cy="24" r="5" />
              <path d="M11 39c0-2.7 2.2-5 5-5s5 2.2 5 5v3H11v-3z" />
              {/* Right person */}
              <circle cx="48" cy="24" r="5" />
              <path d="M43 39c0-2.7 2.2-5 5-5s5 2.2 5 5v3H43v-3z" />
            </svg>
            <a>Team</a>
          </li>
        </ul>
      </div>
      <div className="log-out">
        <ul>
          <li
            onClick={() => {
              navigate("/");
              document.body.setAttribute("lang", 'true');
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              {/* Box/door */}
              <path
                d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Arrow */}
              <path
                d="M16 17l5-5-5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="21"
                y1="12"
                x2="9"
                y2="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a>Log-Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
