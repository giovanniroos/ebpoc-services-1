import { PipeTransform, Pipe } from '@angular/core';
import { ISchemeDetails } from './schemeDetails';

@Pipe({
    name: 'schemeFilter'
})
export class SchemeFilterPipe implements PipeTransform {
    transform(value: ISchemeDetails[], args: string[]): ISchemeDetails[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: ISchemeDetails) =>
            product.scheme.schemeNo.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
