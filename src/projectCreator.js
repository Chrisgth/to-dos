export const projectCreator = (() => {
    const popupControl = () => {
        const projectPopup = document.getElementById('projectPopup')
        projectPopup.classList.toggle('active')
    }
    return {
        popupControl,
    }
})()