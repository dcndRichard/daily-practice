function twoColumnImgTxtRow() {
  let sectionTemplate = document.createElement("template");
  sectionTemplate.innerHTML = `
    <style>
        .section{
            display: flex;
            justify-content: space-between;
            padding:50px 0px;
        }
        .column{
            width:40vw;
            height: 50vh;
            // border:1px solid red;
        }
        .text-column{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .img-column{
        }
    </style>

    <section class="section">
        <div class="column text-column">
            <slot name="colmn-heading"></slot>
            <slot name="colmn-subheading"></slot>
        </div>
        <div class="column img-column">
            <slot name="the-image"></slot>
        </div>
    </section>
`;
  class CustomSection extends HTMLElement {
    constructor() {
      super();
      let myShadowRoot = this.attachShadow({
        mode: "closed"
      });
      let clone = sectionTemplate.content.cloneNode(true);
      myShadowRoot.append(clone);
    }
  }
      window.customElements.define("two-clmnsection", CustomSection);
}
twoColumnImgTxtRow();


function twoColumnTextRow() {
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
        section{
            display:flex;
            justify-content:space-between;
            padding:50px 0px;
        }
        .clmn{
            width:40vw;
            display:flex;
            flex-direction:column;
            align-self:flex-end;
        }

    </style>
    <section>
        <div class="clmn">
            <slot></slot>
            <slot></slot>
        </div>
        <div class="clmn">
            <slot name="rt-clmn-para"></slot>
        </div>
    </section>
    `;
    class Section extends HTMLElement{
        constructor() {
            super();
            let myShadowRoot = this.attachShadow({ mode: "closed" });
            let clone = template.content.cloneNode(true);
            myShadowRoot.append(clone);
        }
    }
    window.customElements.define("twocolumn-textrow", Section);
}
twoColumnTextRow()


function threeColumnTextRow() {
    let template = document.createElement("template");
    template.innerHTML = `
        <style>
            section{
                // border:1px solid red;
                display:flex;
                justify-content:space-between;
                padding:50px 0px;
                gap:3em;
            }
            .clmn{
                width:40vw;
                display:flex;
                flex-direction:column;
            }
        </style>
         <section>
            <div class="clmn">
                <slot></slot>
                <slot></slot>
            </div>
            <div class="clmn">
                <slot name="mid-clm-heading"></slot>
                <slot name="mid-clm-para"></slot>
            </div>
            <div class="clmn">
                <slot name="third-clm-heading"></slot>
                <slot name="third-clm-para"></slot>
            </div>
        </section>
    `;
    class Section extends HTMLElement{
        constructor() {
            super();
            let myShadowRoot = this.attachShadow({ mode: "closed" });
            let clone = template.content.cloneNode(true);
            myShadowRoot.append(clone);
        }
    }
    window.customElements.define("threecolumn-textrow", Section);
}
threeColumnTextRow();