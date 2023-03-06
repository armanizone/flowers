import PocketBase from 'pocketbase'

const client = new PocketBase(import.meta.env.VITE_APP_POCKETBASE_URL)

export async function getUsers() {
  return await client.collection('types').getFullList({
    expand: 'flowers'
  })
}

