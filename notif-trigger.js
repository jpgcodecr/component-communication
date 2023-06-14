class NotificationTrigger extends HTMLElement {
    constructor() {
        super();
        this.heading = this.getAttribute('data-heading');
        this.inputLabel = this.getAttribute('data-input-label');
        this.triggerLabel = this.getAttribute('data-trigger-label');
    }

    // Life cycle method to be run when component is available on page
    connectedCallback() {
        this.render();
        this.bindEvents();
    }   

    /**
     * @method bindEvents
     * Bind events on all actionable HTML Object
     */
    bindEvents() {

        this.querySelector('.cmp-trigger').addEventListener('click', () => {
            
            const input = this.querySelector('.cmp-input');
            const inputValue = input.value;

            sendNotification(`${this.getAttribute('data-component-id')}: ${inputValue}`);
            input.value = '';
        })
    }

    /**
     * @method render
     * Generated HTML of component and rendered on page
     */
    render() {
        this.innerHTML = `
            <h2>${this.heading}</h2>
            <input type="text" class="cmp-input" placeholder="${this.inputLabel}">
            <button class="cmp-trigger">${this.triggerLabel}</button>
        `
    }
}
customElements.define('notification-trigger', NotificationTrigger);