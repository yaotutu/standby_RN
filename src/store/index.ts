import { create } from 'zustand'
interface profilesStore{
  fontColor: string,
  fontSize:  number,
  backgroundColor: string
}
const useProfilesStore = create<profilesStore>()((set) => ({
  fontColor: "#8cac7c",
  fontSize: 200,
  backgroundColor: "#000"

}))
export default useProfilesStore
