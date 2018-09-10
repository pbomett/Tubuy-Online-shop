import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
    imports: [MatButtonModule, 
              MatCheckboxModule, 
              MatToolbarModule, 
              MatIconModule, 
              MatInputModule, 
              MatCardModule,
              MatFormFieldModule,
              MatGridListModule,
              MatMenuModule,
              MatTableModule,
              MatSnackBarModule,
              MatDividerModule,
              MatOptionModule,
              MatSelectModule,
              MatBadgeModule
            ],

    exports: [MatButtonModule, 
              MatCheckboxModule, 
              MatToolbarModule, 
              MatIconModule, 
              MatInputModule, 
              MatCardModule,
              MatFormFieldModule,
              MatGridListModule,
              MatMenuModule,
              MatTableModule,
              MatSnackBarModule,
              MatDividerModule,
              MatOptionModule,
              MatSelectModule,
              MatBadgeModule
            ],
  })
  export class MaterialModule { }