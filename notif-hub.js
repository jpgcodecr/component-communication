class NotificationHub extends HTMLElement {
    constructor() {
        super();
        this.heading = this.getAttribute('data-heading');
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
        addEventListener('newNotification', (e) => {
            this.renderNotification(e.detail);
        })

        addEventListener('clearNotifications', () => {
            this.clearNotifications();
        })
    }

    renderNotification(text) {
        // Clear default text
        if (!this.querySelectorAll('.notifications .notif').length) {
            this.querySelector('.notifications').innerHTML = ''; 
        }
        
        // Append new notifications
        this.querySelector('.notifications').insertAdjacentHTML('beforeend', `
            <div class="notif">${text}</div>
        `)
    }

    clearNotifications() {
        this.querySelector('.notifications').innerHTML = this.heading;
    }

    /**
     * @method render
     * Generated HTML of component and rendered on page
     */
    render() {
        this.innerHTML = `
            <div class="notifications">
                <span>${this.heading}</span>
            </div>
        `
    }
}
customElements.define('notification-hub', NotificationHub);