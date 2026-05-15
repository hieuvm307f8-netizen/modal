/**
 * 
 * <div className="modal-backdrop" id="modal-1">
        <div className="modal-container">
            <button className="modal-close">×</button>
            <div className="modal-content">
               <p>Modal 1</p>
            </div>
        </div>
    </div>
 */

function Modal() {
  this.openModal = (options = {}) => {
    const {templateId} = options;
    const template = document.querySelector(`#${templateId}`);
    console.log(template.content);

    if(!template) {
      console.error(`#${templateId} does not exits!`);
      return
    }

    const content = template.content.cloneNode(true);
    console.log(content);
    

    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";

    const container = document.createElement("div");
    container.className = "modal-container";

    const close = document.createElement("button");
    close.className = "modal-close";
    close.innerHTML = "&times;";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.append(content);

    backdrop.append(container);
    container.append(close, modalContent);
    document.body.append(backdrop);

    setTimeout(() => {
      backdrop.classList.add("show");
    }, 0);

    //close
    close.addEventListener("click", () => this.closeModal(backdrop));

    backdrop.addEventListener("click", (e) => {
      if (e.target.matches(".modal-backdrop")) {
        this.closeModal(backdrop);
      }
    });

    document.addEventListener('keyup', (e) => {
      if(e.code === "Escape") this.closeModal(backdrop);
    })
  };
  // End-openModal

  this.closeModal = (modalElement) => {
    modalElement.classList.remove("show");
    modalElement.ontransitionend = function () {
      modalElement.remove();
    };
  };
}

const modal = new Modal();

document.getElementById("open-modal-1").addEventListener("click", () => {
  modal.openModal({
    templateId: 'modal-1'
  });
});

document.getElementById("open-modal-2").addEventListener("click", () => {
  modal.openModal(`<h1>Modal 2</h1>`);
});

document.getElementById("open-modal-3").addEventListener("click", () => {
  modal.openModal(`<h1>Modal 3</h1>`);
});






