export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60396dab197dff3754a3c799',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bzwbx9wy',
                  apiId: '218ae621-bc7e-4d37-8f96-e7382ce5396d'
                },
                {
                  buildHookId: '60396dabe9dfff37e122b74f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-eydwmhae',
                  apiId: '63a959b8-9bd0-4ef9-9502-456a44c75727'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaojuan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-eydwmhae.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
