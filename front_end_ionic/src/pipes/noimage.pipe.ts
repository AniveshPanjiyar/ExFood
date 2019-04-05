import{Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'noimage'
})
export class NoimagePipe implements PipeTransform{
    transform(value:any, type?:String){
        if(value)
        return value;

        if(type=='person')
        return 'assets/imgs/no-image-man.png'

        if(type=='landscape')
        return 'assets/imgs/no-image-landscape.png'

        
        return 'assets/imgs/no-image-available.png'
    }
}
