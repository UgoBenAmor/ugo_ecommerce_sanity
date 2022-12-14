import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId : 'wdkhms0p',
    dataset :'production',
    apiVersion :'2022-07-09',
    useCdn :true,
    token: process.env.SANITY_AUTH_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor =(source)=>builder.image(source);