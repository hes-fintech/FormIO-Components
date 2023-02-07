import Component from 'formiojs/components/_classes/component/Component';
import { settingsForm } from './PhoneInputComponent.settingsForm';
import { template } from './template/phoneInput.template';
import { countriesData } from './utils/countriesData';
import IMask from 'imask';

export class phoneInputComponent extends Component {
    static get builderInfo() {
        return {
            title: 'Phone',
            group: 'Data',
            icon: 'indent',
            schema: phoneInputComponent.schema(),
        };
    }

    static schema() {
        return Component.schema({
            type: 'phoneInputComponent',
        });
    }

    get defaultSchema() {
        return phoneInputComponent.schema();
    }

    static editForm = settingsForm;

    get className() {
        return `${(this as any).component.customClass}`;
    }

    phoneMask

    render(children) {
        const selectTemplate = template({ options: countriesData });
        return super.render(selectTemplate)
    }

    attach(element) {
        (this as any).loadRefs(element, {
          codeSelect: 'single',
          phoneInput: 'single',
          codeSelectOption: 'multiple',
        });
    
        const selectComponent = (this as any).refs.codeSelect; // This will be either null or the div with "myref" set on it.
        const inputComponent = (this as any).refs.phoneInput; // This will be either null or the div with "myref" set on it.
        (this as any).refs.codeSelectOption; // This will be either null or an array of divs with "mychild" set on them.
        console.log(this, 'selectComponent');
        console.log(selectComponent.value, 'selectComponent');
        (this as any).addEventListener(selectComponent, 'change', (e) => {
            console.log(e.target.value, 'selectComponent');
            const value = e.target.value;
            this.phoneMask = IMask(inputComponent, {
                mask: `+{${value.replace("+", '')}}${countriesData.find((item) => item.code === value)?.mask}` 
            });
        });

        (this as any).addEventListener(inputComponent, 'change', (e) => {
            return (this as any).updateValue()
        });

        return super.attach(element);        
    }

    getValue() {
        return `${this.phoneMask.unmaskedValue}`;
    }

    setValue(value, flags = {}) {
        const changed = (this as any).updateValue(value, flags);
        value = (this as any).dataValue;

        console.log(changed, 'changed value')
        console.log(value, 'changed value 123')

        if ((this as any).isHtmlRenderMode() && flags && (flags as any).fromSubmission && changed) {
            (this as any).itemsLoaded.then(() => {
                (this as any).redraw();
            });
      
            return changed;
        }
        (this as any).redraw();

        return changed;
    }

}
