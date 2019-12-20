import {Component, Event, EventEmitter, Prop, h} from '@stencil/core';
import {SubMenuItems} from "../q-menu/model/menu-item.model";

@Component({
  tag: 'q-sub-menu',
  styleUrl: 'q-sub-menu.scss',
  shadow: true
})
export class QSubMenu {


  @Prop() subMenu: SubMenuItems[];
  @Event() routeClicked: EventEmitter;
  routeClickedHandler() {
    this.routeClicked.emit();
  }

  render() {
    return (
      <div class='q-sub-menu'>
        <div class="sub-menu-container">
          {this.subMenu.reduce((acc, item) => [
          ...acc,
            item.title ? <div class="menu-voice">{item.title}</div> : null,
          ...item.subMenuItems.map((a) => (
              <a href={a.url} class="menu-button"onClick={() => this.routeClickedHandler()}>{a.title}</a>
            ))
            ],[])}
        </div>
      </div>
    );
  }
}
