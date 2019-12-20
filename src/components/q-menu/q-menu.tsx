import {Component, Listen, State, h, Prop} from '@stencil/core';
import {MenuItems} from "./model/menu-item.model";

@Component({
  tag: 'q-menu',
  styleUrl: 'q-menu.scss',
  shadow: false
})
export class QMenu {

  @State() menuOpened = false;
  @Prop() menuItems: MenuItems[];
  @Prop() openMenuIcon;
  @Prop() closeMenuIcon;
  @Prop() imgPath: string;
  // @ts-ignore
  appMenu: HTMLQMenuElement;
  sideMenuButtonItem: HTMLElement;
  menuPosition: number;
  miniLogo;

  async componentWillLoad() {
    // this.menuItems = await getMenu();
    if (!this.openMenuIcon) {
      this.openMenuIcon = <ion-icon name="menu"/>;
    }
    if (!this.closeMenuIcon) {
      this.closeMenuIcon = <ion-icon name="close"/>;
    }
    // this.imgPath = '../../assets/logo.png';
  }

  componentDidLoad() {
    this.appMenu = document.querySelector('q-menu');
    this.miniLogo = document.querySelector('q-menu .q-menu .menu-mini-logo');
    this.menuPosition = this.appMenu.offsetTop;
  }


  private getMenuClasses() {
    if (this.menuOpened) {
      return 'menu-open';
    }
    return 'menu-close';
  }

  private toggle() {
    this.menuOpened = !this.menuOpened;
  }

  @Listen('routeClicked')
  todoCompletedHandler() {
    this.navigate();
  }

  private navigate() {
    this.toggle();
    this.scrollToTop();
  }

  private scrollToTop() {
    window.scrollTo(0, 0);
  }


  setSubSideMenuClass(item) {
    if (!this.menuItems) {return}
    let index = this.menuItems.indexOf(item,1);
    if (this.sideMenuButtonItem) {
      this.sideMenuButtonItem.classList.remove('open');
    }
    this.sideMenuButtonItem = document.querySelector(`q-menu .q-menu .side-menu .menu-open .menu-content .button-item:nth-of-type(${index + 1})`);
    let allSideMenuButtonItems = document.querySelectorAll(`q-menu .q-menu .side-menu .menu-content .button-item`);
    if (item.menuOpened) {
      item.menuOpened = false;
      this.sideMenuButtonItem.classList.remove('open');
      allSideMenuButtonItems.forEach(item => {
        item.classList.remove('items-opacity');
      });
    } else {
      item.menuOpened = true;
      allSideMenuButtonItems.forEach(item => {
        item.classList.add('items-opacity');
      });
      this.sideMenuButtonItem.classList.add('open');
    }
  }

  // @ts-ignore
  @Listen('scroll', {target: "window"})
  handleScroll() {
/*    if (this.miniLogo) {
      if (window.pageYOffset >= this.menuPosition) {
        this.miniLogo.classList.add('menu-mini-logo-show');
      } else {
        this.miniLogo.classList.remove('menu-mini-logo-show');
      }
    }*/

    if (this.appMenu) {
      if (window.pageYOffset >= this.menuPosition) {
        this.appMenu.classList.add('sticky');
      } else {
        this.appMenu.classList.remove('sticky');
      }
    }
  }



  render() {
     {
      return (
        <div class="q-menu">
          <img src={this.imgPath} class="menu-mini-logo" alt="logo"/>
          <div class="side-menu">
            <div class={this.getMenuClasses()}>
              <span class="icon-open" onClick={() => this.toggle()}>{this.openMenuIcon}</span>
              <span class="icon-close" onClick={() => this.toggle()}>{this.closeMenuIcon}</span>
              {<div class="menu-content">
                {this.menuItems.map((item) =>
                    <div class="button-item">
                      <div class="row-title">
                        { item.url ?
                          <a href={item.url} class="menu-button side" onClick={() => this.navigate()}>{item.title}</a>
                          : <div class="menu-button side" onClick={() => this.setSubSideMenuClass(item)}>{item.title}</div>
                        }
                        {
                          item.subMenu[0].subMenuItems.length > 0 ?
                            <ion-icon name='arrow-dropdown' class="sub-menu-icon"/> : null
                        }
                        {
                          item.subMenu[0].subMenuItems.length > 0 ?
                            <ion-icon name='arrow-dropup' class="sub-menu-icon-opened"/> : null
                        }
                      </div>
                      {
                        <div class="sub-container">
                              <q-side-sub-menu subMenu={item.subMenu} class="side-sub-menu"/>
                        </div>
                      }
                    </div>
                  )}
              </div>
              }
            </div>
          </div>

          <div class="buttons-container">
            {this.menuItems.map((item) =>
              <div class="button-item">
                { item.url ? <a href={item.url} class="menu-button" onClick={() => this.scrollToTop()}>{item.title}</a> : <div class="menu-button">{item.title}</div> }
                {
                  item.subMenu.length > 0 ?
                    <q-sub-menu subMenu={item.subMenu} class="sub-menu"/> : null
                }
              </div>
              )}
          </div>
        </div>
      );
    }
  }
}
