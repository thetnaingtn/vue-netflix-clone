import { computed } from "vue"
import Fuse from "fuse.js";

export default function useContentSearch(slides, searchTerm) {
    return computed(() => {
        const fuse = new Fuse(slides.value, {
            keys: ["data.description", "data.title", "data.genre"]
        })
        const result = fuse.search(searchTerm.value).map(({ item }) => item)

        if (slides.value.length > 0 && result.length > 0 && searchTerm.value.length > 3) {
            return result
        } else {
            return slides.value
        }
    })
}