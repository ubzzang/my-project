import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore('menu', () => {
    const currentDepth1Id = ref(null)
    const currentDepth1Title = ref('')

    const setDepth1 = (id, title) => {
        currentDepth1Id.value = id
        currentDepth1Title.value = title
    }

    return {currentDepth1Title, currentDepth1Id, setDepth1}
})