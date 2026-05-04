/**
 * Service Worker for Push Notifications
 * Handles push events and notification interactions
 */

const NOTIFICATION_TAG = 'job-notification'

// Handle push events
self.addEventListener('push', event => {
    if (!event.data) {
        console.log('Push notification received but no data')
        return
    }

    try {
        const data = event.data.json()
        const { notification, data: notificationData } = data

        const options = {
            icon: notification.icon || '/images/notification-icon.png',
            badge: notification.badge || '/images/notification-badge.png',
            body: notification.body,
            tag: notification.tag || NOTIFICATION_TAG,
            requireInteraction: notification.requireInteraction || false,
            data: notificationData,
            actions: [
                {
                    action: 'open',
                    title: 'View Job'
                },
                {
                    action: 'close',
                    title: 'Dismiss'
                }
            ]
        }

        event.waitUntil(
            self.registration.showNotification(notification.title, options)
        )
    } catch (error) {
        console.error('Error handling push notification:', error)
    }
})

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    event.notification.close()

    if (event.action === 'close') {
        return
    }

    const notificationData = event.notification.data
    const url = notificationData?.actionUrl || '/jobs'

    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(clientList => {
            // Check if window is already open
            for (const client of clientList) {
                if (client.url === url && 'focus' in client) {
                    return client.focus()
                }
            }
            // Open new window if not found
            if (clients.openWindow) {
                return clients.openWindow(url)
            }
        })
    )
})

// Handle notification close
self.addEventListener('notificationclose', event => {
    console.log('Notification closed:', event.notification.tag)
})

// Background sync for failed notifications (if needed)
self.addEventListener('sync', event => {
    if (event.tag === 'sync-notifications') {
        event.waitUntil(syncNotifications())
    }
})

async function syncNotifications() {
    try {
        // Implement background sync logic if needed
        console.log('Syncing notifications in background')
    } catch (error) {
        console.error('Error syncing notifications:', error)
    }
}