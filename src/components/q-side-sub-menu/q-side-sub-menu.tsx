import {Event, Component, Prop, EventEmitter, h} from '@stencil/core';
import {SubMenuItems} from "../q-menu/model/menu-item.model";

@Component({
  tag: 'q-side-sub-menu',
  styleUrl: 'q-side-sub-menu.scss',
  shadow: true
})
export class QSideSubMenu {


  @Prop() subMenu: SubMenuItems[];
  @Event() routeClicked: EventEmitter;
  routeClickedHandler() {
    this.routeClicked.emit();
  }


  render() {
    return (
      <div class='q-side-sub-menu'>
        {this.subMenu[0].subMenuItems.length > 0 ?
          <div class="sub-menu-container">
            {this.subMenu.reduce((acc, item) => [
              ...acc,
              item.title ? <div class="menu-voice">{item.title}</div> : null,
              ...item.subMenuItems.map((a) => (
                <a href={a.url} class="menu-button" onClick={() => this.routeClickedHandler()}>{a.title}</a>
              ))
            ], [])}
          </div> : null
        }
      </div>
    );
  }
}
