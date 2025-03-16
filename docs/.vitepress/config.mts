import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Subgate",
    description: "A self-hosted microservice for subscription management",
    base: "/subgate.dev/",
    cleanUrls: false,
    ignoreDeadLinks: true,
    themeConfig: {
        sidebar: [
            {
                text: 'Getting started',
                items: [
                    {text: 'Installation', link: '/installation'},
                    {text: 'Client', link: '/client'},
                    {text: 'Simple examples', link: '/simple-examples'},
                ],
            },
            {
                text: 'Core experience',
                items: [
                    {text: 'Plan management', link: '/plan-management.md'},
                    {text: 'Subscription management', link: '/subscription-management'},

                ],
            },
            {
                text: 'Webhooks',
                items: [
                    {text: 'Events', link: '/events'},
                    {text: 'Webhook management', link: '/webhook-management'},
                ],
            },
            {
                text: 'Self-hosted',
                items: [
                    {text: 'Docker-compose.yml', link: '/environment-settings'},
                ],
            },
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/subgate-microservice/subgate'},
        ],
    }
})
