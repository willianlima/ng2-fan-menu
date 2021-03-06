/**
 * menu.module
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuContainerComponent } from './menu-container.component';
import { MenuOptions } from './menu-options.service';
import { MenuWingComponent } from './menu-wing.component';
import { SpinService } from './menu-spin.service';

/* HammerJS */
import 'hammerjs';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        MenuContainerComponent,
        MenuWingComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    exports: [
        MenuContainerComponent,
    ],
    providers: [
        MenuOptions,
        SpinService,
    ]
})
export class FanMenuModule {
}
