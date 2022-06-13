import { settingsForm } from './Iframe.settingsForm';
const HTMLComponent = Formio.Components.components.htmlelement;

class iframe extends HTMLComponent {

    static schema() {
        return HTMLComponent.schema({
            label: 'Iframe',
            type: 'iframe',
            tag: 'img',
        });
    }

    static get builderInfo() {
        return {
            title: 'Iframe',
            group: 'layout',
            icon: 'code',
            weight: 2,
            schema: iframe.schema(),
        };
    }

    // static editForm = settingsForm;
    render() {
        return super.render(this.renderTemplate('html', {
          tag: 'img',
          attrs: [{attr: 'src', value:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=DH7p1w2o_fIU8M&vet=12ahUKEwiNrazf34_4AhWUsyoKHd22DgkQMygBegUIARC5AQ..i&docid=Ba_eiczVaD9-zM&w=771&h=480&q=image&ved=2ahUKEwiNrazf34_4AhWUsyoKHd22DgkQMygBegUIARC5AQ'}],
          content: this.content,
        }));
      }

      attach(element) {
        this.loadRefs(element, { html: 'single' });
        this.dataReady.then(() => {
          if (this.refs.html) {
            this.setContent(this.refs.html, this.content);
          }
        });
        if (this.component.refreshOnChange) {
          this.on('change', () => {
            if (this.refs.html) {
              this.setContent(this.refs.html, this.content);
            }
          }, true);
        }
        return super.attach(element);
      }
}

const getTemplateString = (context) => {
    const compiled = context._.template(
        context.component.src,
        // eslint-disable-next-line no-param-reassign
        (context._.templateSettings.interpolate = /{{([\s\S]+?)}}/g),
    );

    return compiled(context);
};

export default iframe
