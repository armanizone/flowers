import PocketBase from 'pocketbase'

const pb = new PocketBase(import.meta.env.VITE_APP_POCKETBASE_URL)

pb.autoCancellation(false);

const getUrl = (e: any, name: string) => {
  if (!e || !name) return
  return pb.getFileUrl(e, name)
}

export {
  pb,
  getUrl,
}