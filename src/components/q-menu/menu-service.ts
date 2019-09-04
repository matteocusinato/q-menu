import {MenuItems} from "./model/menu-item.model";


export async function getMenu() : Promise<MenuItems[]> {
  return menuItems;
}

export const menuItems: MenuItems[] = [
  {
    title: 'Home',
    url: '/',
    subMenu: [{
      subMenuItems: []
    }]
  },
  {
    title: 'Story',
    url: '/story',
    subMenu: [{
      subMenuItems: []
    }]
  },
  {
    title: 'Beverages',
    subMenu: [{
      subMenuItems: [{
        title: 'Cocktails',
        url: 'beverages/cocktails'
      },
      {
        title: 'Beers',
        url: 'beverages/beers'
      },
      {
        title: 'Whisky',
        url: 'beverages/whisky'
      },
      {
        title: 'Digestive Bitter',
        url: 'beverages/digestive-bitter'
      }]
    }]
  },
  {
    title: 'Food',
    subMenu: [{
      subMenuItems: [{
        title: 'Hamburgers',
        url: 'food/hamburgers'
      },
      {
        title: 'Cheeseburgers',
        url: 'food/cheeseburgers'
      },
      {
        title: 'Pizza',
        url: 'food/pizza'
      }]
    }]
  },
  {
    title: 'Desserts & Shakes',
    subMenu: [{
      title: 'Ice cream',
      subMenuItems: [{
        title: 'Hot Fudge Sundae',
        url: 'desserts/hot-fudge-sundae'
      },
      {
        title: 'Kiddie Cone',
        url: 'desserts/kiddie-cone'
      }]
    },
      {
        title: 'Shakes',
        subMenuItems: [
          {
            title: 'Chocolate Shake',
            url: 'desserts/chocolate-shake'
          },
          {
            title: 'Vanilla Shake',
            url: 'desserts/vanilla-shake'
          }]
      }]
  },
  {
    title: 'Video',
    url: '/video',
    subMenu: [{
      subMenuItems: []
    }]
  },
  /*
  {
    title: 'Sponsor',
    underMenu: [{
      subMenuItems: [{
        title: 'Main Sponsor',
        url: '/sponsor/banco-di-sardegna'
      },
      {
        title: 'Gold Sponsor',
        url: '/sponsor/macron'
      },
      {
        title: 'Sponsor Tecnico',
        url: '/sponsor/sky'
      },
      {
        title: 'Silver Sponsor',
        url: '/sponsor/sky'
      },
      {
        title: 'Partner',
        url: '/sponsor/sky'
      },
      {
        title: 'Media Partner',
        url: '/sponsor/sky'
      },
      {
        title: 'Like Sponsor',
        url: '/sponsor/sky'
      }]
    }]
  }
   */
];
