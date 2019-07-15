import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatListModule } from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule
]

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
