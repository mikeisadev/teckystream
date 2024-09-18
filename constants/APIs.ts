export const httpProtocol: string = 'https://'

export const baseURL: string = `${httpProtocol}teckystream.com`

export const apiNamespace: string = '/wp-json/wp/v2/'

export const apiBaseUrl: string = `${baseURL}${apiNamespace}`

export const APIs = {
    data: {
        blogPosts: apiBaseUrl + 'posts',
        blogPostsSearch: apiBaseUrl + 'posts' + '?s=',
        products: baseURL + '/wp-json/ts/v1/products'
    },
    user: {

    }
}