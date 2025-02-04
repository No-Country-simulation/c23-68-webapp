import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className=" bg-white min-h-screen flex flex-col w-[22%] py-11">
      <nav>
        <ul className="space-y-6 px-5">
        <li>       
            <NavLink to="/" 
            className={({ isActive }) => 
              isActive 
                ? "block px-5 mx-3 py-3 bg-amarillo rounded-lg font-onest font-normal text-xl text-negro" 
                : "block px-5 mx-3 py-3 hover:bg-amarillomasclaro rounded-lg font-onest font-normal text-xl text-negro"            
                }>
            <svg 
            className="inline-block mr-3"
            width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 13L4.44444 10.5556M4.44444 10.5556L13 2L21.5556 10.5556M4.44444 10.5556V22.7778C4.44444 23.1019 4.57321 23.4128 4.80243 23.642C5.03164 23.8712 5.34251 24 5.66667 24H9.33333M21.5556 10.5556L24 13M21.5556 10.5556V22.7778C21.5556 23.1019 21.4268 23.4128 21.1976 23.642C20.9684 23.8712 20.6575 24 20.3333 24H16.6667M9.33333 24C9.65749 24 9.96836 23.8712 10.1976 23.642C10.4268 23.4128 10.5556 23.1019 10.5556 22.7778V17.8889C10.5556 17.5647 10.6843 17.2539 10.9135 17.0246C11.1427 16.7954 11.4536 16.6667 11.7778 16.6667H14.2222C14.5464 16.6667 14.8573 16.7954 15.0865 17.0246C15.3157 17.2539 15.4444 17.5647 15.4444 17.8889V22.7778C15.4444 23.1019 15.5732 23.4128 15.8024 23.642C16.0316 23.8712 16.3425 24 16.6667 24M9.33333 24H16.6667" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" 
                    className={({ isActive }) => 
                      isActive 
                        ? "block px-5 mx-3 py-3 bg-amarillo rounded-lg font-onest font-normal text-xl text-negro" 
                        : "block px-5 mx-3 py-3 hover:bg-amarillomasclaro rounded-lg font-onest font-normal text-xl text-negro"            
                        }>
            <svg 
            className="inline-block mr-3"
            width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.80546 2.80546C2.28973 3.32118 2 4.02065 2 4.75V7.5C2 8.22935 2.28973 8.92882 2.80546 9.44454C3.32118 9.96027 4.02065 10.25 4.75 10.25H7.5C8.22935 10.25 8.92882 9.96027 9.44454 9.44454C9.96027 8.92882 10.25 8.22935 10.25 7.5V4.75C10.25 4.02065 9.96027 3.32118 9.44454 2.80546C8.92882 2.28973 8.22935 2 7.5 2H4.75C4.02065 2 3.32118 2.28973 2.80546 2.80546Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5555 2.80546C16.0397 3.32118 15.75 4.02065 15.75 4.75V7.5C15.75 8.22935 16.0397 8.92882 16.5555 9.44454C17.0712 9.96027 17.7707 10.25 18.5 10.25H21.25C21.9793 10.25 22.6788 9.96027 23.1945 9.44454C23.7103 8.92882 24 8.22935 24 7.5V4.75C24 4.02065 23.7103 3.32118 23.1945 2.80546C22.6788 2.28973 21.9793 2 21.25 2H18.5C17.7707 2 17.0712 2.28973 16.5555 2.80546Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.80546 16.5555C2.28973 17.0712 2 17.7707 2 18.5V21.25C2 21.9793 2.28973 22.6788 2.80546 23.1945C3.32118 23.7103 4.02065 24 4.75 24H7.5C8.22935 24 8.92882 23.7103 9.44454 23.1945C9.96027 22.6788 10.25 21.9793 10.25 21.25V18.5C10.25 17.7707 9.96027 17.0712 9.44454 16.5555C8.92882 16.0397 8.22935 15.75 7.5 15.75H4.75C4.02065 15.75 3.32118 16.0397 2.80546 16.5555Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5555 16.5555C16.0397 17.0712 15.75 17.7707 15.75 18.5V21.25C15.75 21.9793 16.0397 22.6788 16.5555 23.1945C17.0712 23.7103 17.7707 24 18.5 24H21.25C21.9793 24 22.6788 23.7103 23.1945 23.1945C23.7103 22.6788 24 21.9793 24 21.25V18.5C24 17.7707 23.7103 17.0712 23.1945 16.5555C22.6788 16.0397 21.9793 15.75 21.25 15.75H18.5C17.7707 15.75 17.0712 16.0397 16.5555 16.5555Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/datos" 
                    className={({ isActive }) => 
                      isActive 
                        ? "block px-5 mx-3 py-3 bg-amarillo rounded-lg font-onest font-normal text-xl text-negro" 
                        : "block px-5 mx-3 py-3 hover:bg-amarillomasclaro rounded-lg font-onest font-normal text-xl text-negro"            
                        }>
            <svg 
            className="inline-block mr-3"
            width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5909 4.47537L19.5197 8.39635M17.2575 2.81206C17.7785 2.29211 18.4851 2 19.2219 2C19.9587 2 20.6653 2.29211 21.1863 2.81206C21.7073 3.33201 22 4.03722 22 4.77255C22 5.50787 21.7073 6.21308 21.1863 6.73304L5.88882 22H2V18.0391L17.2575 2.81206Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              Datos
            </NavLink>
          </li>

          <li>
            <NavLink to="/ahorros" 
                    className={({ isActive }) => 
                      isActive 
                        ? "block px-5 mx-3 py-3 bg-amarillo rounded-lg font-onest font-normal text-xl text-negro" 
                        : "block px-5 mx-3 py-3 hover:bg-amarillomasclaro rounded-lg font-onest font-normal text-xl text-negro"            
                        }>
            <svg 
            className="inline-block mr-3"
            width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75033 5.41667H7.58366C7.00902 5.41667 6.45792 5.64494 6.05159 6.05127C5.64527 6.4576 5.41699 7.0087 5.41699 7.58333V20.5833C5.41699 21.158 5.64527 21.7091 6.05159 22.1154C6.45792 22.5217 7.00902 22.75 7.58366 22.75H18.417C18.9916 22.75 19.5427 22.5217 19.9491 22.1154C20.3554 21.7091 20.5837 21.158 20.5837 20.5833V7.58333C20.5837 7.0087 20.3554 6.4576 19.9491 6.05127C19.5427 5.64494 18.9916 5.41667 18.417 5.41667H16.2503M9.75033 5.41667C9.75033 5.9913 9.9786 6.5424 10.3849 6.94873C10.7913 7.35506 11.3424 7.58333 11.917 7.58333H14.0837C14.6583 7.58333 15.2094 7.35506 15.6157 6.94873C16.0221 6.5424 16.2503 5.9913 16.2503 5.41667M9.75033 5.41667C9.75033 4.84203 9.9786 4.29093 10.3849 3.8846C10.7913 3.47827 11.3424 3.25 11.917 3.25H14.0837C14.6583 3.25 15.2094 3.47827 15.6157 3.8846C16.0221 4.29093 16.2503 4.84203 16.2503 5.41667M13.0003 13H16.2503M13.0003 17.3333H16.2503M9.75033 13H9.76116M9.75033 17.3333H9.76116" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              Ahorros
            </NavLink>
          </li>

          <li>
            <NavLink to="/finblog" 
                    className={({ isActive }) => 
                      isActive 
                        ? "block px-5 mx-3 py-3 bg-amarillo rounded-lg font-onest font-normal text-xl text-negro" 
                        : "block px-5 mx-3 py-3 hover:bg-amarillomasclaro rounded-lg font-onest font-normal text-xl text-negro"            
                        }>
            <svg 
            className="inline-block mr-3"
            width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1014_1081)">
            <path d="M22.8056 23.8888H5.69444C5.04614 23.8888 4.42438 23.6313 3.96596 23.1728C3.50754 22.7144 3.25 22.0927 3.25 21.4444V6.7777C3.25 6.12939 3.50754 5.50764 3.96596 5.04921C4.42438 4.59079 5.04614 4.33325 5.69444 4.33325H17.9167C18.565 4.33325 19.1867 4.59079 19.6451 5.04921C20.1036 5.50764 20.3611 6.12939 20.3611 6.7777V7.99992M22.8056 23.8888C22.1572 23.8888 21.5355 23.6313 21.0771 23.1728C20.6187 22.7144 20.3611 22.0927 20.3611 21.4444V7.99992M22.8056 23.8888C23.4539 23.8888 24.0756 23.6313 24.534 23.1728C24.9925 22.7144 25.25 22.0927 25.25 21.4444V10.4444C25.25 9.79606 24.9925 9.1743 24.534 8.71588C24.0756 8.25746 23.4539 7.99992 22.8056 7.99992H20.3611M15.4722 4.33325H10.5833M8.13889 18.9999H15.4722M8.13889 9.22214H15.4722V14.111H8.13889V9.22214Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1014_1081">
            <rect width="26" height="26" fill="white"/>
            </clipPath>
            </defs>
            </svg>
              Finblog
            </NavLink>
          </li>

          <li>
            <NavLink to="/configuracion" 
                    className={({ isActive }) => 
                      isActive 
                        ? "block px-5 mx-3 py-3 bg-amarillo rounded-lg font-onest font-normal text-xl text-negro" 
                        : "block px-5 mx-3 py-3 hover:bg-amarillomasclaro rounded-lg font-onest font-normal text-xl text-negro"            
                        }>
            <svg 
            className="inline-block mr-3"
            width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0472 3.60967C14.5266 1.46344 11.4734 1.46344 10.9528 3.60967C10.6154 4.99689 9.02656 5.65444 7.80922 4.91133C5.92211 3.76244 3.76367 5.92211 4.91256 7.808C5.08526 8.09125 5.18864 8.41128 5.21428 8.74204C5.23993 9.0728 5.18711 9.40494 5.06013 9.71143C4.93316 10.0179 4.7356 10.2901 4.48356 10.5058C4.23151 10.7215 3.93209 10.8747 3.60967 10.9528C1.46344 11.4734 1.46344 14.5266 3.60967 15.0472C3.9318 15.1256 4.2309 15.2788 4.48267 15.4945C4.73443 15.7102 4.93175 15.9822 5.05858 16.2885C5.18541 16.5948 5.23818 16.9267 5.21259 17.2573C5.18701 17.5878 5.08379 17.9076 4.91133 18.1908C3.76244 20.0779 5.92211 22.2363 7.808 21.0874C8.09125 20.9147 8.41128 20.8114 8.74204 20.7857C9.0728 20.7601 9.40494 20.8129 9.71143 20.9399C10.0179 21.0668 10.2901 21.2644 10.5058 21.5164C10.7215 21.7685 10.8747 22.0679 10.9528 22.3903C11.4734 24.5366 14.5266 24.5366 15.0472 22.3903C15.1256 22.0682 15.2788 21.7691 15.4945 21.5173C15.7102 21.2656 15.9822 21.0683 16.2885 20.9414C16.5948 20.8146 16.9267 20.7618 17.2573 20.7874C17.5878 20.813 17.9076 20.9162 18.1908 21.0887C20.0779 22.2376 22.2363 20.0779 21.0874 18.192C20.9147 17.9087 20.8114 17.5887 20.7857 17.258C20.7601 16.9272 20.8129 16.5951 20.9399 16.2886C21.0668 15.9821 21.2644 15.7099 21.5164 15.4942C21.7685 15.2785 22.0679 15.1253 22.3903 15.0472C24.5366 14.5266 24.5366 11.4734 22.3903 10.9528C22.0682 10.8744 21.7691 10.7212 21.5173 10.5055C21.2656 10.2898 21.0683 10.0178 20.9414 9.71146C20.8146 9.40516 20.7618 9.07326 20.7874 8.74272C20.813 8.41219 20.9162 8.09236 21.0887 7.80922C22.2376 5.92211 20.0779 3.76367 18.192 4.91256C17.9087 5.08526 17.5887 5.18864 17.258 5.21428C16.9272 5.23993 16.5951 5.18711 16.2886 5.06013C15.9821 4.93316 15.7099 4.7356 15.4942 4.48356C15.2785 4.23151 15.1253 3.93209 15.0472 3.60967Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.682 15.682C17.5259 14.8381 18 13.6935 18 12.5C18 11.3065 17.5259 10.1619 16.682 9.31802C15.8381 8.47411 14.6935 8 13.5 8C12.3065 8 11.1619 8.47411 10.318 9.31802C9.47411 10.1619 9 11.3065 9 12.5C9 13.6935 9.47411 14.8381 10.318 15.682C11.1619 16.5259 12.3065 17 13.5 17C14.6935 17 15.8381 16.5259 16.682 15.682Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
              Configuración
            </NavLink>
          </li>

          <li>
            <NavLink to="/ayuda" 
                    className={({ isActive }) => 
                      isActive 
                        ? "block px-5 mx-3 py-3 bg-amarillo rounded-lg font-onest font-normal text-xl text-negro" 
                        : "block px-5 mx-3 py-3 hover:bg-amarillomasclaro rounded-lg font-onest font-normal text-xl text-negro"            
                        }>
            <svg 
            className="inline-block mr-3"
            width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.09933 10C9.73983 8.64083 11.4677 7.66667 13.5 7.66667C16.0783 7.66667 18.1667 9.2335 18.1667 11.1667C18.1667 12.8 16.6757 14.1708 14.6597 14.5582C14.0273 14.6795 13.5 15.1882 13.5 15.8333M13.5 19.3333H13.5117M24 13.5C24 14.8789 23.7284 16.2443 23.2007 17.5182C22.6731 18.7921 21.8996 19.9496 20.9246 20.9246C19.9496 21.8996 18.7921 22.6731 17.5182 23.2007C16.2443 23.7284 14.8789 24 13.5 24C12.1211 24 10.7557 23.7284 9.48182 23.2007C8.20791 22.6731 7.05039 21.8996 6.07538 20.9246C5.10036 19.9496 4.32694 18.7921 3.79926 17.5182C3.27159 16.2443 3 14.8789 3 13.5C3 10.7152 4.10625 8.04451 6.07538 6.07538C8.04451 4.10625 10.7152 3 13.5 3C16.2848 3 18.9555 4.10625 20.9246 6.07538C22.8938 8.04451 24 10.7152 24 13.5Z" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

              Ayuda
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default SideBar;