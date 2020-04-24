import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

export const SCHEMA_THIRDS_COMPONENTS = [ 
];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  entryComponents: SCHEMA_THIRDS_COMPONENTS,
  imports: [SharedModule],
  exports: [...SCHEMA_THIRDS_COMPONENTS],
})
export class JsonSchemaModule {
  constructor() {
  }
}
