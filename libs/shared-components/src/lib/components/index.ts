import { ContainerContentLayoutComponent } from '../layouts';
import { DropwdownOrderComponent } from './dropwdown-order/dropwdown-order.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameListComponent } from './game-list/game-list.component';
import { HeaderComponent } from './header/header.component';
import { ModalActionComponent } from './modal-action/modal-action.component';

import { OrderByPipePipe } from '../pipes/order-by-pipe.pipe';



export const sharedComponents = [
    HeaderComponent, GameCardComponent, GameListComponent, ModalActionComponent, ContainerContentLayoutComponent, DropwdownOrderComponent,
    OrderByPipePipe
];
