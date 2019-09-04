
export interface MenuItems {
  title: string;
  url?: string;
  sideSubMenuOpened?: boolean,
  subMenu: SubMenuItems[]
}

export interface SubMenuItems {
  title?: string;
  subMenuItems: {
    title: string;
    url: string;
  }[]
}
