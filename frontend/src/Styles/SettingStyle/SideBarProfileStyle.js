import { createGlobalStyle } from "styled-components";

export const SideBarProfileStyle = createGlobalStyle`
.sidebar {
    flex: 5;
    height: fit-content;
    margin: 20px;
    padding-bottom: 30px;
    background-color: #fdfbfb;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .sidebarItem {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .sidebarTitle {
    margin: 10px;
    padding: 5px;
    width: 80%;
    border-top: solid 1px #a7a4a4;
    border-bottom: solid 1px #a7a4a4;
    text-align: center;
    font-family: "Varela Round", sans-serif;
    font-size: 1rem;
    line-height: 19px;
    color: #222222;
    font-weight: 600;
  }
  
  .sidebarItem > img {
    margin-top: 15px;
    width: 250px;
    height: 300px;
    -moz-transform: scale(-1, -1);
      -o-transform: scale(-1, -1);
      -webkit-transform: scale(-1, -1);
      transform: scale(1, 1);
  }
  
  .sidebarItem > p {
    padding: 30px;
  }
  
  .sidebarList {
    list-style-type: none;
    margin-bottom: 30px;
  }
  
  .sidebarListItem {
    display: inline-block;
    width: 50%;
    margin-top: 15px;
    cursor: pointer;
  }
  
  .sidebarSocial {
    margin-top: 15px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .sidebarIcon {
    font-size: 3.5rem;
    margin-left: 10px;
  }
`;
