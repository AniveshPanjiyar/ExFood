import { NgModule } from '@angular/core';
import { NoimagePipe } from './noimage.pipe';
import { IonicModule } from '@ionic/angular';

@NgModule({
	declarations: [NoimagePipe
    ],
	imports: [IonicModule],
	exports: [NoimagePipe
    ]
})
export class PipeModule {}
