![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Responsive Menu

####This is a Menu Web Component.

A responsive menu designed for Web and Mobile Apps build with StencilJS.


![Menu-Demo](https://github.com/matteocusinato/q-menu/blob/master/src/q-demo2.gif?raw=true)


## Installation

```bash
npm i q-menu --save
```

## Usage
You must pass an config for menu of type MenuItems[], and the open/close icons.
```bash
<q-menu menuItems={this.menuItems} openMenuIcon={this.openMenuIcon} closeMenuIcon={this.closeMenuIcon} imgPath={'../assets/logo.png'}></q-menu>
```

## Styling
```bash
In your global app css:
@import "~q-menu/dist/collection/global/app.scss";

Customize your menu with css variables:
    --q-menu-background // primary menu background color, default: unset;
    --q-sub-menu-background: // background color of desktop sub menu, default: unset;
    --q-side-menu-background: // background color of mobile sub menu, default: unset;
    --q-secondary-color // secondary color, default: #0074D9;
    --q-button-text-color // color of the text of the button, default: black;
    --q-transition // menu transition, default: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
    --q-icon-open-color: // the color of the icon that open the menu
    --q-icon-close-color: // the color of the icon that close the menu
```

## Example
```bash
// if you use ion-icon, you must import the script
// <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>

openMenuIcon = <ion-icon name="menu"/>;
closeMenuIcon = <ion-icon name="close"/>; 



const menuItems: MenuItems[] = [
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
  }
];

```


## Properties

| Property        | Attribute         | Description | Type          | Default     |
| --------------- | ----------------- | ----------- | ------------- | ----------- |
| `closeMenuIcon` | `close-menu-icon` |             | `any`         | `undefined` |
| `imgPath`       | `img-path`        |             | `string`      | `undefined` |
| `menuItems`     | --                |             | `MenuItems[]` | `undefined` |
| `openMenuIcon`  | `open-menu-icon`  |             | `any`         | `undefined` |
