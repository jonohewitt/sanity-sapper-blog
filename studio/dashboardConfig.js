export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f40323aff066100d4d92d6c',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-nfu3qak3',
                  apiId: 'c7e2a023-ba58-4806-a66e-1c00afc307e8'
                },
                {
                  buildHookId: '5f40323aff066100aad92ddb',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ango4k85',
                  apiId: '83166aa2-3c51-4859-9cf9-c8eeeb0a531e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonohewitt/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ango4k85.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
