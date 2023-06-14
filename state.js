/**
 * Emit a notification event
 * @param {String} data 
 */
const sendNotification = (data) => {
    dispatchEvent(new CustomEvent('newNotification',  { detail: data }));
}

/**
 * Clear notifications
 */
const clearNotifications = () => {
    dispatchEvent(new Event('clearNotifications'));
}