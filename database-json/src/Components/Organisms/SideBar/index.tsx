import React, { useState } from "react";
import {
  SideBarContainer,
  MenuTitle,
  CloseButton,
  ToggleSidebarButton,
  NavItem,
  NavList,
  StyledNavLink,
} from "./styles";

const SideBar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
  isOpen,
  toggleSidebar,
}) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>
          &times; {/* This is an "X" close icon */}
        </CloseButton>
        <MenuTitle>Menu</MenuTitle>
        <NavList>
          <NavItem>
            <StyledNavLink
              to="/tables"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              See Tables
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink
              to="/run-query"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Run Query
            </StyledNavLink>
          </NavItem>
          {/* You can continue adding more navigation items as needed */}
        </NavList>
      </SideBarContainer>
      {!isOpen && (
        <ToggleSidebarButton onClick={toggleSidebar}>
          &#9776;
        </ToggleSidebarButton>
      )}
    </>
  );
};

export default SideBar;
