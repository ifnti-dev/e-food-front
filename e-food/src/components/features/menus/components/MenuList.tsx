// MenuList.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MenuCard from './MenuCard';
import { Menu } from './Menu';

interface MenuListProps {
  menus: Menu[];
}

const MenuList: React.FC<MenuListProps> = ({ menus }) => {
  return (
    <Container>
      <h2>Liste des menus</h2>
      <Row xs={1} sm={2} md={3} lg={4} xl={4}>
        {menus.map((menu: Menu, index: number) => (
          <Col key={index}>
            <MenuCard menu={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuList;


//V1***************
// // MenuList.tsx
// import React from 'react';
// import MenuCard from './MenuCard';
// import { Menu } from './Menu';

// interface MenuListProps {
//   menus: Menu[];
// }

// const MenuList: React.FC<MenuListProps> = ({ menus }) => {
//   return (
//     <div className="menu-list">
//       <h2>Liste des menus</h2>
//       <div className="menu-list-container">
//         {menus.map(menu => (
//           <MenuCard key={menu.id} menu={menu} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MenuList;
