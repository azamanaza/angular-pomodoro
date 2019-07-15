import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatFormFieldModule, MatInputModule,
  MatGridListModule, MatListModule, MatToolbarModule } from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
